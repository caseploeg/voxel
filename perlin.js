// perlin.js
// Advanced Voxel Terrain Generation with Perlin Noise (Three.js Minecraft-Style)
// This implementation uses an external Perlin noise library (e.g. noisejs).
// Make sure to install and import the noise library appropriately:
//    npm install noisejs // and include it in your project.

import { Noise } from 'noisejs';


// Block type definitions
const BLOCK = {
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  WATER: 4,
  // You can extend with additional block types as needed
};

class AdvancedTerrain {
  constructor(seed = Math.random()) {
    // Initialize the noise generator with a given seed.
    this.noise = new Noise(seed);
    this.seed = seed;
    // Terrain generation parameters
    this.seaLevel = 10;
    this.minHeight = 0;
    this.maxHeight = 20;
    
    // Height map parameters (multi-octave noise)
    this.heightFreq = 30;   // base frequency for terrain height
    this.heightAmp = 100;     // amplitude added atop sea level
    
    // Cave noise parameters
    this.caveFreq = 0.0;
    this.caveThreshold = 0.0;  // noise value above which a voxel is carved out
    
    // Additional parameters can be added here (for biomes, humidity, etc.)
  }
  
  /**
   * Generates a fractal 2D height using several octaves of Perlin noise.
   * @param {number} x - World x-coordinate
   * @param {number} z - World z-coordinate
   * @returns {number} - The terrain height at the given coordinates.
   */
  getHeight(x, z) {
    let total = 0;
    const octaves = 4;
    const persistence = 0.5;
    let frequency = 0.01; // Lower frequency for smoother terrain
    let amplitude = 10;   // Lower amplitude for less extreme height differences
    
    for (let i = 0; i < octaves; i++) {
      total += this.noise.perlin2(x * frequency, z * frequency) * amplitude;
      frequency *= 2;
      amplitude *= persistence;
    }
    // Offset the height by sea level so that negative noise yields underwater areas.
    const height = Math.floor(this.seaLevel + total);
    return height;
  }
  
  /**
   * Generates a voxel chunk based on world coordinates.
   * @param {number} chunkX - Chunk X index in the world grid.
   * @param {number} chunkZ - Chunk Z index in the world grid.
   * @param {number} chunkSize - Size of the chunk (width and depth).
   * @returns {Array} - A 3D array representing voxel block IDs.
   */
  generateChunk(chunkX, chunkZ, chunkSize) {
    // Simple fixed height terrain with a checker pattern
    const heightDimension = 20;
    const terrainHeight = 10; // Fixed height for debugging
    
    // Create a 3D array: chunk[x][z][y] where y is the vertical axis.
    let chunk = [];
    for (let x = 0; x < chunkSize; x++) {
      chunk[x] = [];
      for (let z = 0; z < chunkSize; z++) {
        chunk[x][z] = new Array(heightDimension).fill(BLOCK.AIR);
      }
    }
    
    // Fill with a simple checker pattern of grass and stone
    for (let x = 0; x < chunkSize; x++) {
      for (let z = 0; z < chunkSize; z++) {
        // Convert local chunk coordinates to global/world coordinates
        const worldX = chunkX * chunkSize + x;
        const worldZ = chunkZ * chunkSize + z;
        
        // Checker pattern (alternating grass and stone)
        const isGrass = (worldX + worldZ) % 2 === 0;
        
        // Fill each column with a single block type
        for (let y = 0; y < terrainHeight; y++) {
          if (y < 5) {
            // Bottom layer is always stone
            chunk[x][z][y] = BLOCK.STONE;
          } else if (y < terrainHeight - 1) {
            // Middle layers alternate between stone and dirt
            chunk[x][z][y] = BLOCK.DIRT;
          } else {
            // Top layer is grass or stone in a checker pattern
            chunk[x][z][y] = isGrass ? BLOCK.GRASS : BLOCK.STONE;
          }
        }
      }
    }
    
    return chunk;
  }
  
  /**
   * Iterates over chunk columns and conditionally places extra structures.
   * @param {Array} chunk - The voxel chunk 3D array.
   * @param {number} chunkX - Global chunk x index.
   * @param {number} chunkZ - Global chunk z index.
   * @param {number} chunkSize - Size of the chunk.
   * @param {number} heightDimension - Total vertical voxels in the chunk.
   */
  placeStructures(chunk, chunkX, chunkZ, chunkSize, heightDimension) {
    // Loop through each column (leaving a 1-block border).
    for (let x = 1; x < chunkSize - 1; x++) {
      for (let z = 1; z < chunkSize - 1; z++) {
        const worldX = chunkX * chunkSize + x;
        const worldZ = chunkZ * chunkSize + z;
        // Find the topmost non-air block to determine the surface.
        let surfaceY = -1;
        for (let y = heightDimension - 1; y >= 0; y--) {
          if (chunk[x][z][y] !== BLOCK.AIR && chunk[x][z][y] !== BLOCK.WATER) {
            surfaceY = y;
            break;
          }
        }
        if (surfaceY === -1) continue;
        
        // Use a low-scale noise to determine tree placement.
        const treeNoise = this.noise.perlin2(worldX * 0.2, worldZ * 0.2);
        if (treeNoise > 0.6 && chunk[x][z][surfaceY] === BLOCK.GRASS) {
          this.generateStoneTree(chunk, x, surfaceY + 1, z, heightDimension);
        }
        
        // Use a very low frequency noise for castle placement on flat terrain.
        const castleNoise = this.noise.perlin2(worldX * 0.05, worldZ * 0.05);
        if (castleNoise > 0.85 && this.isFlatArea(chunk, x, z, surfaceY)) {
          this.generateCastle(chunk, x, surfaceY + 1, z, chunkSize, heightDimension);
        }
      }
    }
  }
  
  /**
   * Checks a 3x3 neighborhood to determine if the area is flat.
   * @param {Array} chunk - The voxel chunk 3D array.
   * @param {number} x - Local x in chunk.
   * @param {number} z - Local z in chunk.
   * @param {number} surfaceY - Found surface height.
   * @returns {boolean} - True if the area is relatively flat.
   */
  isFlatArea(chunk, x, z, surfaceY) {
    let flat = true;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        if (chunk[x + dx] && chunk[x + dx][z + dz]) {
          let neighborY = -1;
          const column = chunk[x + dx][z + dz];
          for (let y = column.length - 1; y >= 0; y--) {
            if (column[y] !== BLOCK.AIR && column[y] !== BLOCK.WATER) {
              neighborY = y;
              break;
            }
          }
          if (neighborY !== surfaceY) {
            flat = false;
          }
        }
      }
    }
    return flat;
  }
}

/**
 * Generates a terrain map by creating chunks.
 * @param {AdvancedTerrain} terrainGen - Instance of AdvancedTerrain.
 * @param {number} numChunksX - Number of chunks along the X-axis.
 * @param {number} numChunksZ - Number of chunks along the Z-axis.
 * @param {number} chunkSize - The size (width and depth) of each chunk.
 * @param {number} [startChunkX=0] - Starting X chunk coordinate (for offset generation).
 * @param {number} [startChunkZ=0] - Starting Z chunk coordinate (for offset generation).
 * @returns {Object} - An object mapping chunk coordinate strings ("x,z") to voxel chunk arrays.
 */
function generateTerrain(terrainGen, numChunksX, numChunksZ, chunkSize, startChunkX = 0, startChunkZ = 0) {
  const terrainMap = {};
  for (let xOffset = 0; xOffset < numChunksX; xOffset++) {
    for (let zOffset = 0; zOffset < numChunksZ; zOffset++) {
      // Calculate actual chunk coordinates
      const chunkX = startChunkX + xOffset;
      const chunkZ = startChunkZ + zOffset;
      
      // Generate each chunk using the AdvancedTerrain instance
      const chunkData = terrainGen.generateChunk(chunkX, chunkZ, chunkSize);
      terrainMap[`${chunkX},${chunkZ}`] = chunkData;
    }
  }
  return terrainMap;
}

// Export the AdvancedTerrain class, BLOCK constant, and generateTerrain function for external use.
export { AdvancedTerrain, BLOCK, generateTerrain };
