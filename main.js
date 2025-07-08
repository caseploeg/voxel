import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

import { TextureManager } from './textureManager.js';
import { InputHandler } from './inputHandler.js'; 
import { VoxelWorld } from './voxelWorld.js'; import { TERRAIN_TYPE } from './terrainGenerator.js';
import { RenderManager } from './renderManager.js';
import { TextureDebugger } from './textureDebugger.js';

import Stats from 'stats.js';
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);







const meta = import.meta.glob('./assets/textures/*.png', {
      query:  '?url',
      import: 'default',
      eager:  true,
    });

const validBlockPatterns = [
  // Basic block textures
  'stone', 'dirt', 'grass', 'sand', 'gravel', 'poppy',
  //'wood', 'log', 'planks', 'leaves',
  
  // Ores and valuable blocks
  //'ore', 'diamond', 'gold', 'iron', 'coal',
  
  // Construction blocks
  //'brick', 'cobble', 'glass', 'concrete',
  
  // Natural blocks
  'water', 'lava', 'snow', 'ice',
  
  // Additional blocks - add keywords as needed
  //'wool', 'clay'
  
  // Add more patterns as needed
];


// Helper to check if a texture should be loaded
const isValidTexture = (path) => {
  return validBlockPatterns.some(pattern => path.includes(pattern));
};



// keep the key for filtering, but pass the VALUE (the served URL) to the loader
const texturePaths = Object.entries(meta)            // [ [key , value], ... ]
  .filter(([path /* key */, _url]) => isValidTexture(path))
  .map(([ path , url /* value */]) => {
    console.log(`Loading texture: ${path} -> ${url}`);
    return url;
  });

console.log(`Found ${texturePaths.length} valid textures to load:`, texturePaths);


export class Game {
  constructor() {
    this.textures = new TextureManager();
    this.textures.setTexturePaths(texturePaths);
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.composer = null;
    this.controls = null;
    this.clock = new THREE.Clock();

    // We'll create the VoxelWorld instance later
    this.voxelWorld = null;
    this.inputHandler = null;
    this.renderManager = null;
    this.textureDebugger = null;

    this.debugMenuVisible = false;
    this.debugMenuElement = null;
    
    // Initialize a toggle for the debug menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F3') {
        this.toggleDebugMenu();
      }
    });
  }

  async initialize() {
    try {
      await this.textures.load();   // Load the atlas
      
      // Create and initialize the voxel world (needed for the block registry)
      this.voxelWorld = new VoxelWorld(null, this.textures);
      
      // Create texture debugger after textures are loaded
      this.textureDebugger = new TextureDebugger(this.textures, this.voxelWorld.blockRegistry);
      this.textureDebugger.initialize();
      
      this.initScene();
      this.createDebugMenu();
      
      // Show debug menu by default so player can see worker thread status
      this.toggleDebugMenu();
      
      // Setup keyboard controls for texture debugger, water shader toggle, and terrain type
      window.addEventListener('keydown', (e) => {
        if (e.key === 'F4') {
          this.rebuildWorldWithDebuggerSettings();
        }
        if (e.key === 'F5') {
          this.toggleWaterShader();
        }
        if (e.key === 'F1') {
          this.toggleTerrainType();
        }
      });
      
      // Add window unload handler to clean up workers
      window.addEventListener('beforeunload', () => {
        if (this.voxelWorld) {
          this.voxelWorld.cleanup();
        }
      });
      
      this.animate();
    } catch (error) {
      console.error('Error in init:', error);
    }
  }
  
  /**
   * Rebuild the world using the texture settings from the debugger
   */
  rebuildWorldWithDebuggerSettings() {
    if (!this.textureDebugger || !this.voxelWorld) return;
    
    // Get valid textures from the debugger
    const validTextures = this.textureDebugger.getValidTextures();
    
    // Apply them to the block registry
    this.voxelWorld.blockRegistry.setValidTextures(validTextures);
    
    // Clear the entire scene except for lights and camera
    const meshesToRemove = this.scene.children.filter(child => 
      child.isMesh && child !== this.debugMesh);
    
    meshesToRemove.forEach(mesh => this.scene.remove(mesh));
    
    // Clear the world data
    this.voxelWorld.worldData = {};
    
    // Generate a small testing world with just one block initially
    this.voxelWorld.generateSimpleTerrain(5); // Smaller size for testing
    
    // Build new mesh
    this.voxelWorld.buildCulledMesh();
  }

  initScene(){
    // Create a Three.js scene
    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0xAAAAFF);
    // Set up a camera (fov, aspect ratio, near, far)
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth/window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(10, 70, 10);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.renderManager = new RenderManager(scene, camera);

    // Update the scene reference on the voxel world (which was created earlier)
    this.voxelWorld.scene = scene;
    
    // Initialize the terrain system with dynamic chunk generation
    this.voxelWorld.initializeTerrain(3); // Start with a small area (7x7 chunks)
    
    // Set a reasonable view distance for chunk loading/unloading
    this.voxelWorld.setViewDistance(5); // 5 chunks in each direction
    
    // Build the initial chunks around the player
    this.voxelWorld.buildAllChunkMeshes(camera.position.x, camera.position.z);
    
    // Setup chunk loading/unloading based on camera position
    window.addEventListener('keydown', (e) => {
      // Toggle between chunk-based and single mesh rendering with F6
      if (e.key === 'F6') {
        this.toggleChunkRendering();
      }
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 5);
    sunLight.position.set(50, 75, 50);
    sunLight.castShadow = true;
    scene.add(sunLight);

    this.inputHandler = new InputHandler(camera, document.body, { movementSpeed: 25.0 }); // Faster movement to more quickly see chunks loading
    
    // Store references on the Game instance
    this.scene = scene;
    this.camera = camera;
    
    // Flag to enable chunk-based rendering
    this.useChunkRendering = true;
    
    // Last position to check for chunk updates
    this.lastChunkUpdatePosition = {
      x: camera.position.x,
      z: camera.position.z
    };
  }

  createDebugMenu() {
    this.debugMenuElement = document.createElement('div');
    this.debugMenuElement.style.position = 'absolute';
    this.debugMenuElement.style.top = '0';
    this.debugMenuElement.style.left = '0';
    this.debugMenuElement.style.padding = '8px';
    this.debugMenuElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    this.debugMenuElement.style.color = '#fff';
    this.debugMenuElement.style.fontFamily = 'monospace';
    this.debugMenuElement.style.zIndex = '999';
    this.debugMenuElement.style.display = 'none'; // start hidden
    document.body.appendChild(this.debugMenuElement);
  }

  // TOGGLE DEBUG MENU // <-- ADDED
  toggleDebugMenu() {
    this.debugMenuVisible = !this.debugMenuVisible;
    this.debugMenuElement.style.display = this.debugMenuVisible ? 'block' : 'none';
  }

  // Toggle between water shader implementations
  toggleWaterShader() {
    if (!this.voxelWorld || !this.voxelWorld.meshBuilder) return;
    
    // Toggle the flag
    this.voxelWorld.meshBuilder.useAdvancedWaterShader = !this.voxelWorld.meshBuilder.useAdvancedWaterShader;
    
    // Display a message
    const message = document.createElement('div');
    message.textContent = `Water Shader: ${this.voxelWorld.meshBuilder.useAdvancedWaterShader ? 'Advanced' : 'Basic'}`;
    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    message.style.color = 'white';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
    message.style.zIndex = '1000';
    document.body.appendChild(message);
    
    // Remove the message after 2 seconds
    setTimeout(() => {
      document.body.removeChild(message);
    }, 2000);
    
    // Rebuild the mesh with the new shader
    this.voxelWorld.buildCulledMesh();
  }
  
  // Toggle between terrain generation algorithms
  toggleTerrainType() {
    if (!this.voxelWorld) return;
    
    // Switch between the terrain types
    const newTerrainType = this.voxelWorld.terrainType === TERRAIN_TYPE.PERLIN 
      ? TERRAIN_TYPE.DENSITY 
      : TERRAIN_TYPE.PERLIN;
    
    // Update the terrain generator
    this.voxelWorld.setTerrainType(newTerrainType);
    
    // Regenerate terrain around the player
    if (this.camera) {
      this.voxelWorld.updateVisibleChunks(this.camera.position.x, this.camera.position.z);
    }
    
    // Display a message
    const message = document.createElement('div');
    message.textContent = `Terrain Generator: ${newTerrainType === TERRAIN_TYPE.PERLIN ? 'Perlin Heightmap' : 'Density Function'}`;
    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    message.style.color = 'white';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
    message.style.zIndex = '1000';
    document.body.appendChild(message);
    
    // Remove the message after 2 seconds
    setTimeout(() => {
      document.body.removeChild(message);
    }, 2000);
  }

  updateDebugInfo() {
    if (!this.debugMenuVisible) return;  // Only update if visible
    
    // Get renderer info if available
    let calls = 0, triangles = 0, points = 0, lines = 0;
    if (this.renderManager && this.renderManager.renderer) {
      const renderer = this.renderManager.renderer;
      calls = renderer.info.render.calls;
      triangles = renderer.info.render.triangles;
      points = renderer.info.render.points;
      lines = renderer.info.render.lines;
    }
    
    // Get the active water shader type
    const waterShaderType = this.voxelWorld?.meshBuilder?.useAdvancedWaterShader ? 'Advanced' : 'Basic';
    
    // Get terrain generator type
    const terrainType = this.voxelWorld?.terrainType === TERRAIN_TYPE.PERLIN
      ? 'Perlin Heightmap'
      : 'Density Function';
    
    // Get rendering mode
    const renderingMode = this.useChunkRendering ? 'Chunk-Based' : 'Single Mesh';
    
    // Get chunk counts
    const renderedChunks = this.voxelWorld?.meshBuilder?.chunkMeshes.size || 0;
    const totalChunks = this.voxelWorld?.chunkManager?.chunks.size || 0;
    
    // Get view distance
    const viewDistance = this.voxelWorld?.viewDistance || 0;
    
    // Get dynamic loading info
    const dynamicLoading = this.useChunkRendering ? 'ON' : 'OFF';
    
    // Get worker thread stats
    const chunksQueued = this.voxelWorld?.chunkQueue?.length || 0;
    const chunksGenerating = this.voxelWorld?.chunksBeingGenerated?.size || 0;
    const workerCount = this.voxelWorld?.chunkGenManager?.workerCount || 0;
    
    // Get camera position
    const camX = Math.round(this.camera?.position.x || 0);
    const camY = Math.round(this.camera?.position.y || 0);
    const camZ = Math.round(this.camera?.position.z || 0);

    // Get performance metrics
    let chunkGenAvg = 0, chunkGenMax = 0, chunkGenMin = 0, chunkGenCount = 0;
    if (this.voxelWorld?.generationStats && this.voxelWorld.generationStats.totalChunks > 0) {
      chunkGenCount = this.voxelWorld.generationStats.totalChunks;
      chunkGenAvg = (this.voxelWorld.generationStats.totalTime / chunkGenCount).toFixed(2);
      chunkGenMax = this.voxelWorld.generationStats.maxTime.toFixed(2);
      chunkGenMin = this.voxelWorld.generationStats.minTime.toFixed(2);
    }

    let buildAvg = 0, buildMax = 0, buildMin = 0, buildCount = 0, buildLast = 0;
    let workerTime = 0, mainThreadTime = 0, lastWorkerTime = 0, lastMainThreadTime = 0;
    if (this.voxelWorld?.buildStats && this.voxelWorld.buildStats.totalMeshes > 0) {
      buildCount = this.voxelWorld.buildStats.totalMeshes;
      buildAvg = (this.voxelWorld.buildStats.totalTime / buildCount).toFixed(2);
      buildMax = this.voxelWorld.buildStats.maxTime.toFixed(2);
      buildMin = this.voxelWorld.buildStats.minTime.toFixed(2);
      buildLast = this.voxelWorld.buildStats.lastTime.toFixed(2);
      
      // Get worker vs main thread times
      workerTime = this.voxelWorld.buildStats.workerTime || 0;
      mainThreadTime = this.voxelWorld.buildStats.mainThreadTime || 0;
      lastWorkerTime = this.voxelWorld.buildStats.lastWorkerTime || 0;
      lastMainThreadTime = this.voxelWorld.buildStats.lastMainThreadTime || 0;
      
      const workerAvg = buildCount > 0 ? (workerTime / buildCount).toFixed(2) : 0;
      const mainAvg = buildCount > 0 ? (mainThreadTime / buildCount).toFixed(2) : 0;
      
      // Store for display
      workerTime = workerAvg;
      mainThreadTime = mainAvg;
    }

    // Update text (you can add more info as needed)
    this.debugMenuElement.innerHTML = `
      <strong>DEBUG INFO</strong><br/>
      Draw Calls: ${calls}<br/>
      Triangles: ${triangles}<br/>
      Position: ${camX}, ${camY}, ${camZ}<br/>
      Water Shader: ${waterShaderType}<br/>
      Terrain Type: ${terrainType}<br/>
      Rendering: ${renderingMode}<br/>
      Chunks: ${renderedChunks} rendered / ${totalChunks} total<br/>
      View Distance: ${viewDistance} chunks<br/>
      Dynamic Loading: ${dynamicLoading}<br/>
      Workers: ${workerCount} threads<br/>
      Chunks Processing: ${chunksGenerating} generating / ${chunksQueued} queued<br/>
      <strong>Performance (ms):</strong><br/>
      Generation: avg=${chunkGenAvg} min=${chunkGenMin} max=${chunkGenMax} (${chunkGenCount})<br/>
      Mesh Build: avg=${buildAvg} min=${buildMin} max=${buildMax} last=${buildLast} (${buildCount})<br/>
      Worker/Main: worker=${workerTime} main=${mainThreadTime} last=${lastWorkerTime}/${lastMainThreadTime}<br/>
      <small>Press F3 to hide/show debug</small>
      <small>Press F5 to toggle water shader</small>
      <small>Press F6 to toggle chunk rendering</small>
      <small>Press F7 to toggle terrain generator</small>
    `;
  }
  
  // Toggle between chunk-based and single mesh rendering
  toggleChunkRendering() {
    this.useChunkRendering = !this.useChunkRendering;
    
    // Clear all meshes from the scene
    this.voxelWorld.meshes.forEach(mesh => this.scene.remove(mesh));
    this.voxelWorld.meshBuilder._removeAllChunkMeshes(this.scene);
    
    if (this.useChunkRendering) {
      // Build chunk-based meshes
      this.voxelWorld.buildAllChunkMeshes(
        this.camera.position.x, 
        this.camera.position.z
      );
      
      // Display a message
      const message = document.createElement('div');
      message.textContent = 'Chunk-Based Rendering Enabled';
      message.style.position = 'absolute';
      message.style.top = '50%';
      message.style.left = '50%';
      message.style.transform = 'translate(-50%, -50%)';
      message.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      message.style.color = 'white';
      message.style.padding = '10px';
      message.style.borderRadius = '5px';
      message.style.zIndex = '1000';
      document.body.appendChild(message);
      
      setTimeout(() => {
        document.body.removeChild(message);
      }, 2000);
    } else {
      // Build single mesh
      this.voxelWorld.buildCulledMesh();
      
      // Display a message
      const message = document.createElement('div');
      message.textContent = 'Single Mesh Rendering Enabled';
      message.style.position = 'absolute';
      message.style.top = '50%';
      message.style.left = '50%';
      message.style.transform = 'translate(-50%, -50%)';
      message.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      message.style.color = 'white';
      message.style.padding = '10px';
      message.style.borderRadius = '5px';
      message.style.zIndex = '1000';
      document.body.appendChild(message);
      
      setTimeout(() => {
        document.body.removeChild(message);
      }, 2000);
    }
  }

  animate = () => {
    stats.begin();

    const delta = this.clock.getDelta();

    if (this.inputHandler) {
      this.inputHandler.update(delta);
    }
    
    // Update voxel world animations (like water)
    if (this.voxelWorld) {
      this.voxelWorld.update(delta);
      
      // Check if we need to update visible chunks
      if (this.useChunkRendering && this.camera) {
        const camPos = this.camera.position;
        
        // Check if camera has moved a significant distance
        const lastPos = this.lastChunkUpdatePosition;
        const dx = Math.abs(camPos.x - lastPos.x);
        const dz = Math.abs(camPos.z - lastPos.z);
        
        // Update visible chunks more frequently (every 4 units) to make loading/unloading more visible
        if (dx > 4 || dz > 4) {
          // Use the async updateVisibleChunks method - we don't await it to avoid hitching
          // The chunk generation happens in the background and meshes are built when ready
          this.voxelWorld.updateVisibleChunks(camPos.x, camPos.z)
            .then(newChunksRequested => {
              // We can show notifications or update UI here if needed
              if (newChunksRequested > 0) {
                console.log(`Requested ${newChunksRequested} new chunks`);
              }
            })
            .catch(error => {
              console.error('Error updating chunks:', error);
            });
          
          // Update last position immediately 
          this.lastChunkUpdatePosition = {
            x: camPos.x,
            z: camPos.z
          };
          
          // Show visual indication of chunk update in debug mode
          if (this.debugMenuVisible) {
            console.log(`Updating chunks at position: ${Math.round(camPos.x)}, ${Math.round(camPos.z)}`);
            
            // Just briefly flash the debug menu blue to indicate visibility update
            if (this.debugMenuElement) {
              const originalBackground = this.debugMenuElement.style.backgroundColor;
              this.debugMenuElement.style.backgroundColor = 'rgba(50, 100, 150, 0.7)';
              setTimeout(() => {
                this.debugMenuElement.style.backgroundColor = originalBackground;
              }, 200);
            }
          }
        }
      }
    }
    
    if (this.renderManager) {
      this.renderManager.render();
    }
    
    // Update debug info
    this.updateDebugInfo();

    stats.end();
    requestAnimationFrame(this.animate);
  };
};

document.addEventListener('DOMContentLoaded', async () => {
  const game = new Game();
  try {
    await game.initialize();
  } catch (error) {
    console.error('Failed to initialize the game:', error);
  }
});
