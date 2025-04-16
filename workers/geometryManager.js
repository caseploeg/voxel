// geometryManager.js - Manages the geometry generation workers

export class GeometryManager {
  constructor(scene, textureManager, blockRegistry, workerCount = 2) {
    this.scene = scene;
    this.textureManager = textureManager;
    this.blockRegistry = blockRegistry;
    this.workerCount = Math.min(workerCount, navigator.hardwareConcurrency || 2);
    this.workers = [];
    this.pendingRequests = new Map(); // Map of requestId -> { resolve, reject, priority }
    this.requestIdCounter = 0;
    this.isInitialized = false;
    this.initPromise = null;
    
    // The build queue holds chunks that need geometry
    this.buildQueue = [];
    
    // Track the last known player movement direction
    this.lastPlayerPosition = { x: 0, z: 0 };
    this.playerDirection = { x: 0, z: 0 };
    
    // Create the workers
    this._createWorkers();
  }
  
  // Initialize the workers with the necessary data
  async initialize() {
    if (this.isInitialized) return Promise.resolve();
    
    if (this.initPromise) return this.initPromise;
    
    this.initPromise = new Promise((resolve, reject) => {
      // Count initialized workers
      let initializedCount = 0;
      
      // Listen for the initialization response from each worker
      const onInitialized = () => {
        initializedCount++;
        if (initializedCount === this.workers.length) {
          this.isInitialized = true;
          resolve();
        }
      };
      
      // Set up initialization listeners for each worker
      this.workers.forEach(worker => {
        const originalHandler = worker.onmessage;
        
        worker.onmessage = (e) => {
          if (e.data.type === 'initialized') {
            onInitialized();
            worker.onmessage = originalHandler; // Restore original handler
          } else {
            // Handle other messages with the original handler
            originalHandler(e);
          }
        };
        
        // Initialize the worker with necessary data
        worker.postMessage({
          type: 'init',
          data: {
            // Pass special block types used for culling
            specialBlockTypes: {
              WATER: 2,  // Assuming BlockType.WATER = 2
              MULTI_SIDED: 'multi_sided'
            },
            // Pass multi-sided block definitions
            multiSidedBlocks: this.blockRegistry.multiSidedBlocks,
            // Pass tinted textures
            tintedTextures: this.blockRegistry.tintedTextures
          }
        });
      });
      
      // Set a timeout for initialization
      setTimeout(() => {
        if (!this.isInitialized) {
          reject(new Error('Worker initialization timed out'));
        }
      }, 5000);
    });
    
    return this.initPromise;
  }
  
  // Update the player's position and calculate direction of movement
  updatePlayerPosition(x, z) {
    if (this.lastPlayerPosition.x !== 0 || this.lastPlayerPosition.z !== 0) {
      // Calculate direction vector
      this.playerDirection = {
        x: x - this.lastPlayerPosition.x,
        z: z - this.lastPlayerPosition.z
      };
      
      // Normalize direction if there's movement
      const length = Math.sqrt(this.playerDirection.x ** 2 + this.playerDirection.z ** 2);
      if (length > 0) {
        this.playerDirection.x /= length;
        this.playerDirection.z /= length;
      }
    }
    
    this.lastPlayerPosition = { x, z };
  }
  
  // Request geometry building for a chunk
  async requestGeometry(chunkData, chunkX, chunkZ, chunkSize) {
    if (!this.isInitialized) {
      await this.initialize();
    }
    
    return new Promise((resolve, reject) => {
      const requestId = this._getNextRequestId();
      
      // Calculate priority based on player position and direction
      const priority = this._calculateChunkPriority(chunkX, chunkZ);
      
      // Store the request in pendingRequests
      this.pendingRequests.set(requestId, { resolve, reject, priority, chunkX, chunkZ });
      
      // Add to queue with priority
      this.buildQueue.push({
        requestId,
        chunkData,
        chunkX,
        chunkZ,
        chunkSize,
        priority
      });
      
      // Sort the queue by priority (highest first)
      this._sortBuildQueue();
      
      // Process the queue
      this._processQueue();
    });
  }
  
  // Calculate chunk priority based on distance and player direction
  _calculateChunkPriority(chunkX, chunkZ) {
    // Distance from player's current chunk
    const playerChunkX = Math.floor(this.lastPlayerPosition.x / 16); // Assuming chunkSize = 16
    const playerChunkZ = Math.floor(this.lastPlayerPosition.z / 16);
    
    const dx = chunkX - playerChunkX;
    const dz = chunkZ - playerChunkZ;
    
    // Base priority on distance (closer = higher priority)
    const distancePriority = 1000 / (1 + Math.sqrt(dx * dx + dz * dz));
    
    // Direction component - higher priority for chunks in player's direction
    let directionBonus = 0;
    if (this.playerDirection.x !== 0 || this.playerDirection.z !== 0) {
      // Calculate dot product between direction vector and chunk vector
      // This will give higher values when chunk is in direction of travel
      const directionAlignment = dx * this.playerDirection.x + dz * this.playerDirection.z;
      directionBonus = Math.max(0, directionAlignment) * 500; // Apply bonus only for chunks ahead
    }
    
    return distancePriority + directionBonus;
  }
  
  // Sort the build queue by priority
  _sortBuildQueue() {
    this.buildQueue.sort((a, b) => b.priority - a.priority);
  }
  
  // Process the geometry build queue
  _processQueue() {
    // Skip if queue is empty
    if (this.buildQueue.length === 0) return;
    
    // Find free workers
    const freeWorkers = this.workers.filter(worker => !worker.busy);
    if (freeWorkers.length === 0) return; // No free workers
    
    // Process as many chunks as we have free workers
    for (let i = 0; i < freeWorkers.length && this.buildQueue.length > 0; i++) {
      const worker = freeWorkers[i];
      const nextChunk = this.buildQueue.shift();
      this._buildGeometryWithWorker(worker, nextChunk);
    }
  }
  
  // Build geometry using a worker
  _buildGeometryWithWorker(worker, chunkRequest) {
    const { requestId, chunkData, chunkX, chunkZ, chunkSize } = chunkRequest;
    
    // Mark the worker as busy
    worker.busy = true;
    
    // Set up the message handler for this request
    const messageHandler = (e) => {
      if (e.data.requestId !== requestId) return; // Not our request
      
      // Remove the event listener
      worker.removeEventListener('message', messageHandler);
      
      // Mark the worker as free
      worker.busy = false;
      
      // Handle the message
      if (e.data.type === 'geometryBuilt') {
        // Get the request from pending requests
        const request = this.pendingRequests.get(requestId);
        if (request) {
          // Resolve the promise with the geometry buffers
          request.resolve({
            chunkX,
            chunkZ,
            geometryBuffers: e.data.geometryBuffers,
            buildTime: e.data.buildTime
          });
          
          // Remove the request from pending
          this.pendingRequests.delete(requestId);
        }
      } else if (e.data.type === 'error') {
        // Get the request from pending requests
        const request = this.pendingRequests.get(requestId);
        if (request) {
          // Reject the promise with the error
          request.reject(new Error(e.data.data.message));
          
          // Remove the request from pending
          this.pendingRequests.delete(requestId);
        }
      }
      
      // Process the next chunk in the queue
      this._processQueue();
    };
    
    // Add the message handler
    worker.addEventListener('message', messageHandler);
    
    // Send the chunk data to the worker
    worker.postMessage({
      type: 'buildGeometry',
      data: {
        chunkData,
        chunkX,
        chunkZ,
        chunkSize,
        requestId,
        // You might want to pass texture atlas data and other render info needed for UVs
        textureAtlasData: this._getTextureAtlasData(),
        blockRegistry: this._getBlockRegistryData()
      }
    });
  }
  
  // Get the texture atlas data
  _getTextureAtlasData() {
    // This would be specific to your implementation
    // For example, you might return a map of texture names to UV coordinates
    return {
      // Example: 
      // 'grass': { offset: { x: 0, y: 0 }, repeat: { x: 1/16, y: 1/16 } }
    };
  }
  
  // Get the block registry data
  _getBlockRegistryData() {
    if (!this.blockRegistry) {
      return {};
    }
    
    return {
      multiSidedBlocks: this.blockRegistry.multiSidedBlocks,
      tintedTextures: this.blockRegistry.tintedTextures,
      blockTypes: {
        STANDARD: 'standard',
        WATER: 'water',
        MULTI_SIDED: 'multi_sided',
        TINTED: 'tinted'
      }
    };
  }
  
  // Create the worker pool
  _createWorkers() {
    // Clear any existing workers
    this.workers.forEach(worker => worker.terminate());
    this.workers = [];
    
    // Create the new workers
    for (let i = 0; i < this.workerCount; i++) {
      const worker = new Worker(new URL('./geometryWorker.js', import.meta.url));
      
      // Initialize worker properties
      worker.busy = false;
      
      // Add to workers array
      this.workers.push(worker);
    }
  }
  
  // Get the next request ID
  _getNextRequestId() {
    return ++this.requestIdCounter;
  }
  
  // Shut down all workers
  shutdown() {
    this.workers.forEach(worker => worker.terminate());
    this.workers = [];
    this.pendingRequests.clear();
    this.buildQueue = [];
    this.isInitialized = false;
    this.initPromise = null;
  }
}