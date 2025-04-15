import * as THREE from 'three';

// --- Three.js Scene Setup ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xAAAAFF);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.set(2, 2, 5);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// --- Geometry and ShaderMaterial ---
const waterGeometry = new THREE.BoxGeometry(1, 1, 1);
const waterMaterial = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0.0 },
        waterTexture: { value: null }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
    uniform sampler2D waterTexture;
    uniform float time;
    varying vec2 vUv;
    void main() {
      vec2 uv = vUv;  
      float frequency = 0.5;
      float speed = 1.0;
      float amplitude = 0.2;
      float wave = (sin(uv.x * frequency + time * speed) * amplitude) + tan(uv.y) ;
      uv.y += sin(wave);
      uv.x += cos(wave);
      vec4 texColor = texture2D(waterTexture, uv);
      texColor.a = 0.8;
      gl_FragColor = texColor;
    }
    `,
    /*
    fragmentShader: `
        uniform float time;
        uniform sampler2D waterTexture;
        varying vec2 vUv;
        void main() {
            vec2 uv = vUv;
            float frequency = 1.0;
            float speed = 2.0;
            float amplitude = 0.2;
            float wave = sin(uv.x * frequency + time * speed) * amplitude;
            uv.y += wave;
            vec4 texColor = texture2D(waterTexture, uv);
            texColor.a = 0.3;
            gl_FragColor = texColor;
        }
    `,
    */
    transparent: true,
    depthWrite: false
    // side: THREE.DoubleSide // enable if needed
});
const waterMesh = new THREE.Mesh(waterGeometry, waterMaterial);
scene.add(waterMesh);
const waterGeometry2 = new THREE.BoxGeometry(2, 1, 1);
scene.add(new THREE.Mesh(waterGeometry2, waterMaterial));
const waterGeometry3 = new THREE.BoxGeometry(3, 1, 1);
scene.add(new THREE.Mesh(waterGeometry3, waterMaterial));
const waterGeometry4 = new THREE.BoxGeometry(4, 1, 1);
scene.add(new THREE.Mesh(waterGeometry4, waterMaterial));
// --- Load Texture ---
const loader = new THREE.TextureLoader();
loader.load('public/textures/ice.png', function(tex) {
    console.log(tex);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 1);
    // tex.magFilter = THREE.NearestFilter; tex.minFilter = THREE.NearestFilter; // (optional for pixelated look)
    waterMaterial.uniforms.waterTexture.value = tex;
});

// --- Animation Loop ---
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    waterMaterial.uniforms.time.value = clock.getElapsedTime();  // update time uniform&#8203;:contentReference[oaicite:8]{index=8}
    renderer.render(scene, camera);
}
animate();
