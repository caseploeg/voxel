import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

import { TextureManager } from './textureManager.js';
import { InputHandler } from './inputHandler.js'; 
import { VoxelWorld } from './voxelWorld.js';
import { RenderManager } from './renderManager.js';
import { TextureDebugger } from './textureDebugger.js';

import Stats from 'stats.js';
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

const meta = import.meta.glob('/public/textures/*.png', {
  as: 'url',
  eager: true
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
  //'water', 'lava', 'snow', 'ice',
  
  // Additional blocks - add keywords as needed
  //'wool', 'clay'
  
  // Add more patterns as needed
];


// Helper to check if a texture should be loaded
const isValidTexture = (path) => {
  return validBlockPatterns.some(pattern => path.includes(pattern));
};

// Select a reasonable subset of textures for initial load
let texturePaths = Object.keys(meta)
  .filter(isValidTexture)
  .map(path => path);

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
      
      // Setup keyboard controls for texture debugger
      window.addEventListener('keydown', (e) => {
        if (e.key === 'F4') {
          this.rebuildWorldWithDebuggerSettings();
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

    // Set up a camera (fov, aspect ratio, near, far)
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth/window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(10, 50, 10);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.renderManager = new RenderManager(scene, camera);

    // Update the scene reference on the voxel world (which was created earlier)
    this.voxelWorld.scene = scene;
    
    // Generate the terrain and build the mesh
    this.voxelWorld.generateTerrain(20);  // or a different size if you want
    this.voxelWorld.buildCulledMesh();

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 5);
    sunLight.position.set(50, 75, 50);
    sunLight.castShadow = true;
    scene.add(sunLight);

    this.inputHandler = new InputHandler(camera, document.body, { movementSpeed: 50.0 });


    // Store references on the Game instance
    this.scene = scene;
    this.camera = camera;
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

  updateDebugInfo() {
    if (!this.debugMenuVisible) return;  // Only update if visible
    const calls = this.renderer.info.render.calls;
    const triangles = this.renderer.info.render.triangles;
    const points = this.renderer.info.render.points;
    const lines = this.renderer.info.render.lines;

    // Update text (you can add more info as needed)
    this.debugMenuElement.innerHTML = `
      <strong>DEBUG INFO</strong><br/>
      Draw Calls: ${calls}<br/>
      Triangles: ${triangles}<br/>
      Lines: ${lines}<br/>
      Points: ${points}
    `;
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
    }
    
    if (this.renderManager) {
      this.renderManager.render();
    }

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
