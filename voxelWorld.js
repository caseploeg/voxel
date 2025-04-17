
// VoxelWorld.js
import { WorldData, ChunkManager } from './worldData.js';
import { MeshBuilder } from './meshBuilder.js';
import { BlockRegistry, BlockType } from './blockRegistry.js';
import * as THREE from 'three';
// Import terrain generator factory 
import { TerrainGeneratorFactory, TERRAIN_TYPE, PERLIN_BLOCK, DENSITY_BLOCK } from './terrainGenerator.js';
// Import the worker-based chunk and geometry managers
import { ChunkGenerationManager } from './workers/chunkManager.js';

export class VoxelWorld {
  constructor(scene, textureManager, terrainType = TERRAIN_TYPE.PERLIN) {
    this.scene = scene;
    
    // Create components
    this.blockRegistry = new BlockRegistry(textureManager);
    this.worldData = new WorldData(this.blockRegistry); // Legacy support
    this.chunkManager = new ChunkManager(this.blockRegistry, 12); // Chunk-based storage
    this.meshBuilder = new MeshBuilder(textureManager, this.blockRegistry);
    
    // Store meshes
    this.meshes = [];
    this.clock = new THREE.Clock();
    
    // View distance for chunk rendering (in chunks) - smaller for more visible loading/unloading
    this.viewDistance = 5;
    
    // Store the current terrain type
    this.terrainType = terrainType;
    
    // Create our terrain generator using the factory
    const { generator, blockMapping } = TerrainGeneratorFactory.createGenerator(terrainType, 12345);
    this.terrainGen = generator;
    this.BLOCK_NAME_MAP = blockMapping;
    
    // Create the worker-based chunk generation manager
    this.chunkGenManager = new ChunkGenerationManager(this.terrainGen, this.BLOCK_NAME_MAP);
    
    // Create the geometry worker manager
    // Store a reference to textureManager so we can use it later
    this.textureManager = textureManager;
    
    // Chunk queue for processing newly generated chunks
    this.chunkQueue = [];
    this.isProcessingChunkQueue = false;
    
    // Geometry queue for tracking mesh building
    this.geometryQueue = [];
    this.geometryStats = {
      totalBuilds: 0,
      workerTime: 0,
      mainThreadTime: 0
    };
    
    // Track chunks being generated/built
    this.chunksBeingGenerated = new Set();
    this.chunksBeingBuilt = new Set();
    
    // Initialize the workers (not awaited to avoid blocking constructor)
    Promise.all([
      this.chunkGenManager.initialize(),
    ]).catch(error => {
      console.error('Failed to initialize workers:', error);
    });
  }
  
  // Change the terrain generation algorithm
  setTerrainType(terrainType) {
    if (this.terrainType === terrainType) {
      return; // Already using this terrain type
    }
    
    // Create new terrain generator
    const { generator, blockMapping } = TerrainGeneratorFactory.createGenerator(terrainType, 12345);
    
    // Stop any ongoing generation
    this.chunkGenManager.shutdown();
    
    // Update terrain generator and mapping
    this.terrainGen = generator;
    this.BLOCK_NAME_MAP = blockMapping;
    this.terrainType = terrainType;
    
    // Clear all existing chunks
    this.chunkManager.chunks.clear();
    
    // Remove all chunk meshes
    this.meshBuilder.removeAllChunkMeshes(this.scene);
    
    // Recreate the chunk manager with the new generator
    this.chunkGenManager = new ChunkGenerationManager(this.terrainGen, this.BLOCK_NAME_MAP);
    
    // Also shutdown and recreate the geometry manager
    
    // Reset chunk generation state
    this.chunkQueue = [];
    this.isProcessingChunkQueue = false;
    this.chunksBeingGenerated = new Set();
    this.chunksBeingBuilt = new Set();
    this.geometryQueue = [];
    
    // Reset statistics
    this.geometryStats = {
      totalBuilds: 0,
      workerTime: 0,
      mainThreadTime: 0
    };
    
    // Initialize the workers again
    Promise.all([
      this.chunkGenManager.initialize(),
    ]).catch(error => {
      console.error('Failed to initialize workers:', error);
    });
    
    return this.terrainType;
  }

  // Initialize the terrain system without generating all chunks at once
  initializeTerrain(initialSize = 4) {
    // Define the initial area to generate centered on the player
    const centerX = 0;
    const centerZ = 0;
    
    // Generate just the starter chunks
    for (let x = centerX - initialSize; x <= centerX + initialSize; x++) {
      for (let z = centerZ - initialSize; z <= centerZ + initialSize; z++) {
        this.generateChunk(x, z);
      }
    }
  }
  
  // Generate a single chunk at the specified chunk coordinates
  async generateChunk(chunkX, chunkZ) {
    // Check if the chunk already exists
    const key = `${chunkX},${chunkZ}`;
    if (this.chunkManager.chunks.has(key)) {
      return key; // Skip generation if chunk already exists
    }
    
    // Check if the chunk is already being generated
    if (this.chunksBeingGenerated.has(key)) {
      return key; // Skip if already in progress
    }
    
    // Mark this chunk as being generated
    this.chunksBeingGenerated.add(key);
    
    try {
      // Request chunk generation from the worker pool
      const chunkSize = this.chunkManager.chunkSize;
      
      // Queue the chunk generation request
      this.chunkQueue.push({
        chunkX,
        chunkZ,
        key
      });
      
      // Start processing the queue if not already running
      if (!this.isProcessingChunkQueue) {
        this._processChunkQueue();
      }
      
      return key;
    } catch (error) {
      console.error(`Error generating chunk at ${chunkX},${chunkZ}:`, error);
      // Remove from in-progress set
      this.chunksBeingGenerated.delete(key);
      return null;
    }
  }
  
  // Process the chunk generation queue
  async _processChunkQueue() {
    if (this.isProcessingChunkQueue) return;
    
    this.isProcessingChunkQueue = true;
    
    while (this.chunkQueue.length > 0) {
      // Get the next chunk from the queue
      const { chunkX, chunkZ, key } = this.chunkQueue.shift();
      
      try {
        // Generate the chunk in the worker
        const result = await this.chunkGenManager.generateChunk(
          chunkX, 
          chunkZ, 
          this.chunkManager.chunkSize
        );
        
        // Process the generated chunk data
        this._processGeneratedChunkData(chunkX, chunkZ, result.chunkData, result.generationTime);
        
        // Remove from in-progress set
        this.chunksBeingGenerated.delete(key);
      } catch (error) {
        console.error(`Error processing chunk at ${chunkX},${chunkZ}:`, error);
        // Remove from in-progress set
        this.chunksBeingGenerated.delete(key);
      }
    }
    
    this.isProcessingChunkQueue = false;
  }
  
  // Process the chunk data received from a worker
  _processGeneratedChunkData(chunkX, chunkZ, chunkData, generationTime) {
    // Track chunk generation performance metrics
    if (!this.generationStats) {
      this.generationStats = {
        totalChunks: 0,
        totalTime: 0,
        maxTime: 0,
        minTime: Number.MAX_SAFE_INTEGER
      };
    }
    if (generationTime) {
      this.generationStats.totalChunks++;
      this.generationStats.totalTime += generationTime;
      this.generationStats.maxTime = Math.max(this.generationStats.maxTime, generationTime);
      this.generationStats.minTime = Math.min(this.generationStats.minTime, generationTime);
    }
    
    const chunkSize = this.chunkManager.chunkSize;
    const localChunkSize = chunkData.length; // should equal chunkSize (e.g., 16)
    const heightDimension = chunkData[0][0].length;
    
    for (let x = 0; x < localChunkSize; x++) {
      for (let z = 0; z < localChunkSize; z++) {
        for (let y = 0; y < heightDimension; y++) {
          const blockType = chunkData[x][z][y];
          // Only add non-air blocks to the world
          if (blockType !== PERLIN_BLOCK.AIR) {
            // Compute the global coordinates for this voxel
            const globalX = chunkX * localChunkSize + x;
            const globalZ = chunkZ * localChunkSize + z;
            const globalY = y;
            // Use our BLOCK_NAME_MAP to get the texture/block name
            const blockName = this.BLOCK_NAME_MAP[blockType];
            if (blockName) {
              // Map PERLIN_BLOCK to BlockType
              let blockTypeEnum;
              
              // Handle special cases for different block types
              if (blockType === PERLIN_BLOCK.WATER) {
                blockTypeEnum = BlockType.WATER;
              } else if (blockName === 'grass_block') {
                blockTypeEnum = BlockType.MULTI_SIDED;
              } else if (blockName === 'poppy' || blockType === 5) {
                blockTypeEnum = BlockType.CROSS;
                console.log("Creating CROSS block (poppy) at", globalX, globalY, globalZ);
              } else {
                blockTypeEnum = BlockType.STANDARD;
              }
              
              // Add to chunk-based storage
              this.chunkManager.setBlock(globalX, globalY, globalZ, blockTypeEnum, blockName);
            }
          }
        }
      }
    }
    
    // Build the mesh for this newly created chunk
    if (this.scene) {
      this.rebuildChunkMesh(chunkX, chunkZ);
    }
    
    return `${chunkX},${chunkZ}`;
  }
  
  // Ensure chunks exist around a specific position
  async ensureChunksExist(worldX, worldZ, radius = 1) {
    const chunkSize = this.chunkManager.chunkSize;
    const centerChunkX = Math.floor(worldX / chunkSize);
    const centerChunkZ = Math.floor(worldZ / chunkSize);
    
    const chunksToGenerate = [];
    const chunksBeingLoaded = [];
    const alreadyExistingCount = [];
    
    // Check which chunks need to be generated
    for (let x = centerChunkX - radius; x <= centerChunkX + radius; x++) {
      for (let z = centerChunkZ - radius; z <= centerChunkZ + radius; z++) {
        const key = `${x},${z}`;
        
        // Calculate priority - closer chunks get higher priority
        const dx = Math.abs(x - centerChunkX);
        const dz = Math.abs(z - centerChunkZ);
        const priority = radius - Math.max(dx, dz);
        
        if (!this.chunkManager.chunks.has(key)) {
          if (!this.chunksBeingGenerated.has(key)) {
            chunksToGenerate.push({ x, z, priority });
          } else {
            chunksBeingLoaded.push(key);
          }
        } else {
          alreadyExistingCount.push(key);
        }
      }
    }
    
    // Sort by priority (highest first)
    chunksToGenerate.sort((a, b) => b.priority - a.priority);
    
    // Generate the new chunks - we don't await them to avoid blocking
    // Instead, they'll be processed asynchronously by the worker pool
    chunksToGenerate.forEach(({ x, z }) => {
      this.generateChunk(x, z);
    });
    
    // Count of chunks that need to be generated 
    return chunksToGenerate.length;
  }
  
  // Add a water feature (like a pond or lake)
  addWaterFeature(x, y, z, width, height, depth) {
    for (let dx = 0; dx < width; dx++) {
      for (let dy = 0; dy < height; dy++) {
        for (let dz = 0; dz < depth; dz++) {
          // Legacy support
          this.worldData.setBlock(x + dx, y + dy, z + dz, BlockType.WATER, 'ice');
          
          // Chunk-based storage
          this.chunkManager.setBlock(x + dx, y + dy, z + dz, BlockType.WATER, 'ice');
        }
      }
    }
  }
  
  // Set a block in the world
  setBlock(x, y, z, blockType, blockName) {
    // Legacy support
    this.worldData.setBlock(x, y, z, blockType, blockName);
    
    // Add to chunk manager and get affected chunk
    const { chunkX, chunkZ } = this.chunkManager.setBlock(x, y, z, blockType, blockName);
    
    // Rebuild just the affected chunk's mesh
    this.rebuildChunkMesh(chunkX, chunkZ);
  }
  
  // Set a named block
  setNamedBlock(x, y, z, blockName) {
    // Legacy support
    this.worldData.setNamedBlock(x, y, z, blockName);
    
    // Add to chunk manager and get affected chunk
    const { chunkX, chunkZ } = this.chunkManager.setNamedBlock(x, y, z, blockName);
    
    // Rebuild just the affected chunk's mesh
    this.rebuildChunkMesh(chunkX, chunkZ);
  }
  
  // Check if a block exists
  hasBlock(x, y, z) {
    return this.chunkManager.hasBlock(x, y, z);
  }
  
  // Legacy method: build all meshes at once (not chunk-based)
  buildCulledMesh() {
    // Remove existing meshes
    this.meshes.forEach(mesh => this.scene.remove(mesh));
    
    // Build new meshes from worldData
    this.meshes = this.meshBuilder.buildMeshes(this.worldData, this.scene);
    
    return this.meshes;
  }
  
  // Build all chunk meshes
  buildAllChunkMeshes(playerX = 0, playerZ = 0) {
    // Build chunk meshes with optional view distance
    this.meshes = this.meshBuilder.buildAllChunkMeshes(
      this.chunkManager,
      this.scene,
      playerX,
      playerZ,
      this.viewDistance
    );
    
    return this.meshes;
  }
  
  // Rebuild just one chunk's mesh
  async rebuildChunkMesh(chunkX, chunkZ) {
    // Skip if this chunk is already being built
    const chunkKey = `${chunkX},${chunkZ}`;
    if (this.chunksBeingBuilt.has(chunkKey)) {
      return null;
    }
    
    // Mark this chunk as being built
    this.chunksBeingBuilt.add(chunkKey);
    
    try {
      // Remove existing chunk mesh
      this.meshBuilder.removeChunkMesh(this.scene, chunkX, chunkZ);
      
      // Get chunk data
      const chunkData = this.chunkManager.getChunk(chunkX, chunkZ);
      if (!chunkData) {
        this.chunksBeingBuilt.delete(chunkKey);
        return null;
      }
           
      // When geometry is ready, build the mesh on the main thread
      const mainThreadStart = performance.now();
           
      const mainThreadEnd = performance.now();
      const mainThreadTime = mainThreadEnd - mainThreadStart;
      
      // Track mesh building performance metrics
      if (!this.buildStats) {
        this.buildStats = {
          totalMeshes: 0,
          totalTime: 0,
          maxTime: 0,
          minTime: Number.MAX_SAFE_INTEGER,
          lastTime: 0,
          workerTime: 0,
          mainThreadTime: 0
        };
      }
      
      this.buildStats.totalMeshes++;
      this.buildStats.totalTime += result.buildTime + mainThreadTime;
      this.buildStats.workerTime += result.buildTime;
      this.buildStats.mainThreadTime += mainThreadTime;
      this.buildStats.maxTime = Math.max(this.buildStats.maxTime, result.buildTime + mainThreadTime);
      this.buildStats.minTime = Math.min(this.buildStats.minTime, result.buildTime + mainThreadTime);
      this.buildStats.lastTime = result.buildTime + mainThreadTime;
      this.buildStats.lastWorkerTime = result.buildTime;
      this.buildStats.lastMainThreadTime = mainThreadTime;
      
      // Remove from being built
      this.chunksBeingBuilt.delete(chunkKey);
      
      return meshes;
    } catch (error) {
      console.error(`Error building chunk mesh at ${chunkX},${chunkZ}:`, error);
      this.chunksBeingBuilt.delete(chunkKey);
      return null;
    }
  }
  
  // Create THREE.js meshes from geometry buffers received from workers
  _createMeshesFromGeometryBuffers(geometryBuffers, chunkX, chunkZ) {
    const meshes = [];
    const chunkGroup = new THREE.Group();
    
    // Add chunk info to the group
    chunkGroup.userData = { 
      isChunk: true,
      chunkX, 
      chunkZ,
      key: `${chunkX},${chunkZ}`
    };
    
    // Create standard mesh if it exists
    if (geometryBuffers.standard) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(geometryBuffers.standard.positions, 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(geometryBuffers.standard.normals, 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(geometryBuffers.standard.uvs, 2));
      geo.setIndex(new THREE.BufferAttribute(geometryBuffers.standard.indices, 1));
      geo.computeBoundingSphere();
      
      // Use the combined atlas texture from the TextureManager
      const mat = new THREE.MeshStandardMaterial({ 
        map: this.textureManager.atlasTexture,
        metalness: 0,
        roughness: 1
      });
      
      const mesh = new THREE.Mesh(geo, mat);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      chunkGroup.add(mesh);
      meshes.push(mesh);
    }
    
    // Create water mesh if it exists
    if (geometryBuffers.water) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(geometryBuffers.water.positions, 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(geometryBuffers.water.normals, 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(geometryBuffers.water.uvs, 2));
      geo.setIndex(new THREE.BufferAttribute(geometryBuffers.water.indices, 1));
      geo.computeBoundingSphere();
      
      // Get a water texture from the atlas or use the first available texture
      const waterUV = this.textureManager.getTexture('packed_ice');
      
      // Create the water material
      let material;
      if (this.meshBuilder.useAdvancedWaterShader) {
        material = this.meshBuilder.createAdvancedWaterMaterial(waterUV);
      } else {
        material = this.meshBuilder.createWaterMaterial(waterUV);
      }
      
      const mesh = new THREE.Mesh(geo, material);
      mesh.receiveShadow = true;
      
      // Store in special meshes for animation updates
      const chunkKey = `${chunkX},${chunkZ}`;
      if (!this.meshBuilder.specialMeshes[chunkKey]) {
        this.meshBuilder.specialMeshes[chunkKey] = {};
      }
      this.meshBuilder.specialMeshes[chunkKey][BlockType.WATER] = mesh;
      
      chunkGroup.add(mesh);
      meshes.push(mesh);
    }
    
    // Handle tinted meshes if they exist
    if (geometryBuffers.tinted) {
      for (const tintKey in geometryBuffers.tinted) {
        const tintData = geometryBuffers.tinted[tintKey];
        
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(tintData.positions, 3));
        geo.setAttribute('normal', new THREE.BufferAttribute(tintData.normals, 3));
        geo.setAttribute('uv', new THREE.BufferAttribute(tintData.uvs, 2));
        geo.setIndex(new THREE.BufferAttribute(tintData.indices, 1));
        geo.computeBoundingSphere();
        
        // Create tint material using the color
        const material = this.meshBuilder.createTintMaterial(tintData.color);
        
        const mesh = new THREE.Mesh(geo, material);
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        
        // Store in special meshes for animation updates
        const chunkKey = `${chunkX},${chunkZ}`;
        if (!this.meshBuilder.specialMeshes[chunkKey]) {
          this.meshBuilder.specialMeshes[chunkKey] = {};
        }
        if (!this.meshBuilder.specialMeshes[chunkKey].tinted) {
          this.meshBuilder.specialMeshes[chunkKey].tinted = [];
        }
        this.meshBuilder.specialMeshes[chunkKey].tinted.push(mesh);
        
        chunkGroup.add(mesh);
        meshes.push(mesh);
      }
    }
    
    // Add the chunk group to the scene
    this.scene.add(chunkGroup);
    meshes.push(chunkGroup);
    
    // Store in MeshBuilder's chunkMeshes
    this.meshBuilder.chunkMeshes.set(`${chunkX},${chunkZ}`, meshes);
    
    return meshes;
  }
  
  // Update visible chunks based on player position
  async updateVisibleChunks(playerX, playerZ) {
    // Update the player position for geometry manager prioritization
    this.camera = { position: { x: playerX, y: 0, z: playerZ } }; // Simple camera object if not set
    
    // First make sure we have all the needed chunks generated
    const chunksRequested = await this.ensureChunksExist(playerX, playerZ, this.viewDistance);
    
    // If new chunks were requested, log it
    if (chunksRequested > 0) {
      console.log(`Requested ${chunksRequested} new chunks`);
    }
    
    // Update the visible chunks in the mesh builder (only showing chunks that are fully loaded)
    this.meshBuilder.updateVisibleChunks(
      this.chunkManager,
      this.scene,
      playerX,
      playerZ,
      this.viewDistance
    );
    
    // Also update the chunk queue stats for the debug UI
    this.chunkQueueStats = {
      requested: chunksRequested,
      queued: this.chunkQueue.length,
      generating: this.chunksBeingGenerated.size
    };
    
    return chunksRequested;
  }
  
  // Set view distance for chunk rendering
  setViewDistance(distance) {
    this.viewDistance = distance;
  }
  
  // Update animations
  update(delta) {
    this.meshBuilder.update(delta);
  }
  
  // Clean up resources when shutting down
  cleanup() {
    // Shut down all worker threads
    if (this.chunkGenManager) {
      this.chunkGenManager.shutdown();
    }
  }
}
