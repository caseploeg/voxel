// WorldData.js
import { BlockType } from './blockRegistry.js';

export class WorldData {
  constructor(blockRegistry) {
    this.blockRegistry = blockRegistry;
    this.worldData = {};  // Storage for block data
  }

  setBlock(x, y, z, blockType, blockName) {
    // If blockType is not specified, use standard
    if (!blockType) {
      blockType = BlockType.STANDARD;
    }

    // Handle different block types
    const blockData = { blockType };
    
    if (blockType === BlockType.STANDARD) {
      blockData.textureType = this.blockRegistry.getRandomValidTexture();
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
      blockData.textureType = 'poppy'; 
    }
    
    this.worldData[`${x},${y},${z}`] = blockData;
  }
  
  setNamedBlock(x, y, z, blockName) {
    // Check if this is a registered multi-sided block
    if (this.blockRegistry.isMultiSidedBlock(blockName)) {
      this.setBlock(x, y, z, BlockType.MULTI_SIDED, blockName);
    } 
    // Check if it's a special block like water
    else if (blockName === 'water') {
      this.setBlock(x, y, z, BlockType.WATER);
    }
    // Otherwise treat it as a standard block with a specific texture
    else {
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
  
  // Add simple terrain generation methods here
  generateTerrain(worldSize = 5) {
    for (let x = -worldSize; x <= worldSize; x++) {
      for (let z = -worldSize; z <= worldSize; z++) {
        // Create ground layer using grass blocks (multi-sided)
        this.setBlock(x, -1, z, BlockType.MULTI_SIDED, 'grass_block');
        this.setBlock(x, 0, z, BlockType.CROSS, 'poppy');
      }
    }
    
    let validTextures = this.blockRegistry.defaultValidTextures;
    // Add a column of every valid texture for testing
    let y = 0;
    for (let i = 0; i < Math.min(validTextures.length, 10); i++) {
      let textureName = validTextures[i];
      if (this.blockRegistry.isMultiSidedBlock(textureName)) {
        this.setBlock(0, y, 0, BlockType.MULTI_SIDED, textureName);
      } else {
        this.setNamedBlock(0, y, 0, textureName);
      }
      
      y++;
    }
  }
}
