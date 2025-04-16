
// WorldData.js
import { BlockType } from './blockRegistry.js';
import { Perlin } from './perlin.js'; // <-- Import the Perlin class

export class WorldData {
  constructor(blockRegistry) {
    this.blockRegistry = blockRegistry;
    this.worldData = {};  // Storage for block data
  }

  setBlock(x, y, z, blockType, blockName) {
    if (!blockType) {
      blockType = BlockType.STANDARD;
    }

    const blockData = { blockType };
    
    if (blockType === BlockType.STANDARD) {
      // If no specific texture, pick a random one
      blockData.textureType = blockName
        ? blockName
        : this.blockRegistry.getRandomValidTexture();
    } 
    else if (blockType === BlockType.MULTI_SIDED) {
      if (!blockName || !this.blockRegistry.isMultiSidedBlock(blockName)) {
        blockData.blockType = BlockType.STANDARD;
        blockData.textureType = this.blockRegistry.getRandomValidTexture();
      } else {
        blockData.blockName = blockName;
      }
    }
    else if (blockType === BlockType.CROSS) {
      blockData.textureType = blockName || 'poppy'; 
    }

    this.worldData[`${x},${y},${z}`] = blockData;
  }
  
  setNamedBlock(x, y, z, blockName) {
    if (this.blockRegistry.isMultiSidedBlock(blockName)) {
      this.setBlock(x, y, z, BlockType.MULTI_SIDED, blockName);
    } else if (blockName === 'water') {
      this.setBlock(x, y, z, BlockType.WATER);
    } else {
      const blockData = {
        blockType: BlockType.STANDARD,
        textureType: blockName
      };
      this.worldData[`${x},${y},${z}`] = blockData;
    }
  }

  hasBlock(x, y, z) {
    return !!this.worldData[`${x},${y},${z}`];
  }
  
  getBlock(x, y, z) {
    return this.worldData[`${x},${y},${z}`] || null;
  }

  /**
   * Generate rolling-mountain terrain using Perlin noise.
   * worldSize: controls the horizontal size of the map. 
   */
  generateTerrain(worldSize) {
    const perlin = new Perlin();

    // Parameters you can adjust:
    const amplitude = 12;      // max terrain height variations
    const frequency = 40;      // 'stretch' or 'smoothness' of terrain
    const seaLevel  = -2;      // where water is placed
    const flowerChance = 0.02; // 2% chance for a flower on top

    for (let x = -worldSize; x <= worldSize; x++) {
      for (let z = -worldSize; z <= worldSize; z++) {
        
        // Perlin noise in range ~[-1, 1]
        const noiseVal = perlin.noise(x / frequency, z / frequency);
        // Map it to a vertical range: e.g. [-12..12]
        const terrainHeight = Math.floor(noiseVal * amplitude);

        // The "top" Y position of solid land
        // You can offset if you want mountains to be higher/lower overall.
        const topY = terrainHeight;

        // Fill from some “bedrock” level up to topY:
        // For simplicity, let's say bedrock around y = -15
        for (let y = -15; y <= topY; y++) {
          // If we are at the top layer -> place grass
          if (y === topY) {
            // Use a multi-sided grass block
            this.setBlock(x, y, z, BlockType.MULTI_SIDED, 'grass_block');

            // Chance to place a poppy on top of the grass
            if (Math.random() < flowerChance) {
              this.setBlock(x, y + 1, z, BlockType.CROSS, 'poppy');
            }

          } else {
            // Everything below top is stone
            this.setBlock(x, y, z, BlockType.STANDARD, 'stone');
          }
        }

        // Fill water if topY < seaLevel
        // This is one approach: fill from topY+1 up to seaLevel
        if (topY < seaLevel) {
          for (let wy = topY + 1; wy <= seaLevel; wy++) {
            this.setBlock(x, wy, z, BlockType.WATER);
          }
        }
      }
    }
  }
}
