// blockRegistry.js
import * as THREE from 'three';

// Block types enum
export const BlockType = {
  STANDARD: 'standard',
  WATER: 'water'
};

// Registry of special blocks and their properties
export class BlockRegistry {
  constructor() {
    this.specialBlocks = {
      [BlockType.WATER]: {
        transparent: true,
        liquid: true
      }
    };
  }

  /**
   * Check if a block type requires special rendering
   * @param {string} blockType - The type of block to check
   * @returns {boolean} True if the block needs special rendering
   */
  isSpecialBlock(blockType) {
    return !!this.specialBlocks[blockType];
  }

  /**
   * Get special properties for a block type
   * @param {string} blockType - The type of block
   * @returns {Object|null} Block properties or null if standard block
   */
  getBlockProperties(blockType) {
    return this.specialBlocks[blockType] || null;
  }
}