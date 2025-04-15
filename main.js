import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

import { TextureManager } from './textureManager.js';
import { InputHandler } from './inputHandler.js'; 
import { VoxelWorld } from './voxelWorld.js';  // <-- import our new class

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
}).slice(10,30);

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
  }

  async initialize() {
    try {
      await this.textures.load();   // Load the atlas
      this.initScene();
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
    camera.position.set(10, 10, 10);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Create the WebGL renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Initialize and generate the voxel world
    this.voxelWorld = new VoxelWorld(scene, this.textures);
    this.voxelWorld.generateTerrain(10);  // or a different size if you want

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 5);
    sunLight.position.set(50, 75, 50);
    sunLight.castShadow = true;
    scene.add(sunLight);

    // Postprocessing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const width = window.innerWidth, height = window.innerHeight;
    const ssaoPass = new SSAOPass(scene, camera, width, height);
    ssaoPass.kernelRadius = 1;
    ssaoPass.minDistance = 0.005;
    ssaoPass.maxDistance = 0.1;
    composer.addPass(ssaoPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.5,
      0.4,
      0.85
    );
    composer.addPass(bloomPass);

    this.inputHandler = new InputHandler(camera, document.body, { movementSpeed: 5.0 });


    // Store references on the Game instance
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.composer = composer;
  }

  setupEventListeners(){
    this.controls = new PointerLockControls(this.camera, document.body);
    let movement = this.movement;

    document.addEventListener('click', () => {
      if (!this.controls.isLocked) {
        this.controls.lock();
      }
    });

    document.addEventListener('keydown', (event) => {
      switch(event.code) {
        case 'KeyW': movement.forward = true; break;
        case 'KeyS': movement.back    = true; break;
        case 'KeyA': movement.left   = true; break;
        case 'KeyD': movement.right  = true; break;
        case 'Space': movement.up    = true; break;
        case 'ShiftLeft': movement.down  = true; break;
      }
    });

    document.addEventListener('keyup', (event) => {
      switch(event.code) {
        case 'KeyW': movement.forward = false; break;
        case 'KeyS': movement.back    = false; break;
        case 'KeyA': movement.left    = false; break;
        case 'KeyD': movement.right   = false; break;
        case 'Space': movement.up     = false; break;
        case 'ShiftLeft': movement.down = false; break;
      }
    });
  }

  animate = () => {
    stats.begin();

    const delta = this.clock.getDelta();

    if (this.inputHandler) {
      this.inputHandler.update(delta);
    }

    this.composer.render(this.scene, this.camera);

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
