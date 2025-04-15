
import * as THREE from 'three';

// Block types enum
export const BlockType = {
  STANDARD: 'standard',
  WATER: 'water',
  MULTI_SIDED: 'multi_sided',
  CROSS: 'cross'
};

// Direction enum to use for multi-sided blocks
export const Direction = {
  TOP: 'top',
  BOTTOM: 'bottom',
  NORTH: 'north',
  SOUTH: 'south',
  EAST: 'east',
  WEST: 'west',
  SIDES: 'sides'  // A shorthand for all 4 horizontal sides
};

// Registry of special blocks and their properties
export class BlockRegistry {
  /**
   * Pass in the TextureManager so we can validate textures as soon as they're registered
   * @param {TextureManager} textureManager - the loaded texture manager instance
   */
  constructor(textureManager) {
    this.textureManager = textureManager;

    this.specialBlocks = {
      [BlockType.WATER]: {
        transparent: true,
        liquid: true
      }
    };

    // Store multi-sided block definitions
    this.multiSidedBlocks = {};

    // Valid texture list (to filter out invalid textures)
    this.validTextures = [];

    // Default valid textures
    this.defaultValidTextures = [
      'stone', 'dirt', 'grass_block_top', 'grass_block_side',
      'sand', 'gravel', 'glass', 'oak_planks', 'brick',
      'cobblestone', 'oak_log', 'oak_log_top', 'oak_leaves', 'acacia_leaves',
      'birch_leaves', 'spruce_leaves', 'jungle_leaves', 'dark_oak_leaves',
      'bookshelf', 'snow', 'clay', 'acacia_planks', 'birch_planks',
      'diorite', 'granite', 'andesite', 'sandstone', 'obsidian',
      'diamond_block', 'gold_block', 'iron_block', 'emerald_block'
    ];

    // Register some default multi-sided blocks
    this.registerDefaultBlocks();
  }

  /**
   * Check if a block type requires special rendering
   * @param {string} blockType - The type of block to check
   * @returns {boolean} True if the block needs special rendering
   */
  isSpecialBlock(blockType) {
    return (
      !!this.specialBlocks[blockType] ||
      blockType === BlockType.WATER  ||
      blockType === BlockType.CROSS
    );
  }

  /**
   * Get special properties for a block type
   * @param {string} blockType - The type of block
   * @returns {Object|null} Block properties or null if standard block
   */
  getBlockProperties(blockType) {
    return this.specialBlocks[blockType] || null;
  }

  /**
   * Check if a texture is valid for use as a block
   * @param {string} textureName - The texture to check
   * @returns {boolean} True if the texture is valid
   */
  isValidTexture(textureName) {
    // If we have a specific list, use that
    if (this.validTextures.length > 0) {
      return this.validTextures.includes(textureName);
    }

    // Otherwise use default list
    return this.defaultValidTextures.includes(textureName);
  }

  /**
   * Set the list of valid textures
   * @param {Array<string>} textureList - Array of valid texture names
   */
  setValidTextures(textureList) {
    this.validTextures = textureList || [];
  }

  /**
   * Register a block that uses different textures on different faces
   * Will log an error if any of the specified textures do not exist in the TextureManager
   * @param {string} blockName - The name of the block
   * @param {Object} textures - Object mapping directions to texture names
   */
  registerMultiSidedBlock(blockName, textures) {
    // Validate that the given textures exist in the texture manager
    const missingTextures = [];

    for (const faceDirection of Object.keys(textures)) {
      const textureName = textures[faceDirection];
      // Check if the texture is actually in the textureCache
      if (!this.textureManager?.textureCache[textureName]) {
        missingTextures.push(textureName);
      }
    }

    if (missingTextures.length > 0) {
      console.error(
        `BlockRegistry Error: The following textures for block "${blockName}" ` +
        `do not exist in the TextureManager: ${missingTextures.join(', ')}.`
      );
    }

    // Register even if missing some textures — up to you if you want to throw or skip
    this.multiSidedBlocks[blockName] = {
      ...textures,
      type: BlockType.MULTI_SIDED
    };
  }

  /**
   * Get a multi-sided block definition
   * @param {string} blockName - The name of the block
   * @returns {Object|null} The block definition or null if not found
   */
  getMultiSidedBlock(blockName) {
    return this.multiSidedBlocks[blockName] || null;
  }

  /**
   * Check if a block is multi-sided
   * @param {string} blockName - The name of the block
   * @returns {boolean} True if the block is multi-sided
   */
  isMultiSidedBlock(blockName) {
    return !!this.multiSidedBlocks[blockName];
  }

  /**
   * Get the texture name for a face of a multi-sided block
   * @param {string} blockName - The name of the block
   * @param {string} face - The face direction
   * @returns {string|null} The texture name or null if not found
   */
  getTextureForFace(blockName, face) {
    const block = this.multiSidedBlocks[blockName];
    if (!block) {
      return null;
    }

    // Get the specific face texture, or fall back to sides, or the blockName itself
    const textureName = block[face] || block[Direction.SIDES] || blockName;
    return textureName;
  }

  /**
   * Register default multi-sided blocks
   */
  registerDefaultBlocks() {
    // Grass block (example placeholders)
    this.registerMultiSidedBlock('grass_block', {
      [Direction.TOP]: 'grass_block_top',
      [Direction.SIDES]: 'grass_block_side',
      [Direction.BOTTOM]: 'dirt'
    });

    // Oak log
    this.registerMultiSidedBlock('oak_log', {
      [Direction.TOP]: 'oak_log_top',
      [Direction.BOTTOM]: 'oak_log_top',
      [Direction.SIDES]: 'oak_log'
    });

    // Birch log
    this.registerMultiSidedBlock('birch_log', {
      [Direction.TOP]: 'birch_log_top',
      [Direction.BOTTOM]: 'birch_log_top',
      [Direction.SIDES]: 'birch_log'
    });

    // Sandstone
    this.registerMultiSidedBlock('sandstone', {
      [Direction.TOP]: 'sandstone_top',
      [Direction.BOTTOM]: 'sandstone_bottom',
      [Direction.SIDES]: 'sandstone'
    });
  }

  /**
   * Load block configuration from a JSON object
   * @param {Object} config - Configuration object with valid textures and multi-sided blocks
   */
  loadConfiguration(config) {
    if (config.validBlocks) {
      this.setValidTextures(config.validBlocks);
    }

    if (config.multiSidedBlocks) {
      for (const blockName in config.multiSidedBlocks) {
        this.registerMultiSidedBlock(blockName, config.multiSidedBlocks[blockName]);
      }
    }
  }

  /**
   * Get a random valid texture name
   * @param {TextureManager} textureManager - The texture manager to use
   * @returns {string} A random valid texture name
   */
  getRandomValidTexture(textureManager) {
    // First try to use our valid textures list
    const validNames = this.validTextures.length > 0
      ? this.validTextures
      : this.defaultValidTextures;

    // Filter to only textures that actually exist in the texture manager
    const availableTextures = validNames.filter(name =>
      textureManager.textureCache[name] !== undefined
    );

    // If no valid textures are available, use any texture
    if (availableTextures.length === 0) {
      const names = Object.keys(textureManager.textureCache);
      return names[Math.floor(Math.random() * names.length)];
    }

    // Return a random valid texture
    return availableTextures[Math.floor(Math.random() * availableTextures.length)];
  }
}
