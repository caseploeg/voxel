// voxelWorld.js
import * as THREE from 'three';
import { BlockRegistry, BlockType } from './blockRegistry.js';
import { createWaterMaterial } from './shaders/waterShader.js';

export class VoxelWorld {
  constructor(scene, textureManager) {
    this.scene = scene;
    this.textureManager = textureManager;
    this.voxels = [];
    this.worldData = {};
    this.blockRegistry = new BlockRegistry();
    this.specialMeshes = {}; // Store meshes by block type
    this.clock = new THREE.Clock();

    // You could make cubeSize configurable if needed
    this.cubeSize = 1;
    this.cubeGeometry = new THREE.BoxGeometry(this.cubeSize, this.cubeSize, this.cubeSize);
  }

  getRandomBlockType(textureManager) {
    const names = Object.keys(textureManager.textureCache);
    if (!names.length) return null;
    return names[Math.floor(Math.random() * names.length)];
  }

  /**
   * Place a block in the world
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} z - Z coordinate
   * @param {string} blockType - Optional block type (water, standard, etc)
   */
  setBlock(x, y, z, blockType) {
    // If blockType is not specified, use standard or random texture
    if (!blockType) {
      blockType = BlockType.STANDARD;
    }

    // For standard blocks, assign a random texture
    let textureType = null;
    if (blockType === BlockType.STANDARD) {
      textureType = this.getRandomBlockType(this.textureManager);
    }

    this.worldData[`${x},${y},${z}`] = { 
      blockType: blockType,
      textureType: textureType
    };
  }

  hasBlock(x, y, z) {
    return !!this.worldData[`${x},${y},${z}`];
  };

  generateTerrain(worldSize = 5) {
    for (let x = -worldSize; x <= worldSize; x++) {
      for (let z = -worldSize; z <= worldSize; z++) {
        // Create ground layer
        this.setBlock(x, -1, z, BlockType.STANDARD); 

        // Create water layer
        if (Math.random() > 0.8) {
          this.setBlock(x, 10, z, BlockType.WATER);
        }

        // Randomly add some blocks above ground
        if (Math.random() > 0.8) {
          const height = Math.floor(Math.random() * 20) + 1;
          for (let y = 0; y < height; y++) {
            this.setBlock(x, y, z, BlockType.STANDARD);
          }
        }
      }
    }
  }

  buildCulledMesh() {
    // Create separate collections for different block types
    const geometryCollections = {
      [BlockType.STANDARD]: {
        positions: [],
        normals: [],
        uvs: [],
        indices: [],
        currentIndex: 0
      }
    };

    // Create geometry collections for all special block types
    Object.keys(this.blockRegistry.specialBlocks).forEach(blockType => {
      geometryCollections[blockType] = {
        positions: [],
        normals: [],
        uvs: [],
        indices: [],
        currentIndex: 0
      };
    });

    // Helper function to push a face to the appropriate collection
    const pushFace = (collection, facePositions, faceNormals, faceUVs) => {
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
    };

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

    // Process all blocks in world data
    for (let key in this.worldData) {
      if (!this.worldData.hasOwnProperty(key)) continue;
      const [x, y, z] = key.split(',').map(Number);
      const blockInfo = this.worldData[key];
      if (!blockInfo) continue;

      const { blockType, textureType } = blockInfo;
      const collection = geometryCollections[blockType];
      
      // Skip if we don't have a collection for this block type
      if (!collection) continue;

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
        const neighborInfo = this.worldData[neighborKey];
        const skipFace = neighborInfo && 
          !(this.blockRegistry.isSpecialBlock(blockType) && 
            neighborInfo.blockType !== blockType);
            
        if (skipFace) {
          continue;
        }

        // Get texture information based on block type
        let atlasUV;
        if (blockType === BlockType.STANDARD) {
          // For standard blocks, use the assigned texture
          atlasUV = this.textureManager.getTexture(textureType);
        } else if (blockType === BlockType.WATER) {
          // For water, we'll use a specific texture or a default one
          // Later the shader will handle the special effects

          atlasUV = this.textureManager.getTexture('acacia_door_bottom') || 
                    Object.values(this.textureManager.textureCache)[0];
        }
        
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

        pushFace(collection, facePositions, faceNormals, faceUVs);
      }
    }

    // Create meshes for each block type
    const meshes = [];
    
    // Create standard blocks mesh
    const standardCollection = geometryCollections[BlockType.STANDARD];
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
      this.scene.add(mesh);
      meshes.push(mesh);
    }

    // Create special block meshes
    for (let blockType in this.blockRegistry.specialBlocks) {
      const collection = geometryCollections[blockType];
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
        const waterTextureName = Object.keys(this.textureManager.textureCache).find(name => 
          name.includes('ice')) || Object.keys(this.textureManager.textureCache)[0];
          
        const waterUV = this.textureManager.getTexture(waterTextureName);
        material = createWaterMaterial(this.textureManager.atlasTexture, {
          offset: { x: waterUV.offset.x, y: waterUV.offset.y },
          repeat: { x: waterUV.repeat.x, y: waterUV.repeat.y }
        });
      }
      
      const mesh = new THREE.Mesh(geo, material);
      mesh.receiveShadow = true;
      
      // Store reference to special meshes for animation updates
      this.specialMeshes[blockType] = mesh;
      
      this.scene.add(mesh);
      meshes.push(mesh);
    }

    return meshes;
  }

  /**
   * Update time-based animations for special blocks
   * @param {number} delta - Time since last update
   */
  update(delta) {
    // Update water shader uniforms
    if (this.specialMeshes[BlockType.WATER]) {
      const waterMesh = this.specialMeshes[BlockType.WATER];
      if (waterMesh.material && waterMesh.material.uniforms) {
        waterMesh.material.uniforms.time.value += delta;
      }
    }
  }

}
