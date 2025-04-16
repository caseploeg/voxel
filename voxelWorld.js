
// VoxelWorld.js
import { WorldData } from './worldData.js';
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
    this.worldData = new WorldData(this.blockRegistry);
    this.meshBuilder = new MeshBuilder(textureManager, this.blockRegistry);
    
    // Store meshes
    this.meshes = [];
    this.clock = new THREE.Clock();
    
    // Create our AdvancedTerrain instance with a fixed seed (or use Math.random())
    this.terrainGen = new AdvancedTerrain(12345);
  }

  // Generate terrain using the new perlin-based AdvancedTerrain generator.
  generateTerrain(worldSize = 10000) {
    // Define chunk size (e.g., 16x16 columns per chunk)
    const chunkSize = 16;
    // Calculate how many chunks we need to cover the desired world size.
    const numChunksX = Math.ceil(worldSize / chunkSize);
    const numChunksZ = Math.ceil(worldSize / chunkSize);

    // Generate a terrain map: an object mapping "chunkX,chunkZ" to a 3D voxel array.
    const terrainMap = generateTerrain(this.terrainGen, numChunksX, numChunksZ, chunkSize);

    // A mapping from our AdvancedTerrain block IDs to block names expected by worldData.
    const BLOCK_NAME_MAP = {
      [PERLIN_BLOCK.AIR]: null,
      [PERLIN_BLOCK.GRASS]: "grass",
      [PERLIN_BLOCK.DIRT]: "dirt",
      [PERLIN_BLOCK.STONE]: "stone",
      [PERLIN_BLOCK.WATER]: "water",
      [PERLIN_BLOCK.WOOD]: "stone",
      [PERLIN_BLOCK.LEAVES]: "stone"
    };

    // Iterate through each generated chunk and set blocks in the worldData.
    for (const key in terrainMap) {
      if (!terrainMap.hasOwnProperty(key)) continue;
      const [chunkX, chunkZ] = key.split(',').map(Number);
      const chunk = terrainMap[key]; // 3D array: chunk[x][z][y]
      const localChunkSize = chunk.length; // should equal chunkSize (e.g., 16)
      // We assume each column has the same vertical dimension.
      const heightDimension = chunk[0][0].length;
      for (let x = 0; x < localChunkSize; x++) {
        for (let z = 0; z < localChunkSize; z++) {
          for (let y = 0; y < heightDimension; y++) {
            const blockType = chunk[x][z][y];
            // Only add non-air blocks to the world.
            if (blockType !== PERLIN_BLOCK.AIR) {
              // Compute the global coordinates for this voxel.
              const globalX = chunkX * localChunkSize + x;
              const globalZ = chunkZ * localChunkSize + z;
              const globalY = y;
              // Use our BLOCK_NAME_MAP to get the texture/block name.
              const blockName = BLOCK_NAME_MAP[blockType];
              if (blockName) {
                // Map PERLIN_BLOCK to BlockType
                const blockTypeEnum = blockType === PERLIN_BLOCK.WATER ? BlockType.WATER : BlockType.STANDARD;
                this.worldData.setBlock(globalX, globalY, globalZ, blockTypeEnum, blockName);
              }
            }
          }
        }
      }
    }
  }
  
  // Add a water feature (like a pond or lake)
  addWaterFeature(x, y, z, width, height, depth) {
    for (let dx = 0; dx < width; dx++) {
      for (let dy = 0; dy < height; dy++) {
        for (let dz = 0; dz < depth; dz++) {
          this.worldData.setBlock(x + dx, y + dy, z + dz, BlockType.WATER, 'ice');
        }
      }
    }
  }
  
  // Set a block in the world
  setBlock(x, y, z, blockType, blockName) {
    this.worldData.setBlock(x, y, z, blockType, blockName);
  }
  
  // Set a named block
  setNamedBlock(x, y, z, blockName) {
    this.worldData.setNamedBlock(x, y, z, blockName);
  }
  
  // Check if a block exists
  hasBlock(x, y, z) {
    return this.worldData.hasBlock(x, y, z);
  }
  
  // Build meshes from world data
  buildCulledMesh() {
    // Remove existing meshes
    this.meshes.forEach(mesh => this.scene.remove(mesh));
    
    // Build new meshes from worldData
    this.meshes = this.meshBuilder.buildMeshes(this.worldData, this.scene);
    
    return this.meshes;
  }
  
  // Update animations
  update(delta) {
    this.meshBuilder.update(delta);
  }
}
