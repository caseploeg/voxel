// geometryWorker.js - Simplified Web Worker for geometry building

// Global variables
let blockRegistry = null;
let textureAtlasData = null;
let isInitialized = false;

// Handle messages from the main thread
self.onmessage = function(e) {
  const { type, data } = e.data;
  
  switch (type) {
    case 'init':
      // Initialize the worker
      blockRegistry = data.blockRegistry;
      textureAtlasData = data.textureAtlasData;
      isInitialized = true;
      console.log('Geometry worker initialized');
      self.postMessage({ type: 'initialized' });
      break;
      
    case 'buildGeometry':
      // Build geometry for a chunk
      try {
        if (!isInitialized) {
          throw new Error('Worker not initialized');
        }
        
        const startTime = performance.now();
        
        const { chunkData, chunkX, chunkZ, chunkSize, requestId } = data;
        console.log(`Building geometry for chunk ${chunkX},${chunkZ}`);
        
        // Create a simple test cube at (0,0,0)
        const geometryBuffers = createTestCube();
        
        const endTime = performance.now();
        const buildTime = endTime - startTime;
        
        // Send the geometry back to the main thread
        self.postMessage({
          type: 'geometryBuilt',
          requestId,
          geometryBuffers,
          buildTime
        });
        
        console.log(`Geometry built for chunk ${chunkX},${chunkZ} in ${buildTime}ms`);
        
      } catch (error) {
        console.error('Error building geometry:', error);
        self.postMessage({
          type: 'error',
          requestId: data.requestId,
          data: {
            message: error.message
          }
        });
      }
      break;
      
    default:
      console.error('Unknown message type:', type);
  }
};

// Create a simple test cube
function createTestCube() {
  // Simple cube vertices (8 vertices)
  const vertices = [
    // Front face
    0, 0, 1,   1, 0, 1,   1, 1, 1,   0, 1, 1,
    // Back face  
    1, 0, 0,   0, 0, 0,   0, 1, 0,   1, 1, 0,
    // Top face
    0, 1, 0,   0, 1, 1,   1, 1, 1,   1, 1, 0,
    // Bottom face
    0, 0, 1,   0, 0, 0,   1, 0, 0,   1, 0, 1,
    // Right face
    1, 0, 1,   1, 0, 0,   1, 1, 0,   1, 1, 1,
    // Left face
    0, 0, 0,   0, 0, 1,   0, 1, 1,   0, 1, 0
  ];
  
  // Indices for the cube faces
  const indices = [
    0, 1, 2,   0, 2, 3,    // Front face
    4, 5, 6,   4, 6, 7,    // Back face
    8, 9, 10,  8, 10, 11,  // Top face
    12, 13, 14, 12, 14, 15, // Bottom face
    16, 17, 18, 16, 18, 19, // Right face
    20, 21, 22, 20, 22, 23  // Left face
  ];
  
  // Simple UV coordinates (same for all faces)
  const uvs = [];
  for (let i = 0; i < 6; i++) {
    uvs.push(0, 0,  1, 0,  1, 1,  0, 1);
  }
  
  // Simple normals
  const normals = [
    // Front face
    0, 0, 1,   0, 0, 1,   0, 0, 1,   0, 0, 1,
    // Back face
    0, 0, -1,  0, 0, -1,  0, 0, -1,  0, 0, -1,
    // Top face
    0, 1, 0,   0, 1, 0,   0, 1, 0,   0, 1, 0,
    // Bottom face
    0, -1, 0,  0, -1, 0,  0, -1, 0,  0, -1, 0,
    // Right face
    1, 0, 0,   1, 0, 0,   1, 0, 0,   1, 0, 0,
    // Left face
    -1, 0, 0,  -1, 0, 0,  -1, 0, 0,  -1, 0, 0
  ];
  
  return {
    standard: {
      positions: new Float32Array(vertices),
      indices: new Uint16Array(indices),
      uvs: new Float32Array(uvs),
      normals: new Float32Array(normals)
    }
  };
}