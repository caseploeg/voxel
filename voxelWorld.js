// voxelWorld.js
import * as THREE from 'three';

export class VoxelWorld {
  constructor(scene, textureManager) {
    this.scene = scene;
    this.textureManager = textureManager;
    this.voxels = [];

    // You could make cubeSize configurable if needed
    this.cubeSize = 1;
    this.cubeGeometry = new THREE.BoxGeometry(this.cubeSize, this.cubeSize, this.cubeSize);
  }

  createVoxel(x, y, z) {
    const voxel = new THREE.Mesh(
      this.cubeGeometry, 
      this.textureManager.getRandomMaterial()
    );

    voxel.position.set(
      x * this.cubeSize,
      y * this.cubeSize,
      z * this.cubeSize
    );

    this.scene.add(voxel);
    this.voxels.push(voxel);
    return voxel;
  }

  generateTerrain(worldSize = 10) {
    for (let x = -worldSize; x <= worldSize; x++) {
      for (let z = -worldSize; z <= worldSize; z++) {
        // Create ground layer
        this.createVoxel(x, -1, z);

        // Randomly add some blocks above ground
        if (Math.random() > 0.8) {
          const height = Math.floor(Math.random() * 3) + 1;
          for (let y = 0; y < height; y++) {
            this.createVoxel(x, y, z);
          }
        }
      }
    }
  }
}
