// voxelWorld.js
import * as THREE from 'three';
import { BlockRegistry, BlockType, Direction } from './blockRegistry.js';
import { createWaterMaterial } from './shaders/waterShader.js';

export class VoxelWorld {
  constructor(scene, textureManager) {
    this.scene = scene;
    this.textureManager = textureManager;
    this.voxels = [];
    this.worldData = {};
    this.blockRegistry = new BlockRegistry(textureManager);
    this.specialMeshes = {}; // Store meshes by block type
    this.clock = new THREE.Clock();

    // You could make cubeSize configurable if needed
    this.cubeSize = 1;
    this.cubeGeometry = new THREE.BoxGeometry(this.cubeSize, this.cubeSize, this.cubeSize);
  }

  /**
   * Get a random block texture that's valid for use
   * @returns {string} Random valid texture name
   */
  getRandomBlockType() {
    return this.blockRegistry.getRandomValidTexture(this.textureManager);
  }

  /**
   * Place a block in the world
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} z - Z coordinate
   * @param {string} blockType - Optional block type (water, standard, multi_sided, etc)
   * @param {string} blockName - Optional specific block name for multi-sided blocks
   */
  setBlock(x, y, z, blockType, blockName) {
    // If blockType is not specified, use standard
    if (!blockType) {
      blockType = BlockType.STANDARD;
    }

    // Handle different block types
    const blockData = { blockType };
    
    if (blockType === BlockType.STANDARD) {
      // For standard blocks, assign a random valid texture
      blockData.textureType = this.getRandomBlockType();
    } 
    else if (blockType === BlockType.MULTI_SIDED) {
      // For multi-sided blocks, we need the specific block name
      if (!blockName || !this.blockRegistry.isMultiSidedBlock(blockName)) {
        blockData.blockType = BlockType.STANDARD;
        blockData.textureType = this.getRandomBlockType();
      } else {
        blockData.blockName = blockName;
      }
    }
    else if (blockType === BlockType.CROSS) {
        blockData.textureType = 'poppy'; 
    }
    // For water blocks, we don't need a texture type
    this.worldData[`${x},${y},${z}`] = blockData;
  }
  
  /**
   * Place a specific type of block in the world
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} z - Z coordinate
   * @param {string} blockName - Name of the block (must be registered in BlockRegistry)
   */
  setNamedBlock(x, y, z, blockName) {
    // Check if this is a registered multi-sided block
    if (this.blockRegistry.isMultiSidedBlock(blockName)) {
      this.setBlock(x, y, z, BlockType.MULTI_SIDED, blockName);
    } 
    // Check if it's a special block like water
    else if (blockName === 'water') {
      this.setBlock(x, y, z, BlockType.WATER);
    }
    // Otherwise treat it as a standard block with a specific texture
    else {
      const blockData = {
        blockType: BlockType.STANDARD,
        textureType: blockName
      };
      this.worldData[`${x},${y},${z}`] = blockData;
    }
  }

  hasBlock(x, y, z) {
    return !!this.worldData[`${x},${y},${z}`];
  };

  /**
   * Generate a full terrain with many types of blocks
   * @param {number} worldSize - Size of the world (in blocks) from center
   */
  generateTerrain(worldSize = 5) {
    // "rose" is just the texture name in your atlas
    // Blocks are registered in the BlockRegistry constructor

    for (let x = -worldSize; x <= worldSize; x++) {
      for (let z = -worldSize; z <= worldSize; z++) {
        // Create ground layer using grass blocks (multi-sided)
        this.setBlock(x, -1, z, BlockType.MULTI_SIDED, 'grass_block');
        this.setBlock(x, 0, z, BlockType.CROSS, 'poppy');
      }
    }
    
    let validTextures = this.blockRegistry.defaultValidTextures;
    // Add a column of every valid texture for testing
    let y = 0;
    for (let i = 0; i < Math.min(validTextures.length, 10); i++) {
      let textureName = validTextures[i];
      if (this.blockRegistry.isMultiSidedBlock(textureName)) {
        this.setBlock(0, y, 0, BlockType.MULTI_SIDED, textureName);
      } else {
        this.setNamedBlock(0, y, 0, textureName);
      }
      
      y++;
    }
  }


  _buildCrossBlock(collection, x, y, z, textureName) {
    // 1. Get the atlas UV for this texture
    const atlasUV = this.textureManager.getTexture(textureName);
    if (!atlasUV) return;

    // 2. We’ll define two quads. Each quad has 4 positions, 4 normals, 4 UVs, and 6 indices.
    //    Let’s assume the flower is 1 block tall. You can tweak halfSize, height, etc.
    const halfSize = 0.4;
    const bottom = y;
    const top    = y + 1.0;
    
    // Typically we center it at x+0.5, z+0.5
    const cx = x + 0.5;
    const cz = z + 0.5;
    
    // The cross-plane is basically 2 quads:
    // Quad1: diagonal ↖ to ↘
    // Quad2: diagonal ↗ to ↙
    // You can define their corners like this:

    // -- Quad1 positions (A,B,C,D)
    const A = [cx - halfSize, bottom, cz - halfSize];
    const B = [cx + halfSize, bottom, cz + halfSize];
    const C = [cx + halfSize, top,    cz + halfSize];
    const D = [cx - halfSize, top,    cz - halfSize];

    // -- Quad2 positions (E,F,G,H)
    const E = [cx - halfSize, bottom, cz + halfSize];
    const F = [cx + halfSize, bottom, cz - halfSize];
    const G = [cx + halfSize, top,    cz - halfSize];
    const H = [cx - halfSize, top,    cz + halfSize];

    // For each quad, push the geometry with a little helper:
    this._pushQuad(collection, [A,B,C,D], atlasUV);
    this._pushQuad(collection, [E,F,G,H], atlasUV);
  }

  _pushQuad(collection, positions, atlasUV) {
    // Every vertex in a cross-plane typically has the same normal if you want lighting, 
    // but you can just set it to e.g. +Y or average normal. 
    // Or you can compute face normals. 
    // Typically for something like grass or flowers, you might not care about perfect lighting. 
    // For simplicity, we’ll store a normal pointing up (0,1,0). 
    // Or you can create per-vertex normals for each side. 
    const faceNormal = [0,1,0];

    // Just a standard square UV: (0,0), (1,0), (1,1), (0,1)
    // We'll multiply by atlasUV.repeat and add atlasUV.offset to each corner
    // so that the correct portion of the atlas is used.
    const { offset, repeat } = atlasUV;
    const uvA = [offset.x,             offset.y            ];
    const uvB = [offset.x + repeat.x,  offset.y            ];
    const uvC = [offset.x + repeat.x,  offset.y + repeat.y ];
    const uvD = [offset.x,             offset.y + repeat.y ];

    // Current index offset
    const baseIndex = collection.currentIndex;

    // push each vertex
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

  buildCulledMesh() {
    // Create separate collections for different block types
    const geometryCollections = {
      [BlockType.STANDARD]: {
        positions: [],
        normals: [],
        uvs: [],
        indices: [],
        currentIndex: 0
      },
      [BlockType.MULTI_SIDED]: {
        positions: [],
        normals: [],
        uvs: [],
        indices: [],
        currentIndex: 0
      },
      [BlockType.CROSS]: { 
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
        else if (blockType === BlockType.CROSS) {
          const collection = geometryCollections[BlockType.CROSS];
          this._buildCrossBlock(collection, x, y, z, textureType);
          continue;
        }
        else if (blockType === BlockType.MULTI_SIDED) {
          // For multi-sided blocks, select texture based on the face direction
          const blockName = blockInfo.blockName;
          let faceName;
          // Map direction key to face name
          switch (dirKey) {
            case 'py': faceName = Direction.TOP; break;
            case 'ny': faceName = Direction.BOTTOM; break;
            // case 'px': faceName = Direction.EAST; break;
            // case 'nx': faceName = Direction.WEST; break;
            // case 'pz': faceName = Direction.SOUTH; break;
            // case 'nz': faceName = Direction.NORTH; break;
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

        pushFace(collection, facePositions, faceNormals, faceUVs);
      }
    }

    // Create meshes for each block type
    const meshes = [];
 
    const crossColl = geometryCollections[BlockType.CROSS];
    if (crossColl.positions.length > 0) {
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
        roughness: 1
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.receiveShadow = true;
      mesh.castShadow = false;  // or true, up to you
      this.scene.add(mesh);
      meshes.push(mesh);
    }
      

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
    
    // Create multi-sided blocks mesh
    const multiSidedCollection = geometryCollections[BlockType.MULTI_SIDED];
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
        // Debug properties to help see texture issues
        transparent: true,
        side: THREE.DoubleSide
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
