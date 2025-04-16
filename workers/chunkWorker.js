// chunkWorker.js - Web Worker for chunk generation
// This is a simplified worker with built-in noise functions for terrain generation

// Simplified Perlin noise implementation for the worker
// Based on the Perlin noise algorithm but greatly simplified for this demo
class SimpleNoise {
  constructor(seed) {
    this.seed = seed || Math.random() * 10000;
    this.gradients = {};
  }
  
  // 2D Perlin noise
  perlin2(x, z) {
    // Use a simple sine-based noise function
    const scale = 0.1;
    return Math.sin(x * scale + this.seed) * Math.cos(z * scale * 1.5 + this.seed * 0.7) * 0.5 + 
           Math.sin(x * scale * 0.5 + this.seed * 0.3) * Math.cos(z * scale * 0.8 + this.seed * 1.2) * 0.5;
  }
  
  // 3D Perlin noise
  perlin3(x, y, z) {
    // Use a simple sine-based noise function in 3D
    const scale = 0.1;
    return Math.sin(x * scale + this.seed) * Math.cos(y * scale * 1.3 + this.seed * 0.7) * 
           Math.sin(z * scale * 0.9 + this.seed * 1.1) * 0.5 + 0.5;
  }
}

// Global variables
let noiseLib = null;
let terrainGen = null;

// Handle messages from the main thread
self.onmessage = function(e) {
  const { type, data } = e.data;
  
  switch (type) {
    case 'init':
      // Initialize the worker with noise and terrain generator
      noiseLib = new SimpleNoise(data.seed);
      terrainGen = createTerrainGenerator(data.seed, data.params);
      self.postMessage({ type: 'initialized' });
      break;
      
    case 'generateChunk':
      // Generate a chunk with the given coordinates
      try {
        // Measure start time
        const startTime = performance.now();
        
        const { chunkX, chunkZ, chunkSize } = data;
        const chunkData = generateChunk(chunkX, chunkZ, chunkSize);
        
        // Measure end time
        const endTime = performance.now();
        const generationTime = endTime - startTime;
        
        // Send the generated chunk back to the main thread
        self.postMessage({
          type: 'chunkGenerated',
          data: {
            chunkX,
            chunkZ,
            chunkData,
            requestId: data.requestId,
            generationTime
          }
        });
      } catch (error) {
        self.postMessage({
          type: 'error',
          data: {
            message: error.message,
            requestId: data.requestId
          }
        });
      }
      break;
      
    default:
      console.error('Unknown message type:', type);
  }
};

// Create a terrain generator with the given seed and parameters
function createTerrainGenerator(seed, params) {
  // Create a simplified terrain generator
  return {
    seed,
    params: params || {
      seaLevel: 20,
      minHeight: 0,
      maxHeight: 64,
      heightFreq: 0.3,
      heightAmp: 10,
      caveFreq: 0.8,
      caveThreshold: 0.6
    }
  };
}

// Generate a chunk with the given coordinates
function generateChunk(chunkX, chunkZ, chunkSize) {
  if (!terrainGen) {
    throw new Error('Terrain generator not initialized');
  }
  
  const heightDimension = terrainGen.params?.maxHeight || 64;
  
  // Create a 3D array for the chunk data
  const chunkData = new Array(chunkSize);
  for (let x = 0; x < chunkSize; x++) {
    chunkData[x] = new Array(chunkSize);
    for (let z = 0; z < chunkSize; z++) {
      chunkData[x][z] = new Array(heightDimension).fill(0); // 0 = air
    }
  }
  
  // Generate terrain using the noise generator
  const worldX = chunkX * chunkSize;
  const worldZ = chunkZ * chunkSize;
  
  // Fill the chunk with blocks based on the terrain generator's algorithms
  for (let x = 0; x < chunkSize; x++) {
    for (let z = 0; z < chunkSize; z++) {
    
      if (Math.random() > 0.5) {
        chunkData[x][z][0] = 1; // 4 = water
      }
      
    }
  }
  
  // Add caves and structures
  //addCaves(chunkData, chunkX, chunkZ, chunkSize);
  
  return chunkData;
}

// Get the terrain height at the given world coordinates
function getHeight(worldX, worldZ) {
  // Default height generation if terrainGen is not available
  if (!terrainGen) {
    return 20;
  }
  
  return Math.floor(
    terrainGen.params.seaLevel + 
    terrainGen.params.heightAmp * 
    (noiseLib.perlin2(worldX * 0.01, worldZ * 0.01) + 0.5)
  );
}

// Get the block type at the given world coordinates
function getBlockType(worldX, worldY, worldZ, surfaceHeight) {
  // Default block types if terrainGen is not available
  return 0;

  if (!terrainGen) {
    return worldY < 5 ? 3 : 2; // 3 = stone, 2 = dirt
  }
  
  // Define block types based on depth from surface
  if (worldY === surfaceHeight - 1) {
    return 1; // 1 = grass
  } else if (worldY > surfaceHeight - 4) {
    return 2; // 2 = dirt
  } else {
    return 3; // 3 = stone
  }
}

// Add caves to the chunk
function addCaves(chunkData, chunkX, chunkZ, chunkSize) {
  if (!terrainGen || !noiseLib) return;
  
  const caveFreq = terrainGen.params.caveFreq || 0.1;
  const caveThreshold = terrainGen.params.caveThreshold || 0.6;
  const worldX = chunkX * chunkSize;
  const worldZ = chunkZ * chunkSize;
  
  for (let x = 0; x < chunkSize; x++) {
    for (let z = 0; z < chunkSize; z++) {
      for (let y = 1; y < terrainGen.params.seaLevel - 2; y++) {
        // Only carve caves in existing blocks (not air or water)
        if (chunkData[x][z][y] > 0 && chunkData[x][z][y] !== 4) {
          const nx = (worldX + x) * caveFreq;
          const ny = y * caveFreq;
          const nz = (worldZ + z) * caveFreq;
          
          // Use 3D Perlin noise for caves
          const caveValue = noiseLib.perlin3(nx, ny, nz);
          
          if (caveValue > caveThreshold) {
            chunkData[x][z][y] = 0; // 0 = air (carve out the cave)
          }
        }
      }
    }
  }
}
