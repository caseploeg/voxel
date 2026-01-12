#!/usr/bin/env node
/**
 * Terrain Generator Validation Utility
 *
 * Run with: node scripts/validate-terrain.js
 *
 * Tests terrain generation without the rendering pipeline.
 * Useful for validating chunk generation and identifying issues.
 */

import pkg from 'noisejs';
const { Noise } = pkg;

// Replicate the terrain generation logic from chunkWorker.js
function createTerrainGenerator(seed, params) {
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

function generateChunk(terrainGen, noiseLib, chunkX, chunkZ, chunkSize) {
  const { seaLevel, maxHeight, heightAmp } = terrainGen.params;
  const worldX = chunkX * chunkSize;
  const worldZ = chunkZ * chunkSize;
  const chunkData = new Array(chunkSize);

  const stats = {
    air: 0,
    grass: 0,
    dirt: 0,
    stone: 0,
    water: 0,
    poppy: 0
  };

  for (let x = 0; x < chunkSize; x++) {
    chunkData[x] = new Array(chunkSize);
    for (let z = 0; z < chunkSize; z++) {
      chunkData[x][z] = new Array(maxHeight).fill(0);
      const globalX = worldX + x;
      const globalZ = worldZ + z;

      // Height calculation (simplified from chunkWorker.js)
      const baseFreq = 0.05;
      const warpX = 0.1 * noiseLib.perlin2(globalX * 0.05, globalZ * 0.05);
      const warpZ = 0.1 * noiseLib.perlin2(globalX * 0.05 + 500, globalZ * 0.05 + 500);

      const e = (
        1.0 * noiseLib.perlin2(baseFreq * (globalX + warpX), baseFreq * (globalZ + warpZ)) +
        0.5 * noiseLib.perlin2(2 * baseFreq * (globalX + warpX) + 5.3, 2 * baseFreq * (globalZ + warpZ) + 9.1) +
        0.25 * noiseLib.perlin2(4 * baseFreq * (globalX + warpX) + 13.7, 4 * baseFreq * (globalZ + warpZ) + 17.3)
      ) / (1.0 + 0.5 + 0.25);

      const elevation = Math.pow(e, 2.3);
      let height = Math.floor(seaLevel + heightAmp * elevation);
      height = Math.max(1, Math.min(maxHeight - 1, height));

      // Fill terrain
      for (let y = 0; y <= height; y++) {
        if (y === height) {
          chunkData[x][z][y] = 1; // grass
          stats.grass++;
        } else if (y >= height - 3) {
          chunkData[x][z][y] = 2; // dirt
          stats.dirt++;
        } else {
          chunkData[x][z][y] = 3; // stone
          stats.stone++;
        }
      }

      // Water
      if (height < seaLevel) {
        for (let y = height + 1; y <= seaLevel; y++) {
          chunkData[x][z][y] = 4; // water
          stats.water++;
        }
      }

      // Air (count remaining)
      for (let y = 0; y < maxHeight; y++) {
        if (chunkData[x][z][y] === 0) {
          stats.air++;
        }
      }
    }
  }

  return { chunkData, stats };
}

// Run validation
console.log('=== Terrain Generator Validation ===\n');

const seed = 12345;
const noiseLib = new Noise(seed);
const terrainGen = createTerrainGenerator(seed);
const chunkSize = 16;

console.log('Configuration:');
console.log(`  Seed: ${seed}`);
console.log(`  Chunk size: ${chunkSize}x${chunkSize}`);
console.log(`  World height: ${terrainGen.params.maxHeight}`);
console.log(`  Sea level: ${terrainGen.params.seaLevel}`);
console.log(`  Height amplitude: ${terrainGen.params.heightAmp}`);
console.log('');

// Test chunk generation
console.log('Testing chunk generation...\n');

const testChunks = [
  [0, 0],
  [1, 0],
  [0, 1],
  [-1, -1],
  [5, 5]
];

testChunks.forEach(([cx, cz]) => {
  const startTime = performance.now();
  const { chunkData, stats } = generateChunk(terrainGen, noiseLib, cx, cz, chunkSize);
  const endTime = performance.now();

  const totalBlocks = chunkSize * chunkSize * terrainGen.params.maxHeight;
  const solidBlocks = stats.grass + stats.dirt + stats.stone + stats.water;

  console.log(`Chunk (${cx}, ${cz}):`);
  console.log(`  Generation time: ${(endTime - startTime).toFixed(2)}ms`);
  console.log(`  Block distribution:`);
  console.log(`    Air:   ${stats.air} (${(stats.air/totalBlocks*100).toFixed(1)}%)`);
  console.log(`    Grass: ${stats.grass} (${(stats.grass/totalBlocks*100).toFixed(1)}%)`);
  console.log(`    Dirt:  ${stats.dirt} (${(stats.dirt/totalBlocks*100).toFixed(1)}%)`);
  console.log(`    Stone: ${stats.stone} (${(stats.stone/totalBlocks*100).toFixed(1)}%)`);
  console.log(`    Water: ${stats.water} (${(stats.water/totalBlocks*100).toFixed(1)}%)`);
  console.log('');
});

// Validate consistency
console.log('--- Consistency Check ---');
const chunk1 = generateChunk(terrainGen, noiseLib, 0, 0, chunkSize);
const chunk2 = generateChunk(terrainGen, noiseLib, 0, 0, chunkSize);

const isConsistent = JSON.stringify(chunk1.stats) === JSON.stringify(chunk2.stats);
console.log(`Same seed produces same results: ${isConsistent ? '✅ PASS' : '❌ FAIL'}`);

// Performance benchmark
console.log('\n--- Performance Benchmark ---');
const iterations = 100;
const times = [];

for (let i = 0; i < iterations; i++) {
  const start = performance.now();
  generateChunk(terrainGen, noiseLib, i % 10, Math.floor(i / 10), chunkSize);
  times.push(performance.now() - start);
}

const avgTime = times.reduce((a, b) => a + b) / times.length;
const minTime = Math.min(...times);
const maxTime = Math.max(...times);

console.log(`Generated ${iterations} chunks:`);
console.log(`  Average: ${avgTime.toFixed(2)}ms`);
console.log(`  Min: ${minTime.toFixed(2)}ms`);
console.log(`  Max: ${maxTime.toFixed(2)}ms`);
console.log(`  Chunks/second: ${(1000 / avgTime).toFixed(1)}`);
