import * as THREE from 'three';

// Create a function to create an advanced water shader
export function createAdvancedWaterMaterial(atlasTexture, uvMapping) {
    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            tAtlas: { value: atlasTexture },
            uvOffset: { value: new THREE.Vector2(uvMapping.offset.x, uvMapping.offset.y) },
            uvRepeat: { value: new THREE.Vector2(uvMapping.repeat.x, uvMapping.repeat.y) },
            rippleStrength: { value: 0.15 },  // Control ripple intensity
            rippleSpeed: { value: 1.0 },      // Control ripple animation speed
            rippleScale: { value: 20.0 }      // Control ripple size/frequency
        },
        vertexShader: `
            varying vec2 vUv;
            uniform float time;
            varying float vFace;
            varying vec3 vPosition;
            
            void main() {
                vUv = uv;
                vPosition = position;


                 // Determine which face this vertex belongs to
                // based on normal direction
                vec3 absNormal = abs(normal);
                if(absNormal.x > 0.5) vFace = 0.0; // +/- X face
                else if(absNormal.y > 0.5) vFace = 1.0; // +/- Y face
                else vFace = 2.0; // +/- Z face
                
                // Add simple vertex displacement
                vec3 pos = position;
                // pos.y += sin(position.x * 2.0 + time) * 0.05;
                // pos.y += cos(position.z * 2.0 + time) * 0.05;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `,

        // Modify your fragment shader to show texture atlas UVs
        fragmentShader: `
            uniform sampler2D tAtlas;
            uniform float time;
            uniform vec2 uvOffset;
            uniform vec2 uvRepeat;
            varying vec2 vUv;
            varying float vFace;
            varying vec3 vPosition;

            uniform float rippleStrength;
            uniform float rippleSpeed;
            uniform float rippleScale;

            // Function to generate ripple pattern
            float ripple(vec2 pos, float t) {
              float d = length(pos);
              float frequency = rippleScale;
              
              // Create multiple ripple waves with different frequencies and phases
              float wave1 = sin(d * frequency - t * rippleSpeed * 1.0) * 0.5 + 0.5;
              float wave2 = sin(d * frequency * 0.7 - t * rippleSpeed * 0.8 + 1.0) * 0.5 + 0.5;
              float wave3 = sin(d * frequency * 1.3 - t * rippleSpeed * 1.2 + 2.0) * 0.5 + 0.5;
              
              // Combine waves and apply distance falloff
                return (wave1 * 0.6 + wave2 * 0.3 + wave3 * 0.1) * max(0.0, 1.0 - d * 0.8);
            }

            
            void main() {
                // Calculate atlas UVs
                vec2 atlasUv = vec2(
                    uvOffset.x + vUv.x,
                    uvOffset.y + vUv.y
                );
                
                vec4 texColor = texture2D(tAtlas, atlasUv);
                // Calculate ripple effect
                // Use world XZ position for top faces (horizontal water surfaces)
                // and appropriate coordinates for side faces
                vec2 rippleCoord;
                if (vFace == 1.0) {
                    // Top/bottom faces - use XZ coordinates for ripples
                    rippleCoord = vPosition.xz * 0.5;
                } else if (vFace == 0.0) {
                    // X faces - use YZ coordinates
                    rippleCoord = vPosition.yz * 0.5;
                } else {
                    // Z faces - use XY coordinates
                    rippleCoord = vPosition.xy * 0.5;
                }

                float rippleEffect = ripple(rippleCoord, time);
                // Create a bluish-white highlight color for the ripples
                vec3 rippleColor = vec3(0.7, 0.85, 1.0);
                
                // Add ripple effect to the texture color (additive blending)
                vec3 finalColor = texColor.rgb + rippleColor * rippleEffect * rippleStrength;
                
                gl_FragColor = vec4(finalColor, texColor.a);


                //gl_FragColor = texColor; 
            }
        `,


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
                
                gl_FragColor = waterColor;
            }
        `,
        transparent: true,
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
