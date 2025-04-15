import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

import { TextureManager } from './textureManager.js';
import { InputHandler } from './inputHandler.js'; 
import { VoxelWorld } from './voxelWorld.js';  // <-- import our new class
import { RenderManager } from './renderManager.js';

import Stats from 'stats.js';
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

const meta = import.meta.glob('/public/textures/*.png', {
  as: 'url',
  eager: true
});

// Adjust the slice if you want more or fewer textures
let texturePaths = Object.keys(meta).map(path => {
  const filename = path;
  return filename;
}).slice(290,300);

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

    this.debugMenuVisible = false;
    this.debugMenuElement = null;
  }

  async initialize() {
    try {
      await this.textures.load();   // Load the atlas
      this.initScene();
      this.createDebugMenu();
      this.animate();
    } catch (error) {
      console.error('Error in init:', error);
    }
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

    // Initialize and generate the voxel world
    this.voxelWorld = new VoxelWorld(scene, this.textures);
    this.voxelWorld.generateTerrain(20);  // or a different size if you want
    this.voxelWorld.buildCulledMesh();

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 5);
    sunLight.position.set(50, 75, 50);
    sunLight.castShadow = true;
    scene.add(sunLight);

    this.inputHandler = new InputHandler(camera, document.body, { movementSpeed: 5.0 });


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
