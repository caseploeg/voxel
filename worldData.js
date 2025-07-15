
// WorldData.js
import { BlockType } from './blockRegistry.js';

export class WorldData {
  constructor(blockRegistry, chunkSize = 16, textureManager = null) {
    this.blockRegistry = blockRegistry;
    this.textureManager = textureManager;
    this.chunkSize = chunkSize;
    this.worldHeight = 64; // Y range: 0-63
    
    // Replace string-keyed object with typed array
    // Array size: chunkSize * worldHeight * chunkSize
    this.worldData = new Uint16Array(chunkSize * this.worldHeight * chunkSize);
    
    // Encoding maps for block data
    this.blockTypeMap = {
      [BlockType.STANDARD]: 0,
      [BlockType.WATER]: 1,
      [BlockType.MULTI_SIDED]: 2,
      [BlockType.CROSS]: 3,
      [BlockType.TINTED]: 4
    };
    
    this.reverseBlockTypeMap = {
      0: BlockType.STANDARD,
      1: BlockType.WATER,
      2: BlockType.MULTI_SIDED,
      3: BlockType.CROSS,
      4: BlockType.TINTED
    };
    
    // Texture/block name registry for encoding
    this.textureRegistry = new Map();
    this.reverseTextureRegistry = new Map();
    this.nextTextureId = 1; // 0 reserved for "no texture"
  }
  
  // Convert 3D coordinates to 1D array index
  coordinateToIndex(x, y, z) {
    if (x < 0 || x >= this.chunkSize || y < 0 || y >= this.worldHeight || z < 0 || z >= this.chunkSize) {
      return -1; // Out of bounds
    }
    return x + y * this.chunkSize + z * this.chunkSize * this.worldHeight;
  }
  
  // Convert 1D array index back to 3D coordinates
  indexToCoordinate(index) {
    const z = Math.floor(index / (this.chunkSize * this.worldHeight));
    const remainder = index % (this.chunkSize * this.worldHeight);
    const y = Math.floor(remainder / this.chunkSize);
    const x = remainder % this.chunkSize;
    return { x, y, z };
  }
  
  // Get or create texture/block name ID
  getTextureId(textureName) {
    if (!textureName) return 0;
    
    if (this.textureRegistry.has(textureName)) {
      return this.textureRegistry.get(textureName);
    }
    
    const id = this.nextTextureId++;
    this.textureRegistry.set(textureName, id);
    this.reverseTextureRegistry.set(id, textureName);
    return id;
  }
  
  // Get texture name from ID
  getTextureName(id) {
    if (id === 0) return null;
    return this.reverseTextureRegistry.get(id) || null;
  }
  
  // Encode block data into a single 16-bit value
  // Bits 0-2: Block type (0-7)
  // Bits 3-15: Texture/block name ID (0-8191)
  encodeBlockData(blockType, textureName) {
    const typeId = this.blockTypeMap[blockType] || 0;
    const textureId = this.getTextureId(textureName);
    return (textureId << 3) | typeId;
  }
  
  // Decode block data from 16-bit value
  decodeBlockData(encoded) {
    if (encoded === 0) return null;
    
    const typeId = encoded & 0b111; // Extract bits 0-2
    const textureId = encoded >> 3; // Extract bits 3-15
    
    const blockType = this.reverseBlockTypeMap[typeId];
    const textureName = this.getTextureName(textureId);
    
    return { blockType, textureName };
  }

  setBlock(x, y, z, blockType, blockName) {
    const index = this.coordinateToIndex(x, y, z);
    if (index === -1) return; // Out of bounds
    
    if (!blockType) {
      blockType = BlockType.STANDARD;
    }

    let textureName = null;
    
    if (blockType === BlockType.STANDARD) {
      // If no specific texture, pick a random one
      textureName = blockName
        ? blockName
        : this.blockRegistry.getRandomValidTexture(this.textureManager);
    } 
    else if (blockType === BlockType.MULTI_SIDED) {
      if (!blockName || !this.blockRegistry.isMultiSidedBlock(blockName)) {
        blockType = BlockType.STANDARD;
        textureName = this.blockRegistry.getRandomValidTexture(this.textureManager);
      } else {
        textureName = blockName;
      }
    }
    else if (blockType === BlockType.CROSS) {
      textureName = blockName || 'poppy';
    }
    else if (blockType === BlockType.WATER) {
      textureName = 'water';
    }

    this.worldData[index] = this.encodeBlockData(blockType, textureName);
  }
  
  setNamedBlock(x, y, z, blockName) {
    if (this.blockRegistry.isMultiSidedBlock(blockName)) {
      this.setBlock(x, y, z, BlockType.MULTI_SIDED, blockName);
    } else if (blockName === 'water') {
      this.setBlock(x, y, z, BlockType.WATER, blockName);
    } else {
      this.setBlock(x, y, z, BlockType.STANDARD, blockName);
    }
  }

  hasBlock(x, y, z) {
    const index = this.coordinateToIndex(x, y, z);
    if (index === -1) return false; // Out of bounds
    return this.worldData[index] !== 0;
  }
  
  getBlock(x, y, z) {
    const index = this.coordinateToIndex(x, y, z);
    if (index === -1) return null; // Out of bounds
    
    const encoded = this.worldData[index];
    if (encoded === 0) return null;
    
    const decoded = this.decodeBlockData(encoded);
    if (!decoded) return null;
    
    // Return object compatible with existing code
    const result = {
      blockType: decoded.blockType
    };
    
    // Set textureType or blockName based on block type
    if (decoded.blockType === BlockType.MULTI_SIDED) {
      result.blockName = decoded.textureName;
    } else {
      result.textureType = decoded.textureName;
    }
    
    return result;
  }
}

export class ChunkManager {
  constructor(blockRegistry, chunkSize = 16, textureManager = null) {
    this.blockRegistry = blockRegistry;
    this.textureManager = textureManager;
    this.chunks = new Map(); // key: "chunkX,chunkZ" -> WorldData instance
    this.chunkSize = chunkSize;
  }

  // Get chunk coordinates from world coordinates
  getChunkCoords(x, z) {
    return {
      chunkX: Math.floor(x / this.chunkSize),
      chunkZ: Math.floor(z / this.chunkSize)
    };
  }

  // Get local coordinates within a chunk
  getLocalCoords(x, z) {
    return {
      localX: ((x % this.chunkSize) + this.chunkSize) % this.chunkSize,
      localZ: ((z % this.chunkSize) + this.chunkSize) % this.chunkSize
    };
  }

  // Get or create a chunk at the specified coordinates
  getChunk(chunkX, chunkZ) {
    const key = `${chunkX},${chunkZ}`;
    if (!this.chunks.has(key)) {
      this.chunks.set(key, new WorldData(this.blockRegistry, this.chunkSize, this.textureManager));
    }
    return this.chunks.get(key);
  }

  // Set a block in the appropriate chunk
  setBlock(x, y, z, blockType, blockName) {
    const { chunkX, chunkZ } = this.getChunkCoords(x, z);
    const { localX, localZ } = this.getLocalCoords(x, z);
    const chunk = this.getChunk(chunkX, chunkZ);
    chunk.setBlock(localX, y, localZ, blockType, blockName);
    return { chunkX, chunkZ };
  }

  // Set a named block in the appropriate chunk
  setNamedBlock(x, y, z, blockName) {
    const { chunkX, chunkZ } = this.getChunkCoords(x, z);
    const { localX, localZ } = this.getLocalCoords(x, z);
    const chunk = this.getChunk(chunkX, chunkZ);
    chunk.setNamedBlock(localX, y, localZ, blockName);
    return { chunkX, chunkZ };
  }

  // Check if a block exists
  hasBlock(x, y, z) {
    const { chunkX, chunkZ } = this.getChunkCoords(x, z);
    const { localX, localZ } = this.getLocalCoords(x, z);
    const key = `${chunkX},${chunkZ}`;
    if (!this.chunks.has(key)) return false;
    return this.chunks.get(key).hasBlock(localX, y, localZ);
  }

  // Get a block at the specified coordinates
  getBlock(x, y, z) {
    const { chunkX, chunkZ } = this.getChunkCoords(x, z);
    const { localX, localZ } = this.getLocalCoords(x, z);
    const key = `${chunkX},${chunkZ}`;
    if (!this.chunks.has(key)) return null;
    return this.chunks.get(key).getBlock(localX, y, localZ);
  }

  // Get all chunks, optionally filtered by distance from a point
  getChunks(centerX, centerZ, viewDistance) {
    if (viewDistance === undefined) {
      return Array.from(this.chunks.entries());
    }

    const centerChunkX = Math.floor(centerX / this.chunkSize);
    const centerChunkZ = Math.floor(centerZ / this.chunkSize);
    
    return Array.from(this.chunks.entries())
      .filter(([key]) => {
        const [chunkX, chunkZ] = key.split(',').map(Number);
        const dx = Math.abs(chunkX - centerChunkX);
        const dz = Math.abs(chunkZ - centerChunkZ);
        return dx <= viewDistance && dz <= viewDistance;
      });
  }
}
