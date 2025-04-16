// terrainGenerator.js
// A factory for different terrain generation algorithms

// Import all terrain generator algorithms
import { AdvancedTerrain as PerlinTerrain, BLOCK as PERLIN_BLOCK } from './perlin.js';
import { AdvancedDensityTerrain, BLOCK as DENSITY_BLOCK } from './improvedPerlin.js';

// Supported terrain generator types
export const TERRAIN_TYPE = {
  PERLIN: 'perlin',          // Original perlin-based terrain
  DENSITY: 'density'         // New density function-based terrain
};

// Default block mapping for each terrain generator
const DEFAULT_BLOCK_MAPPINGS = {
  [TERRAIN_TYPE.PERLIN]: {
    [PERLIN_BLOCK.AIR]: null,
    [PERLIN_BLOCK.GRASS]: "grass",
    [PERLIN_BLOCK.DIRT]: "dirt",
    [PERLIN_BLOCK.STONE]: "stone",
    [PERLIN_BLOCK.WATER]: "water",
    [PERLIN_BLOCK.WOOD]: "stone",  // Would be "log" in a real implementation
    [PERLIN_BLOCK.LEAVES]: "stone" // Would be "leaves" in a real implementation
  },
  [TERRAIN_TYPE.DENSITY]: {
    [DENSITY_BLOCK.AIR]: null,
    [DENSITY_BLOCK.GRASS]: "grass",
    [DENSITY_BLOCK.DIRT]: "dirt",
    [DENSITY_BLOCK.STONE]: "stone",
    [DENSITY_BLOCK.SAND]: "sand",
    [DENSITY_BLOCK.WATER]: "water"
  }
};

/**
 * TerrainGeneratorFactory - Creates terrain generators based on the specified type
 */
export class TerrainGeneratorFactory {
  /**
   * Create a new terrain generator of the specified type
   * @param {string} type - The type of terrain generator to create (from TERRAIN_TYPE enum)
   * @param {number} seed - The seed to use for the terrain generator
   * @returns {Object} An object containing the generator and block mapping
   */
  static createGenerator(type = TERRAIN_TYPE.PERLIN, seed = Math.random()) {
    let generator;
    let blockMapping;
    
    switch (type) {
      case TERRAIN_TYPE.DENSITY:
        generator = new AdvancedDensityTerrain(seed);
        blockMapping = DEFAULT_BLOCK_MAPPINGS[TERRAIN_TYPE.DENSITY];
        break;
        
      case TERRAIN_TYPE.PERLIN:
      default:
        generator = new PerlinTerrain(seed);
        blockMapping = DEFAULT_BLOCK_MAPPINGS[TERRAIN_TYPE.PERLIN];
        break;
    }
    
    return {
      generator,
      blockMapping
    };
  }
  
  /**
   * Generate a terrain map (multiple chunks)
   * @param {Object} generator - The terrain generator instance
   * @param {number} numChunksX - Number of chunks along X axis
   * @param {number} numChunksZ - Number of chunks along Z axis
   * @param {number} chunkSize - Size of each chunk
   * @returns {Object} Map of chunk coordinates to chunk data
   */
  static generateTerrain(generator, numChunksX, numChunksZ, chunkSize) {
    // Both generator types support the same generateTerrain interface
    if (generator instanceof PerlinTerrain) {
      return generateTerrain(generator, numChunksX, numChunksZ, chunkSize);
    } else if (generator instanceof AdvancedDensityTerrain) {
      return generateTerrain(generator, numChunksX, numChunksZ, chunkSize);
    }
    
    // Fallback to direct generation
    const terrainMap = {};
    for (let cx = 0; cx < numChunksX; cx++) {
      for (let cz = 0; cz < numChunksZ; cz++) {
        const chunkKey = `${cx},${cz}`;
        terrainMap[chunkKey] = generator.generateChunk(cx, cz, chunkSize);
      }
    }
    return terrainMap;
  }
}

// Re-export the generate terrain functions from both implementations
import { generateTerrain } from './perlin.js'; 

// Export the block types from both generators for reference
export { PERLIN_BLOCK, DENSITY_BLOCK };