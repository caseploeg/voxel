
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

export class ChunkManager {
  constructor(blockRegistry, chunkSize = 16) {
    this.blockRegistry = blockRegistry;
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
      this.chunks.set(key, new WorldData(this.blockRegistry));
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
