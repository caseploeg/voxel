// chunkManager.js - Manages the chunk generation using Web Workers

export class ChunkGenerationManager {
  constructor(terrainGen, blockNameMap, workerCount = 16) {
    this.terrainGen = terrainGen;
    this.blockNameMap = blockNameMap;
    this.workerCount = Math.min(workerCount, navigator.hardwareConcurrency || 16);
    this.workers = [];
    this.pendingRequests = new Map(); // Map of requestId -> { resolve, reject }
    this.requestIdCounter = 0;
    this.isInitialized = false;
    this.initPromise = null;
    
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
        
        // Initialize the worker with the terrain generator data
        worker.postMessage({
          type: 'init',
          data: {
            seed: this.terrainGen.seed,
            params: {
              seaLevel: this.terrainGen.seaLevel,
              minHeight: this.terrainGen.minHeight,
              maxHeight: this.terrainGen.maxHeight,
              heightFreq: this.terrainGen.heightFreq,
              heightAmp: this.terrainGen.heightAmp,
              caveFreq: this.terrainGen.caveFreq,
              caveThreshold: this.terrainGen.caveThreshold
            },
            // Sending noise functions as strings doesn't work well, 
            // so we'll use simplified noise functions in the worker itself
            noiseLib: true
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
  
  // Generate a chunk with the given coordinates
  async generateChunk(chunkX, chunkZ, chunkSize) {
    if (!this.isInitialized) {
      await this.initialize();
    }
    
    return new Promise((resolve, reject) => {
      const requestId = this._getNextRequestId();
      
      // Store the request callbacks
      this.pendingRequests.set(requestId, { resolve, reject });
      
      // Find the least busy worker
      const worker = this._getLeastBusyWorker();
      
      // Send the request to the worker
      worker.postMessage({
        type: 'generateChunk',
        data: {
          chunkX,
          chunkZ,
          chunkSize,
          requestId,
          // Special instruction to generate more poppies for debugging
          debug_more_poppies: true
        }
      });
    });
  }
  
  // Create the worker pool
  _createWorkers() {
    // Clear any existing workers
    this.workers.forEach(worker => worker.terminate());
    this.workers = [];
    
    // Create the new workers
    for (let i = 0; i < this.workerCount; i++) {
      const worker = new Worker(new URL('./chunkWorker.js', import.meta.url), {type: 'module'});
      
      // Handle messages from the worker
      worker.onmessage = (e) => {
        const { type, data } = e.data;
        
        switch (type) {
          case 'chunkGenerated':
            // Get the request from the pending requests
            const request = this.pendingRequests.get(data.requestId);
            if (request) {
              // Resolve the promise with the chunk data
              request.resolve({
                chunkX: data.chunkX,
                chunkZ: data.chunkZ,
                chunkData: data.chunkData,
                generationTime: data.generationTime
              });
              // Remove the request from pending
              this.pendingRequests.delete(data.requestId);
            }
            break;
            
          case 'error':
            // Get the request from the pending requests
            const errorRequest = this.pendingRequests.get(data.requestId);
            if (errorRequest) {
              // Reject the promise with the error
              errorRequest.reject(new Error(data.message));
              // Remove the request from pending
              this.pendingRequests.delete(data.requestId);
            }
            break;
            
          default:
            console.error('Unknown message type from worker:', type);
        }
      };
      
      // Store worker information
      worker.pendingRequests = 0;
      this.workers.push(worker);
    }
  }
  
  // Get the next request ID
  _getNextRequestId() {
    return ++this.requestIdCounter;
  }
  
  // Get the worker with the fewest pending requests
  _getLeastBusyWorker() {
    let leastBusyWorker = this.workers[0];
    let minPendingRequests = leastBusyWorker.pendingRequests;
    
    for (let i = 1; i < this.workers.length; i++) {
      const worker = this.workers[i];
      if (worker.pendingRequests < minPendingRequests) {
        leastBusyWorker = worker;
        minPendingRequests = worker.pendingRequests;
      }
    }
    
    // Increment the worker's pending request count
    leastBusyWorker.pendingRequests++;
    
    return leastBusyWorker;
  }
  
  // Shut down all workers
  shutdown() {
    this.workers.forEach(worker => worker.terminate());
    this.workers = [];
    this.pendingRequests.clear();
    this.isInitialized = false;
    this.initPromise = null;
  }
}
