import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

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

function loadImages(urls) {
  const promises = urls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous'; // If needed for CORS
      img.onload = () => resolve({ url, img });
      img.onerror = reject;
      img.src = url;
    });
  });
  return Promise.all(promises);
}

function createAtlasCanvas(loadedImages) {
  let totalWidth = 0;
  let maxHeight = 0;

  loadedImages.forEach(({ img }) => {
    totalWidth += img.width;
    maxHeight = Math.max(maxHeight, img.height);
  });

  // Create a canvas of the required size
  const canvas = document.createElement('canvas');
  let hudCanvas = canvas;
  hudCanvas.width = 64;
  hudCanvas.height = 64;
  hudCanvas.style.position = 'absolute';
  hudCanvas.style.top = '10px';
  hudCanvas.style.right = '10px';
  hudCanvas.style.zIndex = '100';
  document.body.appendChild(hudCanvas);

  canvas.width = totalWidth;
  canvas.height = maxHeight;

  // Draw each image onto the canvas
  const ctx = canvas.getContext('2d');

  let currentX = 0;
  const atlasMapping = {}; // We'll store sub-rect info here

  loadedImages.forEach(({ url, img }) => {
    // Draw the image
    ctx.drawImage(img, currentX, 0);

    // Store the normalized UV offsets (0..1) for that image in the atlas
    const u0 = currentX / totalWidth;
    const v0 = 0;
    const u1 = (currentX + img.width) / totalWidth;
    const v1 = img.height / maxHeight;

    atlasMapping[url] = {
      offset: { x: u0, y: v0 },
      size:   { x: (u1 - u0), y: (v1 - v0) }
    };

    // Move the draw cursor over
    currentX += img.width;
  });

  return { canvas, atlasMapping };
}

function createAtlasTexture(canvas) {
  const texture = new THREE.CanvasTexture(canvas);
  // Optionally set some parameters (repeat, minFilter, magFilter, wrapS, wrapT, etc.)
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

function getMaterial(name) {
  return  new THREE.MeshStandardMaterial({ map: textures[name], metalness: 0, roughness: 1 });
}

function getRandomMaterial() {
  console.log(textures);
  const keys = Object.keys(textures);
  const name = keys[Math.floor(Math.random() * keys.length)];
  console.log(name);
  return getMaterial(name);
} // make it work

let textures = null;
load();
function load() {
loadImages(texturePaths)
  .then(loadedImages => {
    console.log(loadedImages);
    // 2) Build the canvas atlas
    const { canvas, atlasMapping } = createAtlasCanvas(loadedImages);

    // 3) Create a texture from the atlas
    const atlasTexture = createAtlasTexture(canvas);

    atlasTexture.magFilter = THREE.NearestFilter;
    atlasTexture.minFilter = THREE.NearestMipmapNearestFilter;
    atlasTexture.colorSpace = THREE.SRGBColorSpace;
    const iceUV = atlasMapping['textures/ice.png'];
       // Texture abstraction for easy access
    function createTextureMap(atlasTexture, atlasMapping) {
        const textures = {};
        
        for (const texturePath in atlasMapping) {
            // Extract the texture name from the path (e.g., 'ice' from 'textures/ice.png')
            const textureName = texturePath.split('/').pop().split('.')[0];
            
            // Create a clone of the atlas texture for each individual texture
            const texture = atlasTexture.clone();
            
            // Set the UV mapping for this specific texture
            const uv = atlasMapping[texturePath];
            texture.offset.set(uv.offset.x, uv.offset.y);
            texture.repeat.set(uv.size.x, uv.size.y);
            
            // Store in our textures map
            textures[textureName] = texture;
        }
        
        return textures;
    }

    textures = createTextureMap(atlasTexture, atlasMapping);

    initScene();
  })
  .catch(err => {
    console.error('Error loading images:', err);
  });
}



function initScene() {
  const speed = 5.0; // Movement speed (units per second)
  // Import needed post-processing classes (this might vary based on your setup)
  const clock = new THREE.Clock(); 

  const particles = [];

  // A helper to create a small cube particle
  function createParticle(position, color=0xffffff) {
    const size = 0.2;
    const geom = new THREE.BoxGeometry(size, size, size);
    const mat = new THREE.MeshBasicMaterial({ color: color });
    const particleMesh = new THREE.Mesh(geom, mat);
    particleMesh.position.copy(position);
    // velocity as a Vector3
    const velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.2,    // random velocity in x
      Math.random() * 0.2 + 0.1,      // upward velocity in y
      (Math.random() - 0.5) * 0.2     // random velocity in z
    );
    // lifespan in seconds
    const life = 1.0 + Math.random() * 1.0;  // live 1-2 seconds
    // store particle info
    particles.push({ mesh: particleMesh, velocity: velocity, life: life });
    scene.add(particleMesh);
  }




  // Create a Three.js scene
  const scene = new THREE.Scene();

  // Set up a camera (fov, aspect ratio, near, far)
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(10, 10, 10);       // position the camera at (x, y, z)
  camera.lookAt(new THREE.Vector3(0, 0, 0)); // look at the center of the scene
  const cubeSize = 1;
  const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
  //const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // as a demonstration, create a simple voxel world using the cube mesh
  // Create a simple voxel world
  const worldSize = 10; // 5x5x5 voxel world
  const voxels = [];

  // Function to create a voxel at specified position
  function createVoxel(x, y, z) {
      const voxel = new THREE.Mesh(cubeGeo, getRandomMaterial());
      
      // Position the voxel
      voxel.position.set(x * cubeSize, y * cubeSize, z * cubeSize);
      
      scene.add(voxel);
      voxels.push(voxel);
      return voxel;
  }

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

  const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
  sunLight.position.set(50,75,50);
  sunLight.castShadow = true;
  scene.add(sunLight);

  const renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // Enable gamma correction for more realistic lighting (optional but recommended)
  renderer.outputColorSpace = THREE.SRGBColorSpace; // instead of outputEncoding

  // Create EffectComposer and passes
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  // Set up SSAO pass for ambient occlusion
  const width = window.innerWidth, height = window.innerHeight;
  const ssaoPass = new SSAOPass(scene, camera, width, height);
  ssaoPass.kernelRadius = 16;       // sample radius, higher=more pronounced AO
  ssaoPass.minDistance = 0.005;
  ssaoPass.maxDistance = 0.1;
  composer.addPass(ssaoPass);

  const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 0.5, 0.4, 0.85);
  composer.addPass(bloomPass);

  const areaSize = 10;
  for(let i=0; i<20; i++){
    const x = Math.random() * areaSize;
    const y = Math.random() * 5 + 1;        // some height between 1 and 6
    const z = Math.random() * areaSize;
    createParticle(new THREE.Vector3(x, y, z), 0xffffff);
  }

  particles.forEach(p => { p.velocity.multiplyScalar(0.2); });

  // Initialize pointer lock controls
  const controls = new PointerLockControls(camera, document.body);

  // Add a click listener to lock the pointer and enable FPS control
  document.addEventListener('click', () => {
    if (!controls.isLocked) {
      controls.lock();
    }
  });

  const movement = { forward: false, back: false, left: false, right: false, up: false, down: false };


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
      case 'KeyW': movement.forward = false; break;
      case 'KeyS': movement.back    = false; break;
      case 'KeyA': movement.left   = false; break;
      case 'KeyD': movement.right  = false; break;
      case 'Space': movement.up    = false; break;
      case 'ShiftLeft': movement.down  = false; break;
    }
  });

  function animate() {
    stats.begin();
    const delta = clock.getDelta(); 
    for(let i = particles.length - 1; i >= 0; i--){
      const p = particles[i];
      p.mesh.position.addScaledVector(p.velocity, delta * 60); 
      p.life -= delta;
      if(p.life <= 0){
        scene.remove(p.mesh);
        particles.splice(i, 1);
      }
    }
   
    // Update controls/camera movement
    if (controls.isLocked) {
      if (movement.forward) controls.moveForward(speed * delta);
      if (movement.back)    controls.moveForward(-speed * delta);
      if (movement.left)    controls.moveRight(-speed * delta);
      if (movement.right)   controls.moveRight(speed * delta);
      if (movement.up)      camera.position.y += speed * delta;
      if (movement.down)    camera.position.y -= speed * delta;
    }

    requestAnimationFrame(animate);
    composer.render(scene, camera);
    stats.end();
  }
  animate();
}
