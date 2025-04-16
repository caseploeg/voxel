
// VoxelWorld.js
import { WorldData, ChunkManager } from './worldData.js';
import { MeshBuilder } from './meshBuilder.js';
import { BlockRegistry, BlockType } from './blockRegistry.js';
import * as THREE from 'three';
// Import AdvancedTerrain, its generateTerrain helper, and BLOCK constant
import { AdvancedTerrain, generateTerrain, BLOCK as PERLIN_BLOCK } from './perlin.js';

export class VoxelWorld {
  constructor(scene, textureManager) {
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
    this.viewDistance = 6;
    
    // Create our AdvancedTerrain instance with a fixed seed (or use Math.random())
    this.terrainGen = new AdvancedTerrain(12345);
  }

  // Initialize the terrain system without generating all chunks at once
  initializeTerrain(initialSize = 4) {
    // Define the initial area to generate centered on the player
    const centerX = 0;
    const centerZ = 0;
    
    // Create our block type mapping
    this.BLOCK_NAME_MAP = {
      [PERLIN_BLOCK.AIR]: null,
      [PERLIN_BLOCK.GRASS]: "grass",
      [PERLIN_BLOCK.DIRT]: "dirt",
      [PERLIN_BLOCK.STONE]: "stone",
      [PERLIN_BLOCK.WATER]: "water",
      [PERLIN_BLOCK.WOOD]: "stone",
      [PERLIN_BLOCK.LEAVES]: "stone"
    };
    
    // Generate just the starter chunks
    for (let x = centerX - initialSize; x <= centerX + initialSize; x++) {
      for (let z = centerZ - initialSize; z <= centerZ + initialSize; z++) {
        this.generateChunk(x, z);
      }
    }
  }
  
  // Generate a single chunk at the specified chunk coordinates
  generateChunk(chunkX, chunkZ) {
    // Check if the chunk already exists
    const key = `${chunkX},${chunkZ}`;
    if (this.chunkManager.chunks.has(key)) {
      return; // Skip generation if chunk already exists
    }
    
    // Generate a single chunk using the terrain generator
    const chunkSize = this.chunkManager.chunkSize;
    const singleChunkMap = generateTerrain(this.terrainGen, 1, 1, chunkSize, chunkX, chunkZ);
    
    if (!singleChunkMap[key]) {
      console.error(`Failed to generate chunk at ${chunkX},${chunkZ}`);
      return;
    }
    
    const chunk = singleChunkMap[key]; // 3D array: chunk[x][z][y]
    const localChunkSize = chunk.length; // should equal chunkSize (e.g., 16)
    const heightDimension = chunk[0][0].length;
    
    for (let x = 0; x < localChunkSize; x++) {
      for (let z = 0; z < localChunkSize; z++) {
        for (let y = 0; y < heightDimension; y++) {
          const blockType = chunk[x][z][y];
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
    
    return key;
  }
  
  // Ensure chunks exist around a specific position
  ensureChunksExist(worldX, worldZ, radius = 1) {
    const chunkSize = this.chunkManager.chunkSize;
    const centerChunkX = Math.floor(worldX / chunkSize);
    const centerChunkZ = Math.floor(worldZ / chunkSize);
    
    const chunksToGenerate = [];
    
    // Check which chunks need to be generated
    for (let x = centerChunkX - radius; x <= centerChunkX + radius; x++) {
      for (let z = centerChunkZ - radius; z <= centerChunkZ + radius; z++) {
        const key = `${x},${z}`;
        if (!this.chunkManager.chunks.has(key)) {
          chunksToGenerate.push({ x, z });
        }
      }
    }
    
    // Generate the new chunks
    chunksToGenerate.forEach(({ x, z }) => {
      this.generateChunk(x, z);
    });
    
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
    // Remove existing chunk mesh
    this.meshBuilder.removeChunkMesh(this.scene, chunkX, chunkZ);
    
    // Get chunk data
    const chunkData = this.chunkManager.getChunk(chunkX, chunkZ);
    
    // Build new mesh for just this chunk
    const meshes = this.meshBuilder.buildChunkMesh(chunkData, this.scene, chunkX, chunkZ, this.chunkManager.chunkSize);
    
    return meshes;
  }
  
  // Update visible chunks based on player position
  updateVisibleChunks(playerX, playerZ) {
    // First make sure we have all the needed chunks generated
    const chunksGenerated = this.ensureChunksExist(playerX, playerZ, this.viewDistance);
    
    // If new chunks were generated, log it
    if (chunksGenerated > 0) {
      console.log(`Generated ${chunksGenerated} new chunks`);
    }
    
    // Now update the visible chunks in the mesh builder
    this.meshBuilder.updateVisibleChunks(
      this.chunkManager,
      this.scene,
      playerX,
      playerZ,
      this.viewDistance
    );
    
    return chunksGenerated;
  }
  
  // Set view distance for chunk rendering
  setViewDistance(distance) {
    this.viewDistance = distance;
  }
  
  // Update animations
  update(delta) {
    this.meshBuilder.update(delta);
  }
}
