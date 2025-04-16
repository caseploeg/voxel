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
        
        const { chunkX, chunkZ, chunkSize, debug_more_poppies } = data;
        const chunkData = generateChunk(chunkX, chunkZ, chunkSize, { debug_more_poppies });
        
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
/*
function generateChunk(chunkX, chunkZ, chunkSize, options = {}) {
  if (!terrainGen || !noiseLib) {
    throw new Error('Terrain generator not initialized');
  }
  
  // Extract options with defaults
  const { debug_more_poppies = false } = options;

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
      // If debug_more_poppies is set, create a lot more flowers
      const flowerChance = debug_more_poppies ? 0.8 : 0.25;
      
      // Checker pattern for debugging
      const isFlowerSpot = (worldX + worldZ) % 2 === 0;
      
      if (
        (debug_more_poppies && isFlowerSpot) ||
        (noiseLib.perlin2(globalX * 0.5, globalZ * 0.5) > 0.1 &&
        Math.random() < flowerChance &&
        height >= seaLevel - 1 &&
        chunkData[x][z][height] === 1)
      ) {
        chunkData[x][z][height + 1] = 5; // poppy above grass (5 is the block ID for poppies)
        // Print debug info for the first several poppies
        if (chunkX === 0 && chunkZ === 0 && x < 8 && z < 8) {
          console.log("Generated poppy at chunk position", x, height+1, z);
        }
      }
    }
  }

  return chunkData;
}
*/

function generateChunk(chunkX, chunkZ, chunkSize, options = {}) {
  if (!terrainGen || !noiseLib) {
    throw new Error('Terrain generator not initialized');
  }
  
  // Extract options with defaults
  const { debug_more_poppies = false } = options;

  const { seaLevel, maxHeight, heightAmp } = terrainGen.params;
  const worldX = chunkX * chunkSize;
  const worldZ = chunkZ * chunkSize;
  const chunkData = new Array(chunkSize);

  // Precompute height and moisture maps for better organization
  const heightMap = new Array(chunkSize);
  const moistureMap = new Array(chunkSize);

  for (let x = 0; x < chunkSize; x++) {
    heightMap[x] = new Array(chunkSize);
    moistureMap[x] = new Array(chunkSize);
    
    for (let z = 0; z < chunkSize; z++) {
      const globalX = worldX + x;
      const globalZ = worldZ + z;
      
      // --- IMPROVED HEIGHT MAP: multiple octaves with domain warping ---
      const baseFreq = 0.05;
      
      // Apply domain warping for more natural, less grid-like terrain
      const warpX = 0.1 * noiseLib.perlin2(globalX * 0.05, globalZ * 0.05);
      const warpZ = 0.1 * noiseLib.perlin2(globalX * 0.05 + 500, globalZ * 0.05 + 500);
      
      // Multiple octaves with correct offsets to avoid correlation
      const e = (
        1.0 * noiseLib.perlin2(baseFreq * (globalX + warpX), baseFreq * (globalZ + warpZ)) +
        0.5 * noiseLib.perlin2(2 * baseFreq * (globalX + warpX) + 5.3, 2 * baseFreq * (globalZ + warpZ) + 9.1) +
        0.25 * noiseLib.perlin2(4 * baseFreq * (globalX + warpX) + 13.7, 4 * baseFreq * (globalZ + warpZ) + 17.3)
      ) / (1.0 + 0.5 + 0.25);
      
      // Emphasize terrain features with adjusted power curve
      const elevation = Math.pow(e, 2.3);
      let height = Math.floor(seaLevel + heightAmp * elevation);
      height = Math.max(1, Math.min(maxHeight - 1, height));
      
      heightMap[x][z] = height;
      
      // --- MOISTURE MAP: for biome variation ---
      // Use different frequencies and offsets for uncorrelated moisture
      moistureMap[x][z] = (
        noiseLib.perlin2(baseFreq * globalX + 300, baseFreq * globalZ + 900) + 1
      ) * 0.5; // Convert from [-1,1] to [0,1]
    }
  }

  // Generate the 3D chunk data using the precomputed maps
  for (let x = 0; x < chunkSize; x++) {
    chunkData[x] = new Array(chunkSize);
    
    for (let z = 0; z < chunkSize; z++) {
      chunkData[x][z] = new Array(maxHeight).fill(0); // Fill with air
      
      const globalX = worldX + x;
      const globalZ = worldZ + z;
      const height = heightMap[x][z];
      const moisture = moistureMap[x][z];
      
      // --- TERRAIN LAYERS: with moisture-based variation ---
      // Vary dirt depth based on moisture (wetter = deeper soil)
      const dirtDepth = 2 + Math.floor(moisture * 2);
      
      for (let y = 0; y <= height; y++) {
        if (y === height) {
          chunkData[x][z][y] = 1; // Top layer: grass_block
        } else if (y >= height - dirtDepth) {
          chunkData[x][z][y] = 2; // Mid layer: dirt with variable depth
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
      
      // --- IMPROVED VEGETATION PLACEMENT: using noise patterns ---
      // Only place vegetation on grass blocks above water level
      if (height >= seaLevel - 1 && chunkData[x][z][height] === 1) {
        // Base flower chance on moisture (more flowers in medium moisture areas)
        let flowerChance = debug_more_poppies ? 0.8 : 0.15;
        
        // Adjust chance based on moisture - peak at moderate moisture levels
        const moistureModifier = 1.0 - Math.abs((moisture - 0.6) * 2.5);
        flowerChance *= Math.max(0.1, moistureModifier);
        
        // Use noise for natural flower patches 
        // Higher frequency noise creates smaller, more detailed patches
        const flowerNoise = noiseLib.perlin2(globalX * 0.2, globalZ * 0.2);
        
        if (flowerNoise > 0.3 && Math.random() < flowerChance) {
          chunkData[x][z][height + 1] = 5; // poppy above grass
          
          // Print debug info for the first several poppies
          if (chunkX === 0 && chunkZ === 0 && x < 8 && z < 8) {
            console.log("Generated poppy at chunk position", x, height+1, z);
          }
        }
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
