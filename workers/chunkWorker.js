import { Noise } from 'noisejs';
// chunkWorker.js - Web Worker for chunk generation

// Global variables
let noiseLib = new Noise();
let terrainGen = null;

// Handle messages from the main thread
self.onmessage = function(e) {
  const { type, data } = e.data;
  
  switch (type) {
    case 'init':
      // Initialize the worker with noise and terrain generator
      //noiseLib = new SimpleNoise(data.seed);
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
/*
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
*/

function generateChunk(chunkX, chunkZ, chunkSize) {
  if (!terrainGen || !noiseLib) {
    throw new Error('Terrain generator not initialized');
  }

  const { seaLevel, maxHeight, heightAmp, heightFreq } = terrainGen.params;
  const worldX = chunkX * chunkSize;
  const worldZ = chunkZ * chunkSize;
  const chunkData = new Array(chunkSize);

  for (let x = 0; x < chunkSize; x++) {
    chunkData[x] = new Array(chunkSize);
    for (let z = 0; z < chunkSize; z++) {
      chunkData[x][z] = new Array(maxHeight).fill(0); // Fill with air
      const globalX = worldX + x;
      const globalZ = worldZ + z;

      // --- HEIGHT MAP: multiple octaves for fractal cliffs ---
      const baseFreq = 0.01;
      const e = (
        1.0 * noiseLib.perlin2(baseFreq * globalX, baseFreq * globalZ) +
        0.5 * noiseLib.perlin2(2 * baseFreq * globalX + 5.3, 2 * baseFreq * globalZ + 9.1) +
        0.25 * noiseLib.perlin2(4 * baseFreq * globalX + 13.7, 4 * baseFreq * globalZ + 17.3)
      ) / (1.0 + 0.5 + 0.25);

      // Emphasize cliffs and flatten valleys
      let elevation = Math.pow(e, 1.2);
      let height = Math.floor(seaLevel + heightAmp * elevation);
      height = Math.max(1, Math.min(maxHeight - 1, height));

      // --- TERRAIN LAYERS ---
      for (let y = 0; y <= height; y++) {
        if (y === height) {
          chunkData[x][z][y] = 1; // Top layer: grass_block
        } else if (y >= height - 2) {
          chunkData[x][z][y] = 2; // Mid layer: dirt
        } else {
          chunkData[x][z][y] = 3; // Base layer: stone
        }
      }

      // --- WATER: fill up valleys below sea level ---
      if (height < seaLevel) {
        for (let y = height + 1; y <= seaLevel; y++) {
          chunkData[x][z][y] = 4; // water
        }
      }

      // --- FLOWERS: place poppies sparsely on grass ---
      const flowerChance = 0.04;
      const flowerNoise = noiseLib.perlin2(globalX * 0.5, globalZ * 0.5);
      if (
        flowerNoise > 0.3 &&
        Math.random() < flowerChance &&
        height >= seaLevel - 1 &&
        chunkData[x][z][height] === 1
      ) {
        chunkData[x][z][height + 1] = 5; // poppy above grass
      }
    }
  }

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
