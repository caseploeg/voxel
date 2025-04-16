
// VoxelWorld.js
import { WorldData, ChunkManager } from './worldData.js';
import { MeshBuilder } from './meshBuilder.js';
import { BlockRegistry, BlockType } from './blockRegistry.js';
import * as THREE from 'three';
// Import terrain generator factory 
import { TerrainGeneratorFactory, TERRAIN_TYPE, PERLIN_BLOCK, DENSITY_BLOCK } from './terrainGenerator.js';
// Import the worker-based chunk generation manager
import { ChunkGenerationManager } from './workers/chunkManager.js';

export class VoxelWorld {
  constructor(scene, textureManager, terrainType = TERRAIN_TYPE.PERLIN) {
    this.scene = scene;
    
    // Create components
    this.blockRegistry = new BlockRegistry(textureManager);
    this.worldData = new WorldData(this.blockRegistry); // Legacy support
    this.chunkManager = new ChunkManager(this.blockRegistry, 16); // Chunk-based storage
    this.meshBuilder = new MeshBuilder(textureManager, this.blockRegistry);
    
    // Store meshes
    this.meshes = [];
    this.clock = new THREE.Clock();
    
    // View distance for chunk rendering (in chunks) - smaller for more visible loading/unloading
    this.viewDistance = 3;
    
    // Store the current terrain type
    this.terrainType = terrainType;
    
    // Create our terrain generator using the factory
    const { generator, blockMapping } = TerrainGeneratorFactory.createGenerator(terrainType, 12345);
    this.terrainGen = generator;
    this.BLOCK_NAME_MAP = blockMapping;
    
    // Create the worker-based chunk generation manager
    this.chunkGenManager = new ChunkGenerationManager(this.terrainGen, this.BLOCK_NAME_MAP);
    
    // Chunk queue for processing newly generated chunks
    this.chunkQueue = [];
    this.isProcessingChunkQueue = false;
    
    // Track chunks being generated
    this.chunksBeingGenerated = new Set();
    
    // Initialize the workers (not awaited to avoid blocking constructor)
    this.chunkGenManager.initialize().catch(error => {
      console.error('Failed to initialize chunk workers:', error);
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
    
    // Reset chunk generation state
    this.chunkQueue = [];
    this.isProcessingChunkQueue = false;
    this.chunksBeingGenerated = new Set();
    
    // Initialize the workers again
    this.chunkGenManager.initialize().catch(error => {
      console.error('Failed to initialize chunk workers:', error);
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
              const blockTypeEnum = blockType === PERLIN_BLOCK.WATER ? BlockType.WATER : BlockType.STANDARD;
              
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
  rebuildChunkMesh(chunkX, chunkZ) {
    const startTime = performance.now();
    
    // Remove existing chunk mesh
    this.meshBuilder.removeChunkMesh(this.scene, chunkX, chunkZ);
    
    // Get chunk data
    const chunkData = this.chunkManager.getChunk(chunkX, chunkZ);
    
    // Build new mesh for just this chunk
    const meshes = this.meshBuilder.buildChunkMesh(chunkData, this.scene, chunkX, chunkZ, this.chunkManager.chunkSize);
    
    const endTime = performance.now();
    const buildTime = endTime - startTime;
    
    // Track mesh building performance metrics
    if (!this.buildStats) {
      this.buildStats = {
        totalMeshes: 0,
        totalTime: 0,
        maxTime: 0,
        minTime: Number.MAX_SAFE_INTEGER,
        lastTime: 0
      };
    }
    
    this.buildStats.totalMeshes++;
    this.buildStats.totalTime += buildTime;
    this.buildStats.maxTime = Math.max(this.buildStats.maxTime, buildTime);
    this.buildStats.minTime = Math.min(this.buildStats.minTime, buildTime);
    this.buildStats.lastTime = buildTime;
    
    return meshes;
  }
  
  // Update visible chunks based on player position
  async updateVisibleChunks(playerX, playerZ) {
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
