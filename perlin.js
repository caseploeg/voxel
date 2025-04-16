// perlin.js
// Advanced Voxel Terrain Generation with Perlin Noise (Three.js Minecraft-Style)
// This implementation uses an external Perlin noise library (e.g. noisejs).
// Make sure to install and import the noise library appropriately:
//    npm install noisejs
// and include it in your project.

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
    this.seaLevel = 20;
    this.minHeight = 0;
    this.maxHeight = 35;
    
    // Height map parameters (multi-octave noise)
    this.heightFreq = 0.3;   // base frequency for terrain height
    this.heightAmp = 10;     // amplitude added atop sea level
    
    // Cave noise parameters
    this.caveFreq = 0.8;
    this.caveThreshold = 0.6;  // noise value above which a voxel is carved out
    
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
    let frequency = this.heightFreq;
    let amplitude = this.heightAmp;
    
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
    // Predefine the vertical dimension as maxHeight plus a buffer.
    const heightDimension = this.maxHeight + 10;
    // Create a 3D array: chunk[x][z][y] where y is the vertical axis.
    let chunk = [];
    for (let x = 0; x < chunkSize; x++) {
      chunk[x] = [];
      for (let z = 0; z < chunkSize; z++) {
        chunk[x][z] = new Array(heightDimension).fill(BLOCK.AIR);
      }
    }
    
    // Fill the terrain using a heightmap based on 2D Perlin noise.
    for (let x = 0; x < chunkSize; x++) {
      for (let z = 0; z < chunkSize; z++) {
        // Convert local chunk coordinates to global/world coordinates.
        const worldX = chunkX * chunkSize + x;
        const worldZ = chunkZ * chunkSize + z;
        const terrainHeight = this.getHeight(worldX, worldZ);
        
        // Fill each column voxel-by-voxel.
        for (let y = 0; y < heightDimension; y++) {
          if (y < terrainHeight) {
            // Lower layers: stone deep underground; near surface: dirt and then grass.
            if (y < terrainHeight - 5) {
              chunk[x][z][y] = BLOCK.STONE;
            } else if (y < terrainHeight - 1) {
              chunk[x][z][y] = BLOCK.DIRT;
            } else {
              // Top layer: if below sea level, use dirt instead of grass.
              chunk[x][z][y] = (terrainHeight < this.seaLevel + 1) ? BLOCK.DIRT : BLOCK.GRASS;
            }
          } else {
            // For voxels above the height, fill with water if below sea level.
            if (y < this.seaLevel) {
              chunk[x][z][y] = BLOCK.WATER;
            }
          }
        }
      }
    }
    
    // Carve caves and overhangs via 3D noise.
    for (let x = 0; x < chunkSize; x++) {
      for (let z = 0; z < chunkSize; z++) {
        for (let y = 0; y < heightDimension; y++) {
          const worldX = chunkX * chunkSize + x;
          const worldY = y;
          const worldZ = chunkZ * chunkSize + z;
          const caveValue = this.noise.perlin3(
            worldX * this.caveFreq,
            worldY * this.caveFreq,
            worldZ * this.caveFreq
          );
          // Carve out a cave if the noise value is high (and keep surface water intact).
          if (caveValue > this.caveThreshold && y < (this.seaLevel + 10)) {

            chunk[x][z][y] = BLOCK.AIR;
            if (chunk[x][z][y] !== BLOCK.WATER) {
              chunk[x][z][y] = BLOCK.AIR;
            }
          }
        }
      }
    }
    
    // Decorate the terrain with procedural structures such as stone trees and castles.
    this.placeStructures(chunk, chunkX, chunkZ, chunkSize, heightDimension);
    
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
  
  /**
   * Generates a simple "stone tree" with a trunk and a basic canopy.
   * @param {Array} chunk - The voxel chunk 3D array.
   * @param {number} x - Local x in chunk.
   * @param {number} y - Starting y for the tree (one above the surface).
   * @param {number} z - Local z in chunk.
   * @param {number} heightDimension - Maximum vertical index in the chunk.
   */
  generateStoneTree(chunk, x, y, z, heightDimension) {
    const treeHeight = 4;
    // Create a trunk of stone blocks.
    for (let i = 0; i < treeHeight; i++) {
      if (y + i < heightDimension) {
        chunk[x][z][y + i] = BLOCK.STONE;
      }
    }
    // Create a simple canopy with "leaves" in a cube pattern.
    const canopySize = 2;
    for (let dx = -canopySize; dx <= canopySize; dx++) {
      for (let dz = -canopySize; dz <= canopySize; dz++) {
        for (let dy = 0; dy <= canopySize; dy++) {
          const nx = x + dx;
          const ny = y + treeHeight - 1 + dy;
          const nz = z + dz;
          if (nx >= 0 && nx < chunk.length &&
              nz >= 0 && nz < chunk[0].length &&
              ny < heightDimension) {
            if (chunk[nx][nz][ny] === BLOCK.AIR) {
              chunk[nx][nz][ny] = BLOCK.LEAVES;
            }
          }
        }
      }
    }
  }
  
  /**
   * Generates a rudimentary castle structure.
   * For demonstration, this builds a 5x5 platform with stone walls.
   * @param {Array} chunk - The voxel chunk 3D array.
   * @param {number} x - Local x in chunk (center point for the structure).
   * @param {number} y - Starting y for the structure.
   * @param {number} z - Local z in chunk.
   * @param {number} chunkSize - Size of the chunk.
   * @param {number} heightDimension - Maximum vertical index in the chunk.
   */
  generateCastle(chunk, x, y, z, chunkSize, heightDimension) {
    const castleSize = 5;
    const halfSize = Math.floor(castleSize / 2);
    // Build a flat castle platform with 3-block-high stone walls.
    for (let i = 0; i < castleSize; i++) {
      for (let j = 0; j < castleSize; j++) {
        const cx = x + i - halfSize;
        const cz = z + j - halfSize;
        if (cx >= 0 && cx < chunkSize && cz >= 0 && cz < chunkSize) {
          // Create walls along the perimeter.
          if (i === 0 || i === castleSize - 1 || j === 0 || j === castleSize - 1) {
            for (let k = 0; k < 3; k++) {
              if (y + k < heightDimension) {
                chunk[cx][cz][y + k] = BLOCK.STONE;
              }
            }
          } else {
            // Keep the interior hollow.
            for (let k = 0; k < 3; k++) {
              if (y + k < heightDimension) {
                chunk[cx][cz][y + k] = BLOCK.AIR;
              }
            }
          }
        }
      }
    }
  }
}

/**
 * Generates a full terrain map by creating a grid of chunks.
 * @param {AdvancedTerrain} terrainGen - Instance of AdvancedTerrain.
 * @param {number} numChunksX - Number of chunks along the X-axis.
 * @param {number} numChunksZ - Number of chunks along the Z-axis.
 * @param {number} chunkSize - The size (width and depth) of each chunk.
 * @returns {Object} - An object mapping chunk coordinate strings ("x,z") to voxel chunk arrays.
 */
function generateTerrain(terrainGen, numChunksX, numChunksZ, chunkSize) {
  const terrainMap = {};
  for (let chunkX = 0; chunkX < numChunksX; chunkX++) {
    for (let chunkZ = 0; chunkZ < numChunksZ; chunkZ++) {
      // Generate each chunk using the AdvancedTerrain instance.
      const chunkData = terrainGen.generateChunk(chunkX, chunkZ, chunkSize);
      terrainMap[`${chunkX},${chunkZ}`] = chunkData;
    }
  }
  return terrainMap;
}

// Export the AdvancedTerrain class, BLOCK constant, and generateTerrain function for external use.
export { AdvancedTerrain, BLOCK, generateTerrain };
