#!/usr/bin/env node
/**
 * Simple Test Runner
 *
 * Run with: npm test
 *
 * A lightweight test framework for validating core engine functionality
 * without browser dependencies.
 */

import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { performance } from 'perf_hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Test utilities
class TestRunner {
  constructor() {
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
    this.skipped = 0;
    this.errors = [];
  }

  describe(name, fn) {
    console.log(`\n📦 ${name}`);
    fn();
  }

  it(name, fn) {
    this.tests.push({ name, fn });
  }

  skip(name) {
    this.tests.push({ name, fn: null, skip: true });
  }

  async run() {
    console.log('=== Voxel Engine Test Suite ===\n');
    const startTime = performance.now();

    for (const test of this.tests) {
      if (test.skip) {
        console.log(`   ⏭️  ${test.name} (skipped)`);
        this.skipped++;
        continue;
      }

      try {
        await test.fn();
        console.log(`   ✅ ${test.name}`);
        this.passed++;
      } catch (error) {
        console.log(`   ❌ ${test.name}`);
        console.log(`      Error: ${error.message}`);
        this.failed++;
        this.errors.push({ test: test.name, error });
      }
    }

    const endTime = performance.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log('\n--- Results ---');
    console.log(`✅ Passed:  ${this.passed}`);
    console.log(`❌ Failed:  ${this.failed}`);
    console.log(`⏭️  Skipped: ${this.skipped}`);
    console.log(`⏱️  Time:    ${duration}s`);

    if (this.errors.length > 0) {
      console.log('\n--- Failures ---');
      this.errors.forEach(({ test, error }) => {
        console.log(`\n${test}:`);
        console.log(`   ${error.stack}`);
      });
    }

    return this.failed === 0;
  }
}

// Assertion helpers
function assert(condition, message = 'Assertion failed') {
  if (!condition) {
    throw new Error(message);
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, got ${actual}`);
  }
}

function assertDeepEqual(actual, expected, message) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(message || `Objects not equal`);
  }
}

function assertThrows(fn, message = 'Expected function to throw') {
  let threw = false;
  try {
    fn();
  } catch (e) {
    threw = true;
  }
  if (!threw) {
    throw new Error(message);
  }
}

// Create test runner instance
const runner = new TestRunner();

// ============================================================
// TESTS
// ============================================================

// Import modules to test (only pure JS modules that work in Node)
// noisejs is CommonJS, so use default import
import pkg from 'noisejs';
const { Noise } = pkg;

runner.describe('Noise Library', () => {
  runner.it('should create noise instance with seed', () => {
    const noise = new Noise(12345);
    assert(noise !== null);
  });

  runner.it('should generate consistent perlin2 values', () => {
    const noise = new Noise(12345);
    const val1 = noise.perlin2(0.5, 0.5);
    const val2 = noise.perlin2(0.5, 0.5);
    assertEqual(val1, val2, 'Same input should produce same output');
  });

  runner.it('should generate values in range [-1, 1]', () => {
    const noise = new Noise(12345);
    for (let i = 0; i < 100; i++) {
      const val = noise.perlin2(i * 0.1, i * 0.1);
      assert(val >= -1 && val <= 1, `Value ${val} out of range`);
    }
  });
});

runner.describe('Terrain Generation Logic', () => {
  const terrainParams = {
    seaLevel: 20,
    maxHeight: 64,
    heightAmp: 10
  };

  runner.it('should calculate height within bounds', () => {
    const noise = new Noise(12345);
    const baseFreq = 0.05;

    for (let x = 0; x < 16; x++) {
      for (let z = 0; z < 16; z++) {
        const e = noise.perlin2(baseFreq * x, baseFreq * z);
        const elevation = Math.pow((e + 1) / 2, 2.3);
        let height = Math.floor(terrainParams.seaLevel + terrainParams.heightAmp * elevation);
        height = Math.max(1, Math.min(terrainParams.maxHeight - 1, height));

        assert(height >= 1, `Height ${height} below minimum`);
        assert(height < terrainParams.maxHeight, `Height ${height} above maximum`);
      }
    }
  });

  runner.it('should generate different terrain for different seeds', () => {
    const noise1 = new Noise(12345);
    const noise2 = new Noise();
    noise2.seed(54321); // Use seed() method for explicit seeding

    const val1 = noise1.perlin2(10, 10);
    const val2 = noise2.perlin2(10, 10);

    // Note: noisejs may produce same results for some coordinate/seed combos
    // Test at multiple points to verify differentiation
    let different = false;
    for (let i = 0; i < 100; i++) {
      if (noise1.perlin2(i * 0.5, i * 0.5) !== noise2.perlin2(i * 0.5, i * 0.5)) {
        different = true;
        break;
      }
    }
    assert(different, 'Different seeds should produce different terrain at some points');
  });
});

runner.describe('Chunk Coordinate Calculations', () => {
  const chunkSize = 16;

  runner.it('should calculate correct chunk coordinates', () => {
    const getChunkCoords = (x, z) => ({
      chunkX: Math.floor(x / chunkSize),
      chunkZ: Math.floor(z / chunkSize)
    });

    assertDeepEqual(getChunkCoords(0, 0), { chunkX: 0, chunkZ: 0 });
    assertDeepEqual(getChunkCoords(15, 15), { chunkX: 0, chunkZ: 0 });
    assertDeepEqual(getChunkCoords(16, 16), { chunkX: 1, chunkZ: 1 });
    assertDeepEqual(getChunkCoords(-1, -1), { chunkX: -1, chunkZ: -1 });
    assertDeepEqual(getChunkCoords(-16, -16), { chunkX: -1, chunkZ: -1 });
    assertDeepEqual(getChunkCoords(-17, -17), { chunkX: -2, chunkZ: -2 });
  });

  runner.it('should calculate correct local coordinates', () => {
    const getLocalCoords = (x, z) => ({
      localX: ((x % chunkSize) + chunkSize) % chunkSize,
      localZ: ((z % chunkSize) + chunkSize) % chunkSize
    });

    assertDeepEqual(getLocalCoords(0, 0), { localX: 0, localZ: 0 });
    assertDeepEqual(getLocalCoords(15, 15), { localX: 15, localZ: 15 });
    assertDeepEqual(getLocalCoords(16, 16), { localX: 0, localZ: 0 });
    assertDeepEqual(getLocalCoords(-1, -1), { localX: 15, localZ: 15 });
  });
});

runner.describe('Block Encoding/Decoding', () => {
  runner.it('should encode and decode block data correctly', () => {
    // Simulate encoding: bits 0-2 = block type, bits 3-15 = texture ID
    const encode = (blockType, textureId) => (textureId << 3) | blockType;
    const decode = (encoded) => ({
      blockType: encoded & 0b111,
      textureId: encoded >> 3
    });

    for (let blockType = 0; blockType < 8; blockType++) {
      for (let textureId = 0; textureId < 100; textureId++) {
        const encoded = encode(blockType, textureId);
        const decoded = decode(encoded);
        assertEqual(decoded.blockType, blockType, `Block type mismatch for ${blockType}`);
        assertEqual(decoded.textureId, textureId, `Texture ID mismatch for ${textureId}`);
      }
    }
  });

  runner.it('should handle maximum values', () => {
    const encode = (blockType, textureId) => (textureId << 3) | blockType;
    const decode = (encoded) => ({
      blockType: encoded & 0b111,
      textureId: encoded >> 3
    });

    // Max block type is 7 (3 bits)
    // Max texture ID is 8191 (13 bits)
    const encoded = encode(7, 8191);
    const decoded = decode(encoded);
    assertEqual(decoded.blockType, 7);
    assertEqual(decoded.textureId, 8191);
  });
});

runner.describe('Performance Benchmarks', () => {
  runner.it('should generate chunks in reasonable time', () => {
    const noise = new Noise(12345);
    const chunkSize = 16;
    const maxHeight = 64;
    const iterations = 10;
    const times = [];

    for (let i = 0; i < iterations; i++) {
      const start = performance.now();

      // Simulate chunk generation
      const chunk = new Array(chunkSize);
      for (let x = 0; x < chunkSize; x++) {
        chunk[x] = new Array(chunkSize);
        for (let z = 0; z < chunkSize; z++) {
          chunk[x][z] = new Array(maxHeight).fill(0);
          const e = noise.perlin2(0.05 * (i * chunkSize + x), 0.05 * z);
          const height = Math.floor(32 + 10 * e);
          for (let y = 0; y <= height && y < maxHeight; y++) {
            chunk[x][z][y] = y === height ? 1 : (y >= height - 3 ? 2 : 3);
          }
        }
      }

      times.push(performance.now() - start);
    }

    const avgTime = times.reduce((a, b) => a + b) / times.length;
    assert(avgTime < 50, `Chunk generation too slow: ${avgTime.toFixed(2)}ms (should be <50ms)`);
  });
});

// Run all tests
runner.run().then(success => {
  process.exit(success ? 0 : 1);
});
