// MeshBuilder.js
import * as THREE from 'three';
import { BlockType, Direction } from './blockRegistry.js';
import { createWaterMaterial } from './shaders/waterShader.js';
import { createTintMaterial } from './shaders/tintShader.js';
import { createAdvancedWaterMaterial } from './shader.js';

export class MeshBuilder {
  constructor(textureManager, blockRegistry) {
    this.textureManager = textureManager;
    this.blockRegistry = blockRegistry;
    this.specialMeshes = {}; // Store meshes by block type
    this.chunkMeshes = new Map(); // key: "chunkX,chunkZ" -> array of meshes
    
    // Commonly used geometry
    this.cubeSize = 1;
    this.cubeGeometry = new THREE.BoxGeometry(this.cubeSize, this.cubeSize, this.cubeSize);
    
    // Flag to use advanced water shader
    this.useAdvancedWaterShader = true;
  }

  // Build meshes from world data (legacy method)
  buildMeshes(worldData, scene) {
    // Create separate collections for different block types
    const geometryCollections = this._createGeometryCollections();
    
    // Process all blocks
    this._processBlocks(worldData, geometryCollections);
    
    // Create and return meshes
    return this._createMeshes(geometryCollections, scene);
  }
  
  // Build a mesh for an individual chunk
  buildChunkMesh(worldData, scene, chunkX, chunkZ, chunkSize = 16) {
    // Create separate collections for different block types
    const geometryCollections = this._createGeometryCollections();
    
    // Calculate the world offset for this chunk
    const offsetX = chunkX * chunkSize;
    const offsetZ = chunkZ * chunkSize;
    
    // Process blocks for this chunk
    this._processChunkBlocks(worldData, geometryCollections, offsetX, offsetZ);
    // Create meshes for this chunk
    const meshes = this._createMeshes(geometryCollections, scene, chunkX, chunkZ);
    
    // Store chunk meshes in our map
    this.chunkMeshes.set(`${chunkX},${chunkZ}`, meshes);
    
    return meshes;
  }

  // Build all chunk meshes
  buildAllChunkMeshes(chunkManager, scene, playerX, playerZ, viewDistance) {
    // Clean up old meshes first
    this._removeAllChunkMeshes(scene);
    
    // Get visible chunks
    const chunks = viewDistance !== undefined
      ? chunkManager.getChunks(playerX, playerZ, viewDistance)
      : chunkManager.getChunks();
    
    const meshes = [];
    
    // Build a mesh for each chunk
    for (const [key, chunkData] of chunks) {
      const [chunkX, chunkZ] = key.split(',').map(Number);
      const chunkMeshes = this.buildChunkMesh(chunkData, scene, chunkX, chunkZ, chunkManager.chunkSize);
      meshes.push(...chunkMeshes);
    }
    
    return meshes;
  }
  
  // Remove all chunk meshes from the scene
  _removeAllChunkMeshes(scene) {
    for (const [key, meshes] of this.chunkMeshes.entries()) {
      meshes.forEach(mesh => {
        if (scene) {
          scene.remove(mesh);
        }
      });
    }
    this.chunkMeshes.clear();
    this.specialMeshes = {};
  }
  
  // Public method to remove all chunk meshes (used when switching terrain generators)
  removeAllChunkMeshes(scene) {
    this._removeAllChunkMeshes(scene);
  }
  
  // Create water material for use by worker-based geometry building
  createWaterMaterial(waterUV) {
    return createWaterMaterial(this.textureManager.atlasTexture, {
      offset: { x: waterUV.offset.x, y: waterUV.offset.y },
      repeat: { x: waterUV.repeat.x, y: waterUV.repeat.y }
    });
  }
  
  // Create advanced water material for use by worker-based geometry building
  createAdvancedWaterMaterial(waterUV) {
    return createAdvancedWaterMaterial(this.textureManager.atlasTexture, {
      offset: { x: waterUV.offset.x, y: waterUV.offset.y },
      repeat: { x: waterUV.repeat.x, y: waterUV.repeat.y }
    });
  }
  
  // Create tint material for use by worker-based geometry building
  createTintMaterial(color) {
    return createTintMaterial(
      this.textureManager.atlasTexture, 
      new THREE.Color(color.r, color.g, color.b)
    );
  }
  
  // Remove a specific chunk mesh
  removeChunkMesh(scene, chunkX, chunkZ) {
    const key = `${chunkX},${chunkZ}`;
    if (this.chunkMeshes.has(key)) {
      const meshes = this.chunkMeshes.get(key);
      meshes.forEach(mesh => {
        if (scene) {
          scene.remove(mesh);
        }
      });
      this.chunkMeshes.delete(key);
    }
  }
  
  // Update which chunks are visible based on player position
  updateVisibleChunks(chunkManager, scene, playerX, playerZ, viewDistance) {
    if (!viewDistance) return;
    
    const centerChunkX = Math.floor(playerX / chunkManager.chunkSize);
    const centerChunkZ = Math.floor(playerZ / chunkManager.chunkSize);
    
    // Check all loaded chunks to see if they're still visible
    for (const [key, meshes] of this.chunkMeshes.entries()) {
      const [chunkX, chunkZ] = key.split(',').map(Number);
      const dx = Math.abs(chunkX - centerChunkX);
      const dz = Math.abs(chunkZ - centerChunkZ);
      
      if (dx > viewDistance || dz > viewDistance) {
        // This chunk is now out of range, remove its meshes
        meshes.forEach(mesh => scene.remove(mesh));
        this.chunkMeshes.delete(key);
      }
    }
    
    // Check for chunks that need to be loaded
    for (let x = centerChunkX - viewDistance; x <= centerChunkX + viewDistance; x++) {
      for (let z = centerChunkZ - viewDistance; z <= centerChunkZ + viewDistance; z++) {
        const key = `${x},${z}`;
        
        // If the chunk isn't loaded and exists in the world, load it
        if (!this.chunkMeshes.has(key) && chunkManager.chunks.has(key)) {
          const chunkData = chunkManager.chunks.get(key);
          this.buildChunkMesh(chunkData, scene, x, z, chunkManager.chunkSize);
        }
      }
    }
  }
  
  // Process blocks for a specific chunk
  _processChunkBlocks(worldData, collections, offsetX, offsetZ) {
    // Offsets for the 6 directions
    const directions = this._getDirections();
    
    // Process all blocks in this chunk
    for (let key in worldData.worldData) {
      if (!worldData.worldData.hasOwnProperty(key)) continue;
      const [localX, y, localZ] = key.split(',').map(Number);
      const blockInfo = worldData.worldData[key];
      if (!blockInfo) continue;

      // Calculate world coordinates
      const x = localX + offsetX;
      const z = localZ + offsetZ;

      const { blockType, textureType } = blockInfo;
      const collection = collections[blockType];
      
      // Skip if we don't have a collection for this block type
      if (!collection) continue;

      // Handle cross blocks specially
      if (blockType === BlockType.CROSS) {
        this._buildCrossBlock(collection, x, y, z, textureType);
        continue;
      }

      // For each of the 6 directions, add the face if that neighbor doesn't exist
      for (let dirKey in directions) {
        const dir = directions[dirKey];
        
        // Calculate local coordinates of neighbor
        const neighborLocalX = localX + dir.neighbor[0];
        const neighborLocalY = y + dir.neighbor[1];
        const neighborLocalZ = localZ + dir.neighbor[2];
        
        // Check if neighbor is outside chunk bounds
        const isNeighborOutsideChunk = 
          neighborLocalX < 0 || 
          neighborLocalX >= 16 || 
          neighborLocalZ < 0 || 
          neighborLocalZ >= 16;
        
        let neighborInfo = null;
        if (!isNeighborOutsideChunk) {
          // Neighbor is within this chunk, check directly
          const neighborKey = `${neighborLocalX},${neighborLocalY},${neighborLocalZ}`;
          neighborInfo = worldData.worldData[neighborKey];
        }
        
        const skipFace = neighborInfo && 
          !(this.blockRegistry.isSpecialBlock(blockType) || blockType === BlockType.MULTI_SIDED) && 
          neighborInfo.blockType !== blockType;
            
        if (skipFace) {
          continue;
        }

        // Get texture information based on block type
        let atlasUV;
        if (blockType === BlockType.STANDARD) {
          // For standard blocks, use the assigned texture
          atlasUV = this.textureManager.getTexture(textureType);
        } 
        else if (blockType === BlockType.MULTI_SIDED) {
          // For multi-sided blocks, select texture based on the face direction
          const blockName = blockInfo.blockName;
          let faceName;
          // Map direction key to face name
          switch (dirKey) {
            case 'py': faceName = Direction.TOP; break;
            case 'ny': faceName = Direction.BOTTOM; break;
            default: faceName = Direction.SIDES;
          }
          
          // Get the texture for this face
          const textureName = this.blockRegistry.getTextureForFace(blockName, faceName);
          atlasUV = this.textureManager.getTexture(textureName);
          
          if (!atlasUV) {
            continue;
          }
        } 
        else if (blockType === BlockType.WATER) {
          // For water, we'll use a specific texture or a default one
          // Later the shader will handle the special effects
          atlasUV = this.textureManager.getTexture('acacia_door_bottom') || 
                    Object.values(this.textureManager.textureCache)[0];
        }
        
        // Skip if no valid texture was found
        if (!atlasUV) continue;

        // Build the face positions
        const facePositions = dir.positions.map(pos => [
          pos[0] + x,
          pos[1] + y,
          pos[2] + z
        ]);

        // Each vertex has the same face normal
        const faceNormals = new Array(4).fill(dir.normal);

        // Apply the atlas offset + repeat to each corner's uv
        const offsetX = atlasUV.offset.x;
        const offsetY = atlasUV.offset.y;
        const repeatX = atlasUV.repeat.x;
        const repeatY = atlasUV.repeat.y;

        const faceUVs = dir.uv.map(([u, v]) => {
          return [
            offsetX + u * repeatX,
            offsetY + v * repeatY
          ];
        });
        
        // Determine if this texture should be tinted
        let textureName = textureType;
        if (blockType === BlockType.MULTI_SIDED) {
          const blockName = blockInfo.blockName;
          let faceName;
          switch (dirKey) {
            case 'py': faceName = Direction.TOP; break;
            case 'ny': faceName = Direction.BOTTOM; break;
            default: faceName = Direction.SIDES;
          }
          textureName = this.blockRegistry.getTextureForFace(blockName, faceName);
        }
        
        // Check if this texture needs tinting
        if (this.blockRegistry.isTintedTexture(textureName)) {
          // Get the tint color for this texture
          const tintColor = this.blockRegistry.getTintColor(textureName);
          
          // Ensure we have a collection for this tint color
          const tintKey = `${tintColor.r},${tintColor.g},${tintColor.b}`;
          if (!collections.tintedByTexture[tintKey]) {
            collections.tintedByTexture[tintKey] = {
              color: tintColor,
              collection: this._createEmptyCollection()
            };
          }
          
          // Add to the tinted collection
          this._pushFace(collections.tintedByTexture[tintKey].collection, facePositions, faceNormals, faceUVs);
        } else {
          // Add to the standard collection
          this._pushFace(collection, facePositions, faceNormals, faceUVs);
        }
      }
    }
  }
  
  // Update animated materials
  update(deltaTime) {
    // Update both global and per-chunk special meshes
    
    // Legacy update for global special meshes
    if (this.specialMeshes[BlockType.WATER]) {
      const waterMesh = this.specialMeshes[BlockType.WATER];
      if (waterMesh.material && waterMesh.material.uniforms) {
        waterMesh.material.uniforms.time.value += deltaTime;
      }
    }
    
    if (this.specialMeshes.tinted) {
      for (const tintedMesh of this.specialMeshes.tinted) {
        if (tintedMesh.material && tintedMesh.material.uniforms && tintedMesh.material.uniforms.time) {
          tintedMesh.material.uniforms.time.value += deltaTime;
        }
      }
    }
    
    // Update per-chunk special meshes
    for (const [chunkKey, chunkSpecialMeshes] of Object.entries(this.specialMeshes)) {
      // Skip entries that aren't chunk keys (like 'tinted')
      if (!chunkKey.includes(',')) continue;
      
      // Update water shader
      if (chunkSpecialMeshes[BlockType.WATER]) {
        const waterMesh = chunkSpecialMeshes[BlockType.WATER];
        if (waterMesh.material && waterMesh.material.uniforms) {
          waterMesh.material.uniforms.time.value += deltaTime;
        }
      }
      
      // Update tinted meshes
      if (chunkSpecialMeshes.tinted) {
        for (const tintedMesh of chunkSpecialMeshes.tinted) {
          if (tintedMesh.material && tintedMesh.material.uniforms && tintedMesh.material.uniforms.time) {
            tintedMesh.material.uniforms.time.value += deltaTime;
          }
        }
      }
    }
  }
  
  // Get directions for block face construction
  _getDirections() {
    return {
      px: { // +X face
        neighbor: [1, 0, 0],
        positions: [
          [1, 1, 1],
          [1, 0, 1],
          [1, 0, 0],
          [1, 1, 0],
        ],
        normal: [1, 0, 0],
        uv: [[0,1],[0,0],[1,0],[1,1]]
      },
      nx: { // -X face
        neighbor: [-1, 0, 0],
        positions: [
          [0, 1, 0],
          [0, 0, 0],
          [0, 0, 1],
          [0, 1, 1],
        ],
        normal: [-1, 0, 0],
        uv: [[1,1],[1,0],[0,0],[0,1]]
      },
      py: { // +Y face
        neighbor: [0, 1, 0],
        positions: [
          [0, 1, 1],
          [1, 1, 1],
          [1, 1, 0],
          [0, 1, 0],
        ],
        normal: [0, 1, 0],
        uv: [[0,1],[1,1],[1,0],[0,0]]
      },
      ny: { // -Y face
        neighbor: [0, -1, 0],
        positions: [
          [0, 0, 0],
          [1, 0, 0],
          [1, 0, 1],
          [0, 0, 1],
        ],
        normal: [0, -1, 0],
        uv: [[0,0],[1,0],[1,1],[0,1]]
      },
      pz: { // +Z face
        neighbor: [0, 0, 1],
        positions: [
          [1, 1, 1],
          [0, 1, 1],
          [0, 0, 1],
          [1, 0, 1],
        ],
        normal: [0, 0, 1],
        uv: [[1,1],[0,1],[0,0],[1,0]]
      },
      nz: { // -Z face
        neighbor: [0, 0, -1],
        positions: [
          [0, 1, 0],
          [1, 1, 0],
          [1, 0, 0],
          [0, 0, 0],
        ],
        normal: [0, 0, -1],
        uv: [[0,1],[1,1],[1,0],[0,0]]
      }
    };
  }
  
  // Private methods
  _createGeometryCollections = ()  => {
    const collections = {
      [BlockType.STANDARD]: this._createEmptyCollection(),
      [BlockType.MULTI_SIDED]: this._createEmptyCollection(),
      [BlockType.CROSS]: this._createEmptyCollection(),
      [BlockType.TINTED]: this._createEmptyCollection()
    };
    
    // Add collections for special block types
    Object.keys(this.blockRegistry.specialBlocks).forEach(blockType => {
      collections[blockType] = this._createEmptyCollection();
    });
    
    // Add a special collection for tinted textures by texture name
    collections.tintedByTexture = {};
    
    return collections;
  }
  
  _createEmptyCollection() {
    return {
      positions: [],
      normals: [],
      uvs: [],
      indices: [],
      currentIndex: 0
    };
  }
  
  _processBlocks(worldData, collections) {
    // Offsets for the 6 directions
    const directions = {
      px: { // +X face
        neighbor: [1, 0, 0],
        positions: [
          [1, 1, 1],
          [1, 0, 1],
          [1, 0, 0],
          [1, 1, 0],
        ],
        normal: [1, 0, 0],
        uv: [[0,1],[0,0],[1,0],[1,1]]
      },
      nx: { // -X face
        neighbor: [-1, 0, 0],
        positions: [
          [0, 1, 0],
          [0, 0, 0],
          [0, 0, 1],
          [0, 1, 1],
        ],
        normal: [-1, 0, 0],
        uv: [[1,1],[1,0],[0,0],[0,1]]
      },
      py: { // +Y face
        neighbor: [0, 1, 0],
        positions: [
          [0, 1, 1],
          [1, 1, 1],
          [1, 1, 0],
          [0, 1, 0],
        ],
        normal: [0, 1, 0],
        uv: [[0,1],[1,1],[1,0],[0,0]]
      },
      ny: { // -Y face
        neighbor: [0, -1, 0],
        positions: [
          [0, 0, 0],
          [1, 0, 0],
          [1, 0, 1],
          [0, 0, 1],
        ],
        normal: [0, -1, 0],
        uv: [[0,0],[1,0],[1,1],[0,1]]
      },
      pz: { // +Z face
        neighbor: [0, 0, 1],
        positions: [
          [1, 1, 1],
          [0, 1, 1],
          [0, 0, 1],
          [1, 0, 1],
        ],
        normal: [0, 0, 1],
        uv: [[1,1],[0,1],[0,0],[1,0]]
      },
      nz: { // -Z face
        neighbor: [0, 0, -1],
        positions: [
          [0, 1, 0],
          [1, 1, 0],
          [1, 0, 0],
          [0, 0, 0],
        ],
        normal: [0, 0, -1],
        uv: [[0,1],[1,1],[1,0],[0,0]]
      }
    };
    
    // Process all blocks
    for (let key in worldData.worldData) {
      if (!worldData.worldData.hasOwnProperty(key)) continue;
      const [x, y, z] = key.split(',').map(Number);
      const blockInfo = worldData.worldData[key];
      if (!blockInfo) continue;

      const { blockType, textureType } = blockInfo;
      const collection = collections[blockType];
      
      // Skip if we don't have a collection for this block type
      if (!collection) continue;

      // Handle cross blocks specially
      if (blockType === BlockType.CROSS) {
        this._buildCrossBlock(collection, x, y, z, textureType);
        continue;
      }

      // For each of the 6 directions, add the face if that neighbor doesn't exist
      for (let dirKey in directions) {
        const dir = directions[dirKey];
        const neighborKey = [
          x + dir.neighbor[0],
          y + dir.neighbor[1],
          z + dir.neighbor[2]
        ].join(',');

        // Only add a face if there's *no* block in that neighbor
        // Or if the current block is transparent (like water) and the neighbor is different
        const neighborInfo = worldData.worldData[neighborKey];
        const skipFace = neighborInfo && 
          !(this.blockRegistry.isSpecialBlock(blockType) || blockType === BlockType.MULTI_SIDED) && 
          neighborInfo.blockType !== blockType;
            
        if (skipFace) {
          continue;
        }

        // Get texture information based on block type
        let atlasUV;
        if (blockType === BlockType.STANDARD) {
          // For standard blocks, use the assigned texture
          atlasUV = this.textureManager.getTexture(textureType);
        } 
        else if (blockType === BlockType.MULTI_SIDED) {
          // For multi-sided blocks, select texture based on the face direction
          const blockName = blockInfo.blockName;
          let faceName;
          // Map direction key to face name
          switch (dirKey) {
            case 'py': faceName = Direction.TOP; break;
            case 'ny': faceName = Direction.BOTTOM; break;
            default: faceName = Direction.SIDES;
          }
          
          // Get the texture for this face
          const textureName = this.blockRegistry.getTextureForFace(blockName, faceName);
          atlasUV = this.textureManager.getTexture(textureName);
          
          if (!atlasUV) {
            continue;
          }
        } 
        else if (blockType === BlockType.WATER) {
          // For water, we'll use a specific texture or a default one
          // Later the shader will handle the special effects
          atlasUV = this.textureManager.getTexture('acacia_door_bottom') || 
                    Object.values(this.textureManager.textureCache)[0];
        }
        
        // Skip if no valid texture was found
        if (!atlasUV) continue;

        // Build the face positions
        const facePositions = dir.positions.map(pos => [
          pos[0] + x,
          pos[1] + y,
          pos[2] + z
        ]);

        // Each vertex has the same face normal
        const faceNormals = new Array(4).fill(dir.normal);

        // Apply the atlas offset + repeat to each corner's uv
        const offsetX = atlasUV.offset.x;
        const offsetY = atlasUV.offset.y;
        const repeatX = atlasUV.repeat.x;
        const repeatY = atlasUV.repeat.y;

        const faceUVs = dir.uv.map(([u, v]) => {
          return [
            offsetX + u * repeatX,
            offsetY + v * repeatY
          ];
        });
        
        // Determine if this texture should be tinted
        let textureName = textureType;
        if (blockType === BlockType.MULTI_SIDED) {
          const blockName = blockInfo.blockName;
          let faceName;
          switch (dirKey) {
            case 'py': faceName = Direction.TOP; break;
            case 'ny': faceName = Direction.BOTTOM; break;
            default: faceName = Direction.SIDES;
          }
          textureName = this.blockRegistry.getTextureForFace(blockName, faceName);
        }
        
        // Check if this texture needs tinting
        if (this.blockRegistry.isTintedTexture(textureName)) {
          // Get the tint color for this texture
          const tintColor = this.blockRegistry.getTintColor(textureName);
          
          // Ensure we have a collection for this tint color
          const tintKey = `${tintColor.r},${tintColor.g},${tintColor.b}`;
          if (!collections.tintedByTexture[tintKey]) {
            collections.tintedByTexture[tintKey] = {
              color: tintColor,
              collection: this._createEmptyCollection()
            };
          }
          
          // Add to the tinted collection
          this._pushFace(collections.tintedByTexture[tintKey].collection, facePositions, faceNormals, faceUVs);
        } else {
          // Add to the standard collection
          this._pushFace(collection, facePositions, faceNormals, faceUVs);
        }
      }
    }
  }
  
  _pushFace(collection, facePositions, faceNormals, faceUVs) {
    for (let i = 0; i < 4; i++) {
      collection.positions.push(...facePositions[i]);
      collection.normals.push(...faceNormals[i]);
      collection.uvs.push(...faceUVs[i]);
    }
    collection.indices.push(
      collection.currentIndex,     collection.currentIndex + 1, collection.currentIndex + 2,
      collection.currentIndex + 2, collection.currentIndex + 3, collection.currentIndex
    );
    collection.currentIndex += 4;
  }
  
  _createMeshes(collections, scene, chunkX, chunkZ) {
    const meshes = [];
    const chunkGroup = new THREE.Group();
    
    // Assign chunk identifier to the group for easier tracking
    if (chunkX !== undefined && chunkZ !== undefined) {
      chunkGroup.userData = { 
        isChunk: true,
        chunkX, 
        chunkZ,
        key: `${chunkX},${chunkZ}`
      };
    }
    
    // Create cross blocks mesh
    const crossColl = collections[BlockType.CROSS];
    if (crossColl.positions.length > 0) {
      console.log("Building cross geometry with", crossColl.positions.length/3, "vertices");
      
      const geo = new THREE.BufferGeometry();
      geo.setIndex(new THREE.BufferAttribute(new Uint32Array(crossColl.indices), 1));
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(crossColl.positions), 3));
      geo.setAttribute('normal',   new THREE.BufferAttribute(new Float32Array(crossColl.normals), 3));
      geo.setAttribute('uv',      new THREE.BufferAttribute(new Float32Array(crossColl.uvs), 2));
      geo.computeBoundingSphere();

      // Make an alphaTest material
      const mat = new THREE.MeshStandardMaterial({
        map: this.textureManager.atlasTexture,
        alphaTest: 0.5,
        side: THREE.DoubleSide,
        metalness: 0,
        roughness: 1,
        transparent: true,
        depthWrite: false
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.receiveShadow = false;
      mesh.castShadow = false;
      chunkGroup.add(mesh);
      meshes.push(mesh);
    }

    // Create standard blocks mesh
    const standardCollection = collections[BlockType.STANDARD];
    if (standardCollection.positions.length > 0) {
      const geo = new THREE.BufferGeometry();
      geo.setIndex(new THREE.BufferAttribute(new Uint32Array(standardCollection.indices), 1));
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(standardCollection.positions), 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(standardCollection.normals), 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(standardCollection.uvs), 2));
      geo.computeBoundingSphere();
      
      // Use the combined atlas texture from the TextureManager
      const mat = new THREE.MeshStandardMaterial({ 
        map: this.textureManager.atlasTexture,
        metalness: 0,
        roughness: 1
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      chunkGroup.add(mesh);
      meshes.push(mesh);
    }
    
    // Create multi-sided blocks mesh
    const multiSidedCollection = collections[BlockType.MULTI_SIDED];
    if (multiSidedCollection && multiSidedCollection.positions.length > 0) {
      
      const geo = new THREE.BufferGeometry();
      geo.setIndex(new THREE.BufferAttribute(new Uint32Array(multiSidedCollection.indices), 1));
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(multiSidedCollection.positions), 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(multiSidedCollection.normals), 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(multiSidedCollection.uvs), 2));
      geo.computeBoundingSphere();
      
      // Use the texture atlas with specific UV coordinates for each face
      const mat = new THREE.MeshStandardMaterial({ 
        map: this.textureManager.atlasTexture,
        metalness: 0,
        roughness: 1,
        transparent: true,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      chunkGroup.add(mesh);
      meshes.push(mesh);
    }

    // Create special block meshes
    for (let blockType in this.blockRegistry.specialBlocks) {
      const collection = collections[blockType];
      if (collection.positions.length === 0) continue;

      const geo = new THREE.BufferGeometry();
      geo.setIndex(new THREE.BufferAttribute(new Uint32Array(collection.indices), 1));
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(collection.positions), 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(collection.normals), 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(collection.uvs), 2));
      geo.computeBoundingSphere();

      let material;
      
      // Create appropriate material based on block type
      if (blockType === BlockType.WATER) {
        // Get a water texture from the atlas or use the first available texture
        //const waterTextureName = Object.keys(this.textureManager.textureCache).find(name => 
          // name.includes('ice') || name.includes('water')) || Object.keys(this.textureManager.textureCache)[0];
          
        const waterUV = this.textureManager.getTexture('packed_ice');
        if (this.useAdvancedWaterShader) {
          // Use the new advanced water shader
          material = createAdvancedWaterMaterial(this.textureManager.atlasTexture, {
            offset: { x: waterUV.offset.x, y: waterUV.offset.y },
            repeat: { x: waterUV.repeat.x, y: waterUV.repeat.y }
          });
        } else {
          // Use the original water shader
          material = createWaterMaterial(this.textureManager.atlasTexture, {
            offset: { x: waterUV.offset.x, y: waterUV.offset.y },
            repeat: { x: waterUV.repeat.x, y: waterUV.repeat.y }
          });
        }
      }
      
      const mesh = new THREE.Mesh(geo, material);
      mesh.receiveShadow = true;
      
      // For chunk-based meshes, store the special meshes in the chunk collection
      if (chunkX !== undefined && chunkZ !== undefined) {
        const chunkKey = `${chunkX},${chunkZ}`;
        if (!this.specialMeshes[chunkKey]) {
          this.specialMeshes[chunkKey] = {};
        }
        this.specialMeshes[chunkKey][blockType] = mesh;
      } else {
        // Legacy global storage
        this.specialMeshes[blockType] = mesh;
      }
      
      chunkGroup.add(mesh);
      meshes.push(mesh);
    }
    
    // Create tinted meshes (one per color)
    for (const tintKey in collections.tintedByTexture) {
      const { color, collection } = collections.tintedByTexture[tintKey];
      
      if (collection.positions.length === 0) continue;
      
      const geo = new THREE.BufferGeometry();
      geo.setIndex(new THREE.BufferAttribute(new Uint32Array(collection.indices), 1));
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(collection.positions), 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(collection.normals), 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(collection.uvs), 2));
      geo.computeBoundingSphere();
      
      // Create tint material with the color
      const material = createTintMaterial(
        this.textureManager.atlasTexture, 
        new THREE.Color(color.r, color.g, color.b)
      );
      
      const mesh = new THREE.Mesh(geo, material);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      
      // For chunk-based meshes, store tinted meshes in the chunk collection
      if (chunkX !== undefined && chunkZ !== undefined) {
        const chunkKey = `${chunkX},${chunkZ}`;
        if (!this.specialMeshes[chunkKey]) {
          this.specialMeshes[chunkKey] = {};
        }
        if (!this.specialMeshes[chunkKey].tinted) {
          this.specialMeshes[chunkKey].tinted = [];
        }
        this.specialMeshes[chunkKey].tinted.push(mesh);
      } else {
        // Legacy global storage
        if (!this.specialMeshes.tinted) {
          this.specialMeshes.tinted = [];
        }
        this.specialMeshes.tinted.push(mesh);
      }
      
      chunkGroup.add(mesh);
      meshes.push(mesh);
    }

    // Add the chunk group to the scene
    scene.add(chunkGroup);
    
    // For chunk-based meshes, add the group to the list
    if (chunkX !== undefined && chunkZ !== undefined) {
      meshes.push(chunkGroup);
    }

    return meshes;
  }
  
  _buildCrossBlock(collection, x, y, z, textureName) {
    console.log("Building cross block at", x, y, z, "with texture", textureName);
    
    // Use "poppy" as default if textureName is invalid
    if (!textureName || textureName === "undefined") {
      textureName = "poppy";
    }
    
    // Get the atlas UV for this texture
    const atlasUV = this.textureManager.getTexture(textureName);
    if (!atlasUV) {
      console.warn("Texture not found for cross block:", textureName);
      return;
    }

    // Define two quads, each quad has 4 positions, 4 normals, 4 UVs, and 6 indices
    const halfSize = 0.4;
    const bottom = y;
    const top = y + 1.0;
    
    // Center coordinates
    const cx = x + 0.5;
    const cz = z + 0.5;
    
    // Cross-plane is 2 quads:
    // Quad1: diagonal ↖ to ↘
    // Quad2: diagonal ↗ to ↙

    // Quad1 positions (A,B,C,D)
    const A = [cx - halfSize, bottom, cz - halfSize];
    const B = [cx + halfSize, bottom, cz + halfSize];
    const C = [cx + halfSize, top,    cz + halfSize];
    const D = [cx - halfSize, top,    cz - halfSize];

    // Quad2 positions (E,F,G,H)
    const E = [cx - halfSize, bottom, cz + halfSize];
    const F = [cx + halfSize, bottom, cz - halfSize];
    const G = [cx + halfSize, top,    cz - halfSize];
    const H = [cx - halfSize, top,    cz + halfSize];

    // Push the geometry for both quads
    this._pushQuad(collection, [A,B,C,D], atlasUV);
    this._pushQuad(collection, [E,F,G,H], atlasUV);
  }

  _pushQuad(collection, positions, atlasUV) {
    // Normal pointing up for simplicity
    const faceNormal = [0,1,0];

    // Standard square UV with atlas adjustment
    const { offset, repeat } = atlasUV;
    const uvA = [offset.x,             offset.y            ];
    const uvB = [offset.x + repeat.x,  offset.y            ];
    const uvC = [offset.x + repeat.x,  offset.y + repeat.y ];
    const uvD = [offset.x,             offset.y + repeat.y ];

    // Current index offset
    const baseIndex = collection.currentIndex;

    // Push each vertex
    for (let i = 0; i < 4; i++) {
      const vertPos = positions[i];
      const vertNormal = faceNormal;
      let vertUV;
      if      (i === 0) vertUV = uvA;
      else if (i === 1) vertUV = uvB;
      else if (i === 2) vertUV = uvC;
      else if (i === 3) vertUV = uvD;
      
      collection.positions.push(...vertPos);
      collection.normals.push(...vertNormal);
      collection.uvs.push(...vertUV);
    }

    // Two triangles for the quad: (0,1,2) and (2,3,0)
    collection.indices.push(
      baseIndex, baseIndex+1, baseIndex+2,
      baseIndex+2, baseIndex+3, baseIndex
    );
    
    collection.currentIndex += 4;
  }
}
