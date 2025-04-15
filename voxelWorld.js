// voxelWorld.js
import * as THREE from 'three';

export class VoxelWorld {
  constructor(scene, textureManager) {
    this.scene = scene;
    this.textureManager = textureManager;
    this.voxels = [];
    this.worldData = {};

    // You could make cubeSize configurable if needed
    this.cubeSize = 1;
    this.cubeGeometry = new THREE.BoxGeometry(this.cubeSize, this.cubeSize, this.cubeSize);
  }

  getRandomBlockType(textureManager) {
    const names = Object.keys(textureManager.textureCache);
    if (!names.length) return null;
    return names[Math.floor(Math.random() * names.length)];
  }

  setBlock(x,y,z) {
    this.worldData[`${x},${y},${z}`] = { type: this.getRandomBlockType(this.textureManager) };
  }

  hasBlock(x, y, z) {
    return !!this.worldData[`${x},${y},${z}`];
  };

  generateTerrain(worldSize = 5) {
    for (let x = -worldSize; x <= worldSize; x++) {
      for (let z = -worldSize; z <= worldSize; z++) {
        // Create ground layer
        //this.createVoxel(x, -1, z);
        this.setBlock(x,-1,z); 

        // Randomly add some blocks above ground
        if (Math.random() > 0.8) {
          const height = Math.floor(Math.random() * 20) + 1;
          for (let y = 0; y < height; y++) {
            //this.createVoxel(x, y, z);
            this.setBlock(x,y,z);
          }
        }
      }
    }
  }

  buildCulledMesh() {
    const positions = [];
    const normals   = [];
    const uvs       = [];
    const indices   = [];

    let currentIndex = 0;

    const pushFace = (facePositions, faceNormals, faceUVs) => {
      for (let i = 0; i < 4; i++) {
        positions.push(...facePositions[i]);
        normals.push(...faceNormals[i]);
        uvs.push(...faceUVs[i]);
      }
      indices.push(
        currentIndex,     currentIndex + 1, currentIndex + 2,
        currentIndex + 2, currentIndex + 3, currentIndex
      );
      currentIndex += 4;
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

    for (let key in this.worldData) {
      if (!this.worldData.hasOwnProperty(key)) continue;
      const [x, y, z] = key.split(',').map(Number);

      // For each of the 6 directions, add the face if that neighbor doesn't exist
      for (let dirKey in directions) {
        const dir = directions[dirKey];
        const neighborKey = [
          x + dir.neighbor[0],
          y + dir.neighbor[1],
          z + dir.neighbor[2]
        ].join(',');

        // Only add a face if there's *no* block in that neighbor
        if (this.worldData[neighborKey]) {
          continue;
        }

        // Grab block type from worldData
        const blockInfo = this.worldData[key];
        if (!blockInfo) continue;
        const textureName = blockInfo.type;
        
        // The texture in the atlas for this block
        const atlasUV = this.textureManager.getTexture(textureName);
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

        pushFace(facePositions, faceNormals, faceUVs);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    geo.setAttribute('normal',   new THREE.BufferAttribute(new Float32Array(normals),   3));
    geo.setAttribute('uv',       new THREE.BufferAttribute(new Float32Array(uvs),       2));
    
    // You can compute bounding and/or vertex normals here if needed
    geo.computeBoundingSphere();
    // geo.computeVertexNormals(); // If you rely on face-based normals, keep as is

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

    return mesh;
  }



}
