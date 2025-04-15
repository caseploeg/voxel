// VoxelWorld.js
import { WorldData } from './worldData.js';
import { MeshBuilder } from './meshBuilder.js';
import { BlockRegistry } from './blockRegistry.js';
import * as THREE from 'three';

export class VoxelWorld {
  constructor(scene, textureManager) {
    this.scene = scene;
    
    // Create components
    this.blockRegistry = new BlockRegistry(textureManager);
    this.worldData = new WorldData(this.blockRegistry);
    this.meshBuilder = new MeshBuilder(textureManager, this.blockRegistry);
    
    // Store meshes
    this.meshes = [];
    this.clock = new THREE.Clock();
  }

  // Generate terrain
  generateTerrain(worldSize = 5) {
    this.worldData.generateTerrain(worldSize);
  }
  
  // Set a block in the world
  setBlock(x, y, z, blockType, blockName) {
    this.worldData.setBlock(x, y, z, blockType, blockName);
  }
  
  // Set a named block
  setNamedBlock(x, y, z, blockName) {
    this.worldData.setNamedBlock(x, y, z, blockName);
  }
  
  // Check if a block exists
  hasBlock(x, y, z) {
    return this.worldData.hasBlock(x, y, z);
  }
  
  // Build meshes from world data
  buildCulledMesh() {
    // Remove existing meshes
    this.meshes.forEach(mesh => this.scene.remove(mesh));
    
    // Build new meshes
    this.meshes = this.meshBuilder.buildMeshes(this.worldData, this.scene);
    
    return this.meshes;
  }
  
  // Update animations
  update(delta) {
    this.meshBuilder.update(delta);
  }
}
