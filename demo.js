// demo.js - Simple terrain generation demo with Perlin noise
// This demo shows how to generate basic Minecraft-style terrain
import { Noise } from 'noisejs';

// Block type definitions
const BLOCK = {
  AIR: 0,
  STONE: 1,
  GRASS: 2,
  DIRT: 3,
  WATER: 4,
  SAND: 5
};

class DemoTerrain {
  constructor(seed = Math.random()) {
    // Initialize the noise generator with the seed
    this.noise = new Noise(seed);
    this.seed = seed;
    
    // Terrain parameters
    this.seaLevel = 12;
    this.heightScale = 10;
    this.noiseScale = 0.02;
    this.mountainNoiseScale = 0.005;
  }
  
  /**
   * Calculate height at a specific world position
   * @param {number} x - World X coordinate
   * @param {number} z - World Z coordinate
   * @returns {number} - Height value
   */
  getHeight(x, z) {
    // Base terrain - smooth rolling hills
    const baseNoise = this.noise.perlin2(x * this.noiseScale, z * this.noiseScale);
    
    // Mountain noise - larger features
    const mountainNoise = this.noise.perlin2(x * this.mountainNoiseScale, z * this.mountainNoiseScale);
    
    // Combine noises: mountainNoise determines how much the base noise affects height
    const combinedNoise = baseNoise * 0.5 + 0.5; // Convert to 0-1 range
    const amplifiedNoise = combinedNoise * (mountainNoise * 0.5 + 0.5) * 2; // Amplify based on mountain noise
    
    // Convert to height value
    const height = Math.floor(this.seaLevel + amplifiedNoise * this.heightScale);
    return height;
  }
  
  /**
   * Generate a chunk of terrain
   * @param {number} chunkX - Chunk X coordinate
   * @param {number} chunkZ - Chunk Z coordinate
   * @param {number} chunkSize - Size of chunk (width/depth)
   * @returns {Array} - 3D array of block data
   */
  generateChunk(chunkX, chunkZ, chunkSize) {
    // Create a 3D array for the chunk
    const maxHeight = this.seaLevel + this.heightScale * 2;
    const chunk = [];
    
    for (let x = 0; x < chunkSize; x++) {
      chunk[x] = [];
      for (let z = 0; z < chunkSize; z++) {
        chunk[x][z] = new Array(maxHeight).fill(BLOCK.AIR);
        
        // Calculate world coordinates
        const worldX = chunkX * chunkSize + x;
        const worldZ = chunkZ * chunkSize + z;
        
        // Get height at this position
        const height = this.getHeight(worldX, worldZ);
        
        // Fill blocks up to the height
        for (let y = 0; y < maxHeight; y++) {
          if (y === 0) {
            // Bedrock at the bottom
            chunk[x][z][y] = BLOCK.STONE;
          } 
         // Above height = air (already filled)
        }
      }
    }
    
    return chunk;
  }
}

/**
 * Generates a terrain map by creating chunks
 * @param {DemoTerrain} terrainGen - Instance of DemoTerrain
 * @param {number} numChunksX - Number of chunks along X-axis
 * @param {number} numChunksZ - Number of chunks along Z-axis
 * @param {number} chunkSize - Size of each chunk
 * @param {number} startChunkX - Starting chunk X coordinate
 * @param {number} startChunkZ - Starting chunk Z coordinate
 * @returns {Object} - Map of chunk coordinates to chunk data
 */
function generateTerrain(terrainGen, numChunksX, numChunksZ, chunkSize, startChunkX = 0, startChunkZ = 0) {
  const terrainMap = {};
  
  for (let xOffset = 0; xOffset < numChunksX; xOffset++) {
    for (let zOffset = 0; zOffset < numChunksZ; zOffset++) {
      // Calculate chunk coordinates
      const chunkX = startChunkX + xOffset;
      const chunkZ = startChunkZ + zOffset;
      
      // Generate chunk and store in map
      const chunkData = terrainGen.generateChunk(chunkX, chunkZ, chunkSize);
      terrainMap[`${chunkX},${chunkZ}`] = chunkData;
    }
  }
  
  return terrainMap;
}

// Export for use in other files
export { DemoTerrain, BLOCK, generateTerrain };
