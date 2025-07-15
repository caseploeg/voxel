// BatchManager.js
import * as THREE from 'three';
import { BlockType } from './blockRegistry.js';

/**
 * Manages cross-chunk batching to reduce draw calls by combining
 * identical block types from multiple chunks into single meshes
 */
export class BatchManager {
  constructor(textureManager, blockRegistry, profiler = null) {
    this.textureManager = textureManager;
    this.blockRegistry = blockRegistry;
    this.profiler = profiler;
    
    // Storage for batched geometries by material type
    this.batchedGeometries = new Map();
    
    // Track chunks that contribute to each batch
    this.chunkToBatches = new Map();
    
    // Track batched meshes in the scene
    this.batchedMeshes = new Map();
    
    // Statistics for profiling
    this.batchStats = {
      totalMeshes: 0,
      totalChunks: 0,
      batchesCreated: 0,
      verticesReduced: 0,
      drawCallsReduced: 0
    };
    
    console.log('BatchManager initialized');
  }
  
  /**
   * Add a chunk's geometry to the batching system
   */
  addChunkToBatch(chunkX, chunkZ, geometryCollections) {
    const chunkKey = `${chunkX},${chunkZ}`;
    
    // Remove any existing contributions from this chunk
    this.removeChunkFromBatch(chunkX, chunkZ);
    
    // Track which batches this chunk contributes to
    this.chunkToBatches.set(chunkKey, new Set());
    
    // Process each geometry collection type
    for (const [blockType, collection] of Object.entries(geometryCollections)) {
      if (collection.positions.length === 0) continue;
      
      // Create batch key based on block type and material properties
      const batchKey = this._createBatchKey(blockType, collection);
      
      // Add to batch
      this._addToBatch(batchKey, chunkKey, collection, blockType);
      
      // Track this batch for this chunk
      this.chunkToBatches.get(chunkKey).add(batchKey);
    }
    
    this.batchStats.totalChunks++;
    this._updateProfiling();
  }
  
  /**
   * Remove a chunk's contributions from all batches
   */
  removeChunkFromBatch(chunkX, chunkZ) {
    const chunkKey = `${chunkX},${chunkZ}`;
    const chunkBatches = this.chunkToBatches.get(chunkKey);
    
    if (!chunkBatches) return;
    
    // Remove chunk's contributions from each batch
    for (const batchKey of chunkBatches) {
      const batch = this.batchedGeometries.get(batchKey);
      if (batch) {
        batch.chunks.delete(chunkKey);
        
        // If batch is now empty, remove it entirely
        if (batch.chunks.size === 0) {
          this.batchedGeometries.delete(batchKey);
          this._removeBatchedMesh(batchKey);
        } else {
          // Mark batch for rebuilding
          batch.needsRebuild = true;
        }
      }
    }
    
    this.chunkToBatches.delete(chunkKey);
    this.batchStats.totalChunks--;
    this._updateProfiling();
  }
  
  /**
   * Build all batched meshes and add them to the scene
   */
  buildBatchedMeshes(scene) {
    let totalMeshesCreated = 0;
    
    for (const [batchKey, batch] of this.batchedGeometries) {
      if (batch.needsRebuild || !this.batchedMeshes.has(batchKey)) {
        // Remove old mesh if it exists
        this._removeBatchedMesh(batchKey);
        
        // Create new batched mesh
        const mesh = this._createBatchedMesh(batch);
        if (mesh) {
          scene.add(mesh);
          this.batchedMeshes.set(batchKey, mesh);
          totalMeshesCreated++;
        }
        
        batch.needsRebuild = false;
      }
    }
    
    this.batchStats.totalMeshes = this.batchedMeshes.size;
    this.batchStats.batchesCreated = totalMeshesCreated;
    this._updateProfiling();
    
    return totalMeshesCreated;
  }
  
  /**
   * Create a batch key for grouping similar geometries
   */
  _createBatchKey(blockType, collection) {
    // For now, batch by block type
    // Later we can add material properties, texture, etc.
    return `${blockType}`;
  }
  
  /**
   * Add geometry collection to a batch
   */
  _addToBatch(batchKey, chunkKey, collection, blockType) {
    if (!this.batchedGeometries.has(batchKey)) {
      this.batchedGeometries.set(batchKey, {
        blockType: blockType,
        chunks: new Map(),
        needsRebuild: true,
        totalVertices: 0,
        totalIndices: 0
      });
    }
    
    const batch = this.batchedGeometries.get(batchKey);
    batch.chunks.set(chunkKey, collection);
    batch.needsRebuild = true;
    
    // Update statistics
    batch.totalVertices += collection.positions.length / 3;
    batch.totalIndices += collection.indices.length;
  }
  
  /**
   * Create a single mesh from batched geometry collections
   */
  _createBatchedMesh(batch) {
    if (batch.chunks.size === 0) return null;
    
    // Combine all chunk geometries into single arrays
    const combinedPositions = [];
    const combinedNormals = [];
    const combinedUVs = [];
    const combinedIndices = [];
    let currentVertexOffset = 0;
    
    for (const [chunkKey, collection] of batch.chunks) {
      // Add positions, normals, UVs
      combinedPositions.push(...collection.positions);
      combinedNormals.push(...collection.normals);
      combinedUVs.push(...collection.uvs);
      
      // Add indices with vertex offset
      for (const index of collection.indices) {
        combinedIndices.push(index + currentVertexOffset);
      }
      
      currentVertexOffset += collection.positions.length / 3;
    }
    
    // Create geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(combinedPositions), 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(combinedNormals), 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(combinedUVs), 2));
    geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(combinedIndices), 1));
    geometry.computeBoundingSphere();
    
    // Create material based on block type
    const material = this._createMaterialForBlockType(batch.blockType);
    
    // Create mesh
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    
    // Add metadata for debugging
    mesh.userData = {
      isBatched: true,
      batchKey: batch.blockType,
      chunkCount: batch.chunks.size,
      vertexCount: combinedPositions.length / 3,
      indexCount: combinedIndices.length
    };
    
    return mesh;
  }
  
  /**
   * Create appropriate material for block type
   */
  _createMaterialForBlockType(blockType) {
    switch (blockType) {
      case BlockType.STANDARD:
      case BlockType.MULTI_SIDED:
        return new THREE.MeshStandardMaterial({
          map: this.textureManager.atlasTexture,
          metalness: 0,
          roughness: 1
        });
        
      case BlockType.CROSS:
        return new THREE.MeshStandardMaterial({
          map: this.textureManager.atlasTexture,
          metalness: 0,
          roughness: 1,
          transparent: true,
          alphaTest: 0.1,
          side: THREE.DoubleSide
        });
        
      default:
        return new THREE.MeshStandardMaterial({
          map: this.textureManager.atlasTexture,
          metalness: 0,
          roughness: 1
        });
    }
  }
  
  /**
   * Remove batched mesh from scene
   */
  _removeBatchedMesh(batchKey) {
    const mesh = this.batchedMeshes.get(batchKey);
    if (mesh) {
      if (mesh.parent) {
        mesh.parent.remove(mesh);
      }
      
      // Dispose of resources
      if (mesh.geometry) {
        mesh.geometry.dispose();
      }
      if (mesh.material) {
        mesh.material.dispose();
      }
      
      this.batchedMeshes.delete(batchKey);
    }
  }
  
  /**
   * Update profiling metrics
   */
  _updateProfiling() {
    if (this.profiler) {
      this.profiler.updateBatchingMetrics(this.batchStats.totalMeshes, this.batchStats.totalChunks);
    }
  }
  
  /**
   * Get batching statistics
   */
  getStats() {
    return {
      ...this.batchStats,
      activeBatches: this.batchedGeometries.size,
      totalBatchedMeshes: this.batchedMeshes.size
    };
  }
  
  /**
   * Clear all batches
   */
  clearAll() {
    // Remove all meshes from scene
    for (const [batchKey, mesh] of this.batchedMeshes) {
      this._removeBatchedMesh(batchKey);
    }
    
    // Clear all data
    this.batchedGeometries.clear();
    this.chunkToBatches.clear();
    this.batchedMeshes.clear();
    
    // Reset stats
    this.batchStats = {
      totalMeshes: 0,
      totalChunks: 0,
      batchesCreated: 0,
      verticesReduced: 0,
      drawCallsReduced: 0
    };
    
    this._updateProfiling();
  }
}