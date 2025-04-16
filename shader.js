import * as THREE from 'three';

// Create a function to create an advanced water shader
export function createAdvancedWaterMaterial(atlasTexture, uvMapping) {
    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            tAtlas: { value: atlasTexture },
            uvOffset: { value: new THREE.Vector2(uvMapping.offset.x, uvMapping.offset.y) },
            uvRepeat: { value: new THREE.Vector2(uvMapping.repeat.x, uvMapping.repeat.y) }
        },
        vertexShader: `
            varying vec2 vUv;
            uniform float time;
            
            void main() {
                vUv = uv;
                
                // Add simple vertex displacement
                vec3 pos = position;
                pos.y += sin(position.x * 2.0 + time) * 0.05;
                pos.y += cos(position.z * 2.0 + time) * 0.05;
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `,
        fragmentShader: `
            uniform sampler2D tAtlas;
            uniform float time;
            uniform vec2 uvOffset;
            uniform vec2 uvRepeat;
            varying vec2 vUv;
            
            void main() {
                // Sample from the atlas with correct UV mapping
                vec2 atlasUv = vec2(
                    uvOffset.x + vUv.x * uvRepeat.x,
                    uvOffset.y + vUv.y * uvRepeat.y
                );
                
                // Advanced water distortion effect
                float frequency = 0.5;
                float speed = 1.0;
                float amplitude = 0.2;
                float wave = (sin(vUv.x * frequency + time * speed) * amplitude) + tan(vUv.y * 0.1);
                
                vec2 distortedUv = atlasUv;
                distortedUv.y += sin(wave) * 0.05;
                distortedUv.x += cos(wave) * 0.05;
                
                vec4 texColor = texture2D(tAtlas, distortedUv);
                
                // Add blue tint and transparency
                vec4 waterColor = vec4(0.1, 0.5, 0.8, 0.8);
                vec4 finalColor = mix(texColor, waterColor, 0.6);
                finalColor.a = 0.8;  // Set transparency
                
                gl_FragColor = finalColor;
            }
        `,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide
    });
    
    return material;
}

// Only create the demo scene if this is the main module (not imported)
if (import.meta.main || 
    (typeof import.meta.url === 'string' && 
     import.meta.url === window.location.href.replace('file://', '').replace(/\/index.html.*$/, '/shader.js'))) {
    console.log('Running shader.js as standalone - creating demo scene');
    createShaderDemo();
}

// Create a small demo scene for testing
function createShaderDemo() {
    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xAAAAFF);
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
    camera.position.set(2, 2, 5);
    camera.lookAt(0, 0, 0);
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // Create a temporary material with a placeholder texture
    const tempMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            tAtlas: { value: null },
            uvOffset: { value: new THREE.Vector2(0, 0) },
            uvRepeat: { value: new THREE.Vector2(1, 1) }
        },
        vertexShader: `
            varying vec2 vUv;
            uniform float time;
            
            void main() {
                vUv = uv;
                
                // Add simple vertex displacement
                vec3 pos = position;
                pos.y += sin(position.x * 2.0 + time) * 0.05;
                pos.y += cos(position.z * 2.0 + time) * 0.05;
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `,
        fragmentShader: `
            uniform sampler2D tAtlas;
            uniform float time;
            uniform vec2 uvOffset;
            uniform vec2 uvRepeat;
            varying vec2 vUv;
            
            void main() {
                // Sample from the atlas with correct UV mapping
                vec2 atlasUv = vec2(
                    uvOffset.x + vUv.x * uvRepeat.x,
                    uvOffset.y + vUv.y * uvRepeat.y
                );
                
                // Advanced water distortion effect
                float frequency = 0.5;
                float speed = 1.0;
                float amplitude = 0.2;
                float wave = (sin(vUv.x * frequency + time * speed) * amplitude) + tan(vUv.y * 0.1);
                
                vec2 distortedUv = atlasUv;
                distortedUv.y += sin(wave) * 0.05;
                distortedUv.x += cos(wave) * 0.05;
                
                vec4 texColor = texture2D(tAtlas, distortedUv);
                
                // Add blue tint and transparency if texture is not loaded yet
                if (length(texColor.rgb) < 0.1) {
                    texColor = vec4(0.2, 0.6, 0.9, 0.8);
                }
                
                // Add blue tint and transparency
                vec4 waterColor = vec4(0.1, 0.5, 0.8, 0.8);
                vec4 finalColor = mix(texColor, waterColor, 0.6);
                finalColor.a = 0.8;  // Set transparency
                
                gl_FragColor = finalColor;
            }
        `,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide
    });
    
    // Create water blocks with different sizes
    const waterGeometry = new THREE.BoxGeometry(1, 1, 1);
    const waterMesh = new THREE.Mesh(waterGeometry, tempMaterial);
    scene.add(waterMesh);
    
    const waterGeometry2 = new THREE.BoxGeometry(2, 1, 1);
    waterGeometry2.translate(0, 0, 2);
    scene.add(new THREE.Mesh(waterGeometry2, tempMaterial));
    
    const waterGeometry3 = new THREE.BoxGeometry(3, 1, 1);
    waterGeometry3.translate(0, 0, 4);
    scene.add(new THREE.Mesh(waterGeometry3, tempMaterial));
    
    const waterGeometry4 = new THREE.BoxGeometry(4, 1, 1);
    waterGeometry4.translate(0, 0, 6);
    scene.add(new THREE.Mesh(waterGeometry4, tempMaterial));
    
    // Add light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 2, 3);
    scene.add(light);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Load texture
    const loader = new THREE.TextureLoader();
    loader.load('public/textures/ice.png', function(tex) {
        console.log(tex);
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(1, 1);
        tempMaterial.uniforms.tAtlas.value = tex;
    });
    
    // Animation loop
    const clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        tempMaterial.uniforms.time.value = clock.getElapsedTime();
        renderer.render(scene, camera);
    }
    animate();
}
