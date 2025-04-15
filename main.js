import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

import { TextureManager } from './textureManager.js'


import Stats from 'stats.js';
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

const meta = import.meta.glob('/public/textures/*.png', {
  as: 'url',
  eager: true
});

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
    this.particles = [];
    this.movement = { forward: false, back: false, left: false, right: false, up: false, down: false };
  }

  async initialize() {
    try {
      await this.textures.load();
      this.initScene();
      this.setupEventListeners();
      this.animate();
    } catch (error) {
      console.error('Error in init:', error);
    }
  }

  initScene(){
    // Create a Three.js scene
    const scene = new THREE.Scene();

    // Set up a camera (fov, aspect ratio, near, far)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(10, 10, 10);       // position the camera at (x, y, z)
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // look at the center of the scene

    // Create the WebGL renderer and add its canvas to the document
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.outputColorSpace = THREE.SRGBColorSpace; 
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const cubeSize = 1;
    const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    // Create a simple voxel world
    const worldSize = 10; // 5x5x5 voxel world
    const voxels = [];

    // Function to create a voxel at specified position
    const createVoxel = function(x, y, z) {
        const voxel = new THREE.Mesh(cubeGeo, this.textures.getRandomMaterial());
        
        // Position the voxel
        voxel.position.set(x * cubeSize, y * cubeSize, z * cubeSize);
        
        scene.add(voxel);
        voxels.push(voxel);
        return voxel;
    }.bind(this);

    // Create some simple terrain
    for (let x = -worldSize; x <= worldSize; x++) {
        for (let z = -worldSize; z <= worldSize; z++) {
            // Create ground layer
            createVoxel(x, -1, z); // Brown for ground
            
            // Randomly add some blocks above ground
            if (Math.random() > 0.8) {
                const height = Math.floor(Math.random() * 3) + 1;
                for (let y = 0; y < height; y++) {
                    // Different colors based on height
                    let color;
                    if (y === height - 1) {
                        color = 0x00FF00; // Green for top
                    } else {
                        color = 0x808080; // Gray for middle
                    }
                    createVoxel(x, y, z);
                }
            }
        }
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 5);
    sunLight.position.set(50,75,50);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Set up SSAO pass for ambient occlusion
    const width = window.innerWidth, height = window.innerHeight;
    const ssaoPass = new SSAOPass(scene, camera, width, height);
    ssaoPass.kernelRadius = 1;       // sample radius, higher=more pronounced AO
    ssaoPass.minDistance = 0.005;
    ssaoPass.maxDistance = 0.1;
    composer.addPass(ssaoPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 0.5, 0.4, 0.85);
    composer.addPass(bloomPass);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.composer = composer;
  };

  setupEventListeners(){
    // Initialize pointer lock controls
    this.controls = new PointerLockControls(this.camera, document.body);
    let movement = this.movement;
    document.addEventListener('click', () => {
      if (!this.controls.isLocked) {
        this.controls.lock();
      }
    });



    document.addEventListener('keydown', (event) => {
      console.log(event);
      switch(event.code) {
        case 'KeyW': movement.forward = true; break;
        case 'KeyS': movement.back    = true; break;
        case 'KeyA': movement.left   = true; break;
        case 'KeyD': movement.right  = true; break;
        case 'Space': movement.up    = true; break;      // jump/fly up
        case 'ShiftLeft': movement.down  = true; break;  // crouch/fly down
      }
    });
    document.addEventListener('keyup', (event) => {
      switch(event.code) {
        case 'KeyW': this.movement.forward = false; break;
        case 'KeyS': movement.back    = false; break;
        case 'KeyA': movement.left   = false; break;
        case 'KeyD': movement.right  = false; break;
        case 'Space': movement.up    = false; break;
        case 'ShiftLeft': movement.down  = false; break;
      }
    });
  };

  animate = () => {  // Use arrow function to preserve 'this' context
    stats.begin();
    
    // Update controls/camera movement
    const speed = 5.0;
    const delta = this.clock.getDelta(); 
    
    if (this.controls.isLocked) {
      if (this.movement.forward) this.controls.moveForward(speed * delta);
      if (this.movement.back) this.controls.moveForward(-speed * delta);
      if (this.movement.left) this.controls.moveRight(-speed * delta);
      if (this.movement.right) this.controls.moveRight(speed * delta);
      if (this.movement.up) this.camera.position.y += speed * delta;
      if (this.movement.down) this.camera.position.y -= speed * delta;
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
