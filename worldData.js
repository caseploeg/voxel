
// WorldData.js
import { BlockType } from './blockRegistry.js';

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
}
