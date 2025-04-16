// improvedPerlin.js
// An illustrative "modernized" Minecraft-style terrain generator using 3D density functions,
// multiple 2D "control" noises, and simple biome logic. Uses the 'noisejs' library for Perlin/Simplex.

import { Noise } from 'noisejs';

// ----------------------
//  Block Definitions
// ----------------------
const BLOCK = {
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  SAND: 4,
  WATER: 5,
  // Extend as needed (LEAVES, LOG, SNOW, etc.)
};

// ----------------------
//  Biome Definitions
// ----------------------
// A very simplified biome system for demonstration.
const BIOME = {
  OCEAN: 'ocean',
  BEACH: 'beach',
  PLAINS: 'plains',
  MOUNTAINS: 'mountains',
};

// -------------------------
//  Terrain Configuration
// -------------------------
// Adjust these parameters to tweak your terrain. In a real system, you'd load them from JSON or similar.
const TerrainConfig = {
  worldHeight: 128, // total vertical blocks (minY=0, maxY=127 in this example)
  seaLevel: 32,     // water/sea level
  // 2D noise frequencies (continentalness, erosion, weirdness). 
  // Tweak for larger or smaller continents, flatter areas, etc.
  continentalness: {
    frequency: 0.001,
    octaves: 4,
    persistence: 0.5,
  },
  erosion: {
    frequency: 0.001,
    octaves: 4,
    persistence: 0.5,
  },
  weirdness: {
    frequency: 0.002,
    octaves: 3,
    persistence: 0.5,
  },
  // 3D base noise for finer details, caves, overhangs, etc.
  base3DNoise: {
    frequency: 0.02,
    octaves: 3,
    persistence: 0.5,
  },
  // Vertical bias factor (controls how strongly we "push" density negative at high alt).
  verticalFactor: 0.15,
  // Water threshold for deciding if empty space below sea level is water or air.
  // You can approach water in a few ways. One method is:
  //   - If y < seaLevel and density < 0 => water
  //   - If y >= seaLevel and density < 0 => air
  // Here, we keep it simple and fill below sea level with water if there's no block.
};

// --------------------------
//  Helper Noise Functions
// --------------------------
function multiOctave2D(noiseInstance, x, z, { frequency, octaves, persistence }) {
  let total = 0;
  let amp = 1;
  let freq = frequency;

  for (let i = 0; i < octaves; i++) {
    total += noiseInstance.perlin2(x * freq, z * freq) * amp;
    freq *= 2;
    amp *= persistence;
  }
  return total;
}

function multiOctave3D(noiseInstance, x, y, z, { frequency, octaves, persistence }) {
  let total = 0;
  let amp = 1;
  let freq = frequency;

  for (let i = 0; i < octaves; i++) {
    total += noiseInstance.perlin3(x * freq, y * freq, z * freq) * amp;
    freq *= 2;
    amp *= persistence;
  }
  return total;
}

// -----------------------------
//  Spline / Mapping Functions
// -----------------------------
// In real Minecraft, they use complex cubic splines. Here, we show an example of
// how you *might* shape your noise values using a piecewise function or simple interpolation.

function continentalnessSpline(value) {
  // Range of typical Perlin is ~ [-1, 1]. We can shape it as follows:
  //   < -0.5 => strongly negative => deep ocean
  //   around 0 => mild => coastline / medium land
  //   > 0.5 => strongly positive => large continents / high land
  // This is purely illustrative. Adjust as needed or use a more robust interpolation.

  if (value < -0.5) return value * 2;    // push it more negative
  if (value > 0.5)  return value * 2;    // push it more positive
  return value;                          // mild shaping in the middle
}

function erosionSpline(value) {
  // Erosion typically flattens (when high) or allows rugged shapes (when low).
  // We'll transform the range so positive => strong flattening.

  // Example: shift value to [0..1], interpret as "flattening" factor
  const t = (value + 1) / 2; // now t is in [0..1]
  // We'll return a flattening coefficient in range [0..1], where 1 => max flatten
  // For instance, a slight exponential curve:
  return t * t;
}

function weirdnessSpline(value) {
  // "Weirdness" introduces spiky or unusual shapes (peaks and valleys).
  // Negative => pointy peaks, positive => shattered
  // We'll just push extremes outward:

  if (value < 0) {
    return -(Math.abs(value) ** 1.5);
  }
  return value ** 1.5;
}

// ---------------------------
//  Biome Determination
// ---------------------------
// We assign a simple biome based on continentalness & erosion. Real logic can be more intricate.
function chooseBiome(continental, erosion) {
  // Suppose strongly negative continental => OCEAN,
  // near zero => BEACH or PLAINS (depending on erosion),
  // strongly positive => MOUNTAINS.

  if (continental < -0.3) {
    return BIOME.OCEAN;
  } else if (continental < 0) {
    return BIOME.BEACH;
  } else {
    // If we have mid or high continentalness, look at erosion
    if (erosion > 0.6) {
      return BIOME.PLAINS;
    } else {
      return BIOME.MOUNTAINS;
    }
  }
}

// --------------------------
//  Main Terrain Class
// --------------------------
class AdvancedDensityTerrain {
  constructor(seed = Math.random()) {
    this.noise = new Noise(seed);
    this.seed = seed;
    this.config = TerrainConfig;
  }

  /**
   * Compute the "combined" density at (worldX, worldY, worldZ).
   * 1) We gather 2D noise values for continentalness, erosion, weirdness.
   * 2) We gather 3D noise for the base terrain shape.
   * 3) We apply splines to shape these values.
   * 4) We apply vertical bias.
   * 5) We sum everything up to get a final density.
   */
  computeDensity(worldX, worldY, worldZ) {
    // Step 1: 2D noises
    const contRaw = multiOctave2D(this.noise, worldX, worldZ, this.config.continentalness);
    const erosRaw = multiOctave2D(this.noise, worldX, worldZ, this.config.erosion);
    const weirdRaw = multiOctave2D(this.noise, worldX, worldZ, this.config.weirdness);

    // Step 2: 3D base noise
    const base3D = multiOctave3D(this.noise, worldX, worldY, worldZ, this.config.base3DNoise);

    // Step 3: Spline transformations
    const contVal = continentalnessSpline(contRaw);
    const erosVal = erosionSpline(erosRaw);
    const weirdVal = weirdnessSpline(weirdRaw);

    // Combine the 2D results. One simple approach: sum them or do a weighted combination.
    // Each represents an "offset" or "multiplier" to the base 3D noise. It's up to you how to combine.
    let combined2D = contVal + (weirdVal * 0.5);

    // Then we can incorporate erosion as a flattening factor:
    // If erosion is high => reduce the absolute amplitude of base3D, pulling it closer to 0 => flatter.
    const flattening = 1.0 - erosVal; // if erosion is high => flattening is small
    const shaped3D = base3D * flattening;

    // Step 4: Vertical bias
    // Example: linearly shift density downward as we go higher
    // so that eventually the noise is negative at large y values => air.
    const vertical = (worldY - this.config.seaLevel) * this.config.verticalFactor;

    // Step 5: Final density
    const density = shaped3D + combined2D - vertical;
    return density;
  }

  /**
   * We do a chunk-based generation. Each voxel is determined by the 3D density.
   * Then we figure out which blocks to place. 
   */
  generateChunk(chunkX, chunkZ, chunkSize) {
    const { worldHeight, seaLevel } = this.config;

    // Create a 3D array: chunk[x][z][y]
    const chunk = [];
    for (let x = 0; x < chunkSize; x++) {
      chunk[x] = [];
      for (let z = 0; z < chunkSize; z++) {
        chunk[x][z] = new Array(worldHeight).fill(BLOCK.AIR);
      }
    }

    // For each (x, z) in the chunk, also compute the 2D noise-based biome.
    // We do that once per column so we can choose top blocks, etc.
    for (let x = 0; x < chunkSize; x++) {
      for (let z = 0; z < chunkSize; z++) {
        const worldX = chunkX * chunkSize + x;
        const worldZ = chunkZ * chunkSize + z;

        // Evaluate the 2D noises for biome selection
        const contRaw = multiOctave2D(this.noise, worldX, worldZ, this.config.continentalness);
        const erosRaw = multiOctave2D(this.noise, worldX, worldZ, this.config.erosion);
        const biome = chooseBiome(continentalnessSpline(contRaw), erosionSpline(erosRaw));

        // Now fill the column from bottom to top
        let highestSolidY = -1;

        for (let y = 0; y < worldHeight; y++) {
          const worldY = y;
          const d = this.computeDensity(worldX, worldY, worldZ);

          if (d > 0) {
            // Solid block
            chunk[x][z][y] = BLOCK.STONE; 
            highestSolidY = y;
          } else {
            // If below sea level and no solid => water
            if (y < seaLevel) {
              // Only fill water if the density < 0 and there's no block above it
              // But in this simple approach, we can just fill water automatically.
              chunk[x][z][y] = BLOCK.WATER;
            }
          }
        }

        // Post-process top block (where y == highestSolidY)
        // We'll transform the top block into grass, sand, etc.
        if (highestSolidY >= 0) {
          const topY = highestSolidY;
          switch (biome) {
            case BIOME.OCEAN:
              // If near or below sea level => sand on top
              chunk[x][z][topY] = BLOCK.SAND;
              break;
            case BIOME.BEACH:
              // Typically beach => sand
              chunk[x][z][topY] = BLOCK.SAND;
              break;
            case BIOME.PLAINS:
              chunk[x][z][topY] = BLOCK.GRASS;
              // Optionally place a few layers of dirt below
              for (let d = 1; d <= 3; d++) {
                if (topY - d >= 0) {
                  if (chunk[x][z][topY - d] === BLOCK.STONE) {
                    chunk[x][z][topY - d] = BLOCK.DIRT;
                  }
                }
              }
              break;
            case BIOME.MOUNTAINS:
              // Higher alt => stone, or maybe grass if near sea level
              if (topY < seaLevel + 5) {
                chunk[x][z][topY] = BLOCK.GRASS;
              } else {
                chunk[x][z][topY] = BLOCK.STONE;
              }
              // Similarly, you could place dirt under the grass if you wish.
              break;
          }
        }
      }
    }

    // You can place additional structures (trees, etc.) after finalizing blocks.
    // For brevity, structure generation is omitted here or done in a separate pass.

    return chunk;
  }
}

/**
 * Utility function to generate multiple chunks and return them in a map/dict.
 */
function generateTerrain(terrainGen, numChunksX, numChunksZ, chunkSize) {
  const terrainMap = {};
  for (let cx = 0; cx < numChunksX; cx++) {
    for (let cz = 0; cz < numChunksZ; cz++) {
      const chunkKey = `${cx},${cz}`;
      terrainMap[chunkKey] = terrainGen.generateChunk(cx, cz, chunkSize);
    }
  }
  return terrainMap;
}

// Export everything for use in your rendering / voxel engine.
export {
  BLOCK,
  BIOME,
  AdvancedDensityTerrain,
  generateTerrain,
};