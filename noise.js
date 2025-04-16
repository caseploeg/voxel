
import { Noise } from 'noisejs'; // or your chosen library

export class NoiseWorld {
  constructor(scene, textureManager) {
    // Existing constructor code...
    
    // Create a Noise generator with a fixed seed for reproducible worlds
    this.noise = new Noise(Math.random()); // or any integer seed
  }
  
  generateTerrain(worldSize) {
    // 1) Register any multi-sided blocks if needed
    if (!this.blockRegistry.isMultiSidedBlock('grass_block')) {
      this.blockRegistry.registerMultiSidedBlock('grass_block', {
        top: 'grass_block_top',
        sides: 'grass_block_side',
        bottom: 'dirt'
      });
    }

    // 2) Loop over X and Z to generate Perlin-based heights
    for (let x = -worldSize; x <= worldSize; x++) {
      for (let z = -worldSize; z <= worldSize; z++) {
        
        // --- (A) Sample noise at (x, z) ---
        // Noise ranges from -1 to 1, so adjust scale and offset to your liking
        const frequency = 0.05;  // Controls "stretch" of noise
        const amplitude = 5;     // Controls how tall the terrain can get

        // Using the noise function
        const noiseValue = this.noise.perlin2(x * frequency, z * frequency);
        // Convert noiseValue (-1..1) to a usable height
        let height = Math.floor(noiseValue * amplitude);

        // Example: Shift terrain up so it’s not all in negative y
        let baseY = 5;  
        let terrainY = height + baseY;

        // 3) Set blocks from y = 0 down to terrainY as ground or top
        for (let y = 0; y <= terrainY; y++) {
          // If it's the topmost layer, use grass
          if (y === terrainY) {
            // Multi-sided grass
            this.setBlock(x, y, z, 'multi_sided', 'grass_block');
          } else {
            // Dirt or stone or a mix
            // Let’s say below 2 units from top is dirt, the rest is stone
            if (terrainY - y < 2) {
              this.setNamedBlock(x, y, z, 'dirt');
            } else {
              this.setNamedBlock(x, y, z, 'stone');
            }
          }
        }

        // 4) Optionally add water if height < some threshold
        const waterLevel = 3;
        if (terrainY < waterLevel) {
          for (let waterY = terrainY + 1; waterY <= waterLevel; waterY++) {
            this.setBlock(x, waterY, z, 'water'); 
          }
        }

        // 5) You can continue to add other features, trees, etc.
      }
    }
  }


}
