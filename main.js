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
import { Profiler } from './profiler.js';







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



// Create a mapping of texture paths to URLs for proper name extraction
const textureEntries = Object.entries(meta)            // [ [key , value], ... ]
  .filter(([path /* key */, _url]) => isValidTexture(path))
  .map(([ path , url /* value */]) => {
    console.log(`Loading texture: ${path} -> ${url}`);
    return { path, url };
  });

console.log(`Found ${textureEntries.length} valid textures to load:`, textureEntries);


export class Game {
  constructor() {
    this.textures = new TextureManager();
    this.textures.setTextureEntries(textureEntries);
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
    
    // Initialize comprehensive profiler
    this.profiler = new Profiler();

    this.debugMenuVisible = false;
    this.debugMenuElement = null;
    
    // Help menu for keyboard controls
    this.helpMenuVisible = false;
    this.helpMenuElement = null;
    
    // Initialize a toggle for the debug menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F3') {
        this.toggleDebugMenu();
      }
      if (e.key === 'h' || e.key === 'H') {
        this.toggleHelpMenu();
      }
      if (e.key === 'Escape' && this.helpMenuVisible) {
        this.toggleHelpMenu();
      }
    });
  }

  async initialize() {
    try {
      await this.textures.load();   // Load the atlas
      
      // Create and initialize the voxel world (needed for the block registry)
      this.voxelWorld = new VoxelWorld(null, this.textures, TERRAIN_TYPE.PERLIN, this.profiler);
      
      // Create texture debugger after textures are loaded
      this.textureDebugger = new TextureDebugger(this.textures, this.voxelWorld.blockRegistry);
      this.textureDebugger.initialize();
      
      this.initScene();
      this.createDebugMenu();
      this.createHelpMenu();
      this.createHelpHint();
      
      // Show debug menu by default so player can see worker thread status
      this.toggleDebugMenu();
      
      // Show a brief welcome message about the help system
      this.showWelcomeMessage();
      
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
        if (e.key === 'F8') {
          this.profiler.toggleRecording();
        }
        if (e.key === 'F9') {
          this.profiler.captureWebGLFrame();
        }
        if (e.key === 'F10') {
          this.profiler.setBaseline();
        }
        if (e.key === 'F11') {
          this.profiler.generateReport();
        }
        if (e.key === 'F12') {
          this.profiler.exportData();
        }
      });
      
      // Add window unload handler to clean up workers
      window.addEventListener('beforeunload', () => {
        if (this.voxelWorld) {
          this.voxelWorld.cleanup();
        }
        if (this.profiler) {
          this.profiler.cleanup();
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

  createHelpMenu() {
    this.helpMenuElement = document.createElement('div');
    this.helpMenuElement.style.position = 'fixed';
    this.helpMenuElement.style.top = '50%';
    this.helpMenuElement.style.left = '50%';
    this.helpMenuElement.style.transform = 'translate(-50%, -50%)';
    this.helpMenuElement.style.padding = '20px';
    this.helpMenuElement.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    this.helpMenuElement.style.color = '#fff';
    this.helpMenuElement.style.fontFamily = 'monospace';
    this.helpMenuElement.style.fontSize = '14px';
    this.helpMenuElement.style.zIndex = '10002';
    this.helpMenuElement.style.borderRadius = '10px';
    this.helpMenuElement.style.border = '2px solid #555';
    this.helpMenuElement.style.maxWidth = '600px';
    this.helpMenuElement.style.maxHeight = '80vh';
    this.helpMenuElement.style.overflow = 'auto';
    this.helpMenuElement.style.display = 'none'; // start hidden
    this.helpMenuElement.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.8)';
    
    this.helpMenuElement.innerHTML = `
      <div style="position: relative;">
        <button id="helpCloseBtn" style="position: absolute; top: -10px; right: -10px; background: #f44336; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center; z-index: 10003;">×</button>
        <div style="text-align: center; margin-bottom: 15px;">
          <h2 style="color: #4CAF50; margin: 0 0 5px 0;">🎮 Voxel Engine Controls</h2>
          <p style="margin: 0; color: #aaa; font-size: 12px;">Press H or ESC to toggle this help menu</p>
        </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h3 style="color: #FFA726; margin: 0 0 10px 0; border-bottom: 1px solid #555; padding-bottom: 5px;">🔧 Debug & Info</h3>
          <div style="line-height: 1.6;">
            <div><span style="color: #64B5F6; font-weight: bold;">F3</span> - Toggle debug overlay</div>
            <div><span style="color: #64B5F6; font-weight: bold;">H</span> - Toggle this help menu</div>
          </div>
          
          <h3 style="color: #FFA726; margin: 15px 0 10px 0; border-bottom: 1px solid #555; padding-bottom: 5px;">🌍 World Controls</h3>
          <div style="line-height: 1.6;">
            <div><span style="color: #64B5F6; font-weight: bold;">F1</span> - Toggle terrain generator</div>
            <div><span style="color: #64B5F6; font-weight: bold;">F4</span> - Rebuild world with debugger settings</div>
            <div><span style="color: #64B5F6; font-weight: bold;">F5</span> - Toggle water shader</div>
            <div><span style="color: #64B5F6; font-weight: bold;">F6</span> - Toggle chunk rendering</div>
          </div>
        </div>
        
        <div>
          <h3 style="color: #FFA726; margin: 0 0 10px 0; border-bottom: 1px solid #555; padding-bottom: 5px;">📊 Profiler Controls</h3>
          <div style="line-height: 1.6;">
            <div><span style="color: #64B5F6; font-weight: bold;">F8</span> - Toggle profiler recording</div>
            <div><span style="color: #64B5F6; font-weight: bold;">F9</span> - Capture WebGL frame</div>
            <div><span style="color: #64B5F6; font-weight: bold;">F10</span> - Set performance baseline</div>
            <div><span style="color: #64B5F6; font-weight: bold;">F11</span> - Generate performance report</div>
            <div><span style="color: #64B5F6; font-weight: bold;">F12</span> - Export profiler data</div>
          </div>
          
          <h3 style="color: #FFA726; margin: 15px 0 10px 0; border-bottom: 1px solid #555; padding-bottom: 5px;">🕹️ Movement</h3>
          <div style="line-height: 1.6;">
            <div><span style="color: #64B5F6; font-weight: bold;">WASD</span> - Move around</div>
            <div><span style="color: #64B5F6; font-weight: bold;">Mouse</span> - Look around</div>
            <div><span style="color: #64B5F6; font-weight: bold;">Space</span> - Move up</div>
            <div><span style="color: #64B5F6; font-weight: bold;">Shift</span> - Move down</div>
          </div>
        </div>
      </div>
      
      <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #555; text-align: center;">
        <h3 style="color: #FFA726; margin: 0 0 10px 0;">📈 Performance Monitoring</h3>
        <div style="font-size: 12px; color: #aaa; line-height: 1.5;">
          <p style="margin: 5px 0;">• <strong>Top-left panels:</strong> Real-time FPS, frame time, and memory usage</p>
          <p style="margin: 5px 0;">• <strong>Top-right GUI:</strong> Runtime profiler controls and performance thresholds</p>
          <p style="margin: 5px 0;">• <strong>Performance alerts:</strong> Automatic notifications appear on the right side</p>
          <p style="margin: 5px 0;">• <strong>Debug overlay (F3):</strong> Detailed chunk, rendering, and worker statistics</p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #555;">
        <span style="color: #81C784; font-size: 12px;">✨ Tip: Move around to see dynamic chunk loading in action! ✨</span>
      </div>
      </div>
    `;
    
    document.body.appendChild(this.helpMenuElement);
    
    // Add close button functionality
    this.helpMenuElement.querySelector('#helpCloseBtn').addEventListener('click', () => {
      this.toggleHelpMenu();
    });
  }

  createHelpHint() {
    const helpHint = document.createElement('div');
    helpHint.style.position = 'fixed';
    helpHint.style.bottom = '20px';
    helpHint.style.left = '20px';
    helpHint.style.padding = '8px 12px';
    helpHint.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
    helpHint.style.color = '#fff';
    helpHint.style.fontFamily = 'monospace';
    helpHint.style.fontSize = '12px';
    helpHint.style.borderRadius = '5px';
    helpHint.style.zIndex = '10001';
    helpHint.style.border = '1px solid rgba(255, 255, 255, 0.3)';
    helpHint.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
    helpHint.style.cursor = 'pointer';
    helpHint.style.transition = 'all 0.2s ease';
    helpHint.innerHTML = '❓ Press <strong>H</strong> for help';
    
    // Add hover effect
    helpHint.addEventListener('mouseenter', () => {
      helpHint.style.backgroundColor = 'rgba(76, 175, 80, 1)';
      helpHint.style.transform = 'scale(1.05)';
    });
    
    helpHint.addEventListener('mouseleave', () => {
      helpHint.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
      helpHint.style.transform = 'scale(1)';
    });
    
    // Click to open help
    helpHint.addEventListener('click', () => {
      this.toggleHelpMenu();
    });
    
    document.body.appendChild(helpHint);
  }

  showWelcomeMessage() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.style.position = 'fixed';
    welcomeMessage.style.top = '50%';
    welcomeMessage.style.left = '50%';
    welcomeMessage.style.transform = 'translate(-50%, -50%)';
    welcomeMessage.style.padding = '20px';
    welcomeMessage.style.backgroundColor = 'rgba(76, 175, 80, 0.95)';
    welcomeMessage.style.color = 'white';
    welcomeMessage.style.fontFamily = 'monospace';
    welcomeMessage.style.fontSize = '16px';
    welcomeMessage.style.borderRadius = '10px';
    welcomeMessage.style.zIndex = '10003';
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.border = '2px solid rgba(255, 255, 255, 0.3)';
    welcomeMessage.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.8)';
    welcomeMessage.style.animation = 'fadeInOut 4s ease-in-out forwards';
    
    welcomeMessage.innerHTML = `
      <div>
        <h3 style="margin: 0 0 10px 0; color: white;">🎮 Welcome to Voxel Engine!</h3>
        <p style="margin: 0 0 10px 0; font-size: 14px;">Press <strong>H</strong> anytime for keyboard controls</p>
        <p style="margin: 0; font-size: 12px; opacity: 0.8;">This message will disappear in a few seconds...</p>
      </div>
    `;
    
    // Add CSS animation keyframes if not already added
    if (!document.getElementById('welcomeAnimationStyle')) {
      const style = document.createElement('style');
      style.id = 'welcomeAnimationStyle';
      style.textContent = `
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(welcomeMessage);
    
    // Remove the message after animation completes
    setTimeout(() => {
      if (welcomeMessage.parentNode) {
        welcomeMessage.parentNode.removeChild(welcomeMessage);
      }
    }, 4000);
  }

  // TOGGLE DEBUG MENU // <-- ADDED
  toggleDebugMenu() {
    this.debugMenuVisible = !this.debugMenuVisible;
    this.debugMenuElement.style.display = this.debugMenuVisible ? 'block' : 'none';
  }

  // TOGGLE HELP MENU
  toggleHelpMenu() {
    this.helpMenuVisible = !this.helpMenuVisible;
    this.helpMenuElement.style.display = this.helpMenuVisible ? 'block' : 'none';
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

    // Update text with only debug info (performance metrics moved to profiler)
    this.debugMenuElement.innerHTML = `
      <strong>DEBUG INFO</strong><br/>
      Position: ${camX}, ${camY}, ${camZ}<br/>
      Water Shader: ${waterShaderType}<br/>
      Terrain Type: ${terrainType}<br/>
      Rendering: ${renderingMode}<br/>
      Chunks: ${renderedChunks} rendered / ${totalChunks} total<br/>
      View Distance: ${viewDistance} chunks<br/>
      Dynamic Loading: ${dynamicLoading}<br/>
      Workers: ${workerCount} threads<br/>
      Chunks Processing: ${chunksGenerating} generating / ${chunksQueued} queued<br/>
      <small>Press <strong>H</strong> for controls help</small>
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
    // Begin profiling
    this.profiler.begin();

    const delta = this.clock.getDelta();

    // Begin update timing
    this.profiler.beginUpdate();

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
    
    // Update debug info
    this.updateDebugInfo();

    // End update timing
    this.profiler.endUpdate();
    
    if (this.renderManager) {
      // Begin render timing
      this.profiler.beginRender();
      
      // Reset renderer info before rendering to get accurate counts
      this.renderManager.renderer.info.reset();
      this.renderManager.render();
      
      // End render timing
      this.profiler.endRender();
      
      // Add renderer metrics to profiler after rendering
      this.profiler.addRendererMetrics(this.renderManager.renderer);
    }

    // End profiling
    this.profiler.end();
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
