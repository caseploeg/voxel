import * as THREE from 'three';

// Create a function to create an advanced water shader
export function createAdvancedWaterMaterial(atlasTexture, uvMapping) {
    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            tAtlas: { value: atlasTexture },
            uvOffset: { value: new THREE.Vector2(uvMapping.offset.x, uvMapping.offset.y) },
            uvRepeat: { value: new THREE.Vector2(uvMapping.repeat.x, uvMapping.repeat.y) },
            rippleStrength: { value: 0.3 },  // Increased for better visibility
            rippleSpeed: { value: 1.0 },      
            rippleScale: { value: 10.0 }      // Decreased for larger ripples
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
                
                // No vertex displacement as requested
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform sampler2D tAtlas;
            uniform float time;
            uniform vec2 uvOffset;
            uniform vec2 uvRepeat;
            varying vec2 vUv;
            varying float vFace;
            varying vec3 vPosition;


            // Number of ripples — keep it small for performance
            const int NUM_RIPPLES = 5;

            // Adds subtle expanding circles that brighten the water
            float rippleEffect(vec2 uv, float time) {
                float brightness = 0.0;

                for (int i = 0; i < NUM_RIPPLES; i++) {
                    // Pseudo-random seed per ripple
                    float seed = float(i) * 13.314;
                    vec2 center = vec2(
                        fract(sin(seed + 12.9898) * 43758.5453),
                        fract(sin(seed + 78.233) * 43758.5453)
                    );

                    // Random start time offset
                    float tOffset = fract(sin(seed + 91.1) * 43758.5453);
                    float localTime = mod(time + tOffset * 10.0, 4.0); // loop every 4s

                    // Animate ripple radius
                    float radius = 1.0 / localTime;
                    float dist = distance(uv, center);

                    // Circle with soft edges
                    float ripple = smoothstep(0.02, 0.0, abs(dist - radius)) * (1.0 - localTime / 4.0);
// Better ripple shape: fading band around the center
ripple = exp(-pow((dist - radius) * 15.0, 2.0)) * (1.0 - localTime / 4.0);

                    brightness += ripple;
                }

                return clamp(brightness, 0.0, 1.0);
              }



            
            void main() {
                // Calculate atlas UVs - FIXED: use the repeat values
                vec2 atlasUv = vec2(
                    uvOffset.x + vUv.x,
                    uvOffset.y + vUv.y
                );
                vec4 texColor = texture2D(tAtlas, atlasUv);
                vec4 baseColor = texture2D(tAtlas, atlasUv);

                float waveX = sin(vPosition.x * 4.0 + time * 2.0);
                float waveZ = cos(vPosition.z * 4.0 + time * 2.0);
                float ripple = (waveX + waveZ) * 0.5;  // wave amplitude = 0.1

                // ---------------------------------------------------------------
                // 3) Water color tint: mix in some bluish/greenish color
                // ---------------------------------------------------------------
                vec3 waterTint = vec3(0.0, 0.4, 0.6);
                // Mix the base color with a water tint (adjust to taste).
                // Factor in the ripple to vary how strong the tint gets over time.
                vec3 waterColor = mix(baseColor.rgb, waterTint, 0.4 + ripple * 0.5);


                
                float rippleHighlight = rippleEffect(vUv, time);
                vec3 finalColor = waterColor + rippleHighlight * 0.2; // brighten water locally
                
                gl_FragColor = vec4(finalColor, texColor.a); 
                //gl_FragColor = vec4(vec3(time, time, time), texColor.a); 
            }
        `,
        transparent: true,
        side: THREE.DoubleSide
    });
    
    // Add update method to animate the ripples over time
    material.update = function(deltaTime) {
        this.uniforms.time.value += deltaTime;
    };
    
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
    
    // Setup UV mapping for our water material
    const uvMapping = {
        offset: new THREE.Vector2(0, 0),
        repeat: new THREE.Vector2(1, 1)
    };
    
    // Create a placeholder texture that will be replaced when the real texture loads
    const placeholderTexture = new THREE.Texture();
    
    // Create our real water material that has ripples
    const waterMaterial = createAdvancedWaterMaterial(placeholderTexture, uvMapping);
    
    // Create water blocks with different sizes - using our ripple material
    const waterGeometry = new THREE.BoxGeometry(1, 1, 1);
    const waterMesh = new THREE.Mesh(waterGeometry, waterMaterial);
    scene.add(waterMesh);
    
    const waterGeometry2 = new THREE.BoxGeometry(2, 1, 1);
    waterGeometry2.translate(0, 0, 2);
    scene.add(new THREE.Mesh(waterGeometry2, waterMaterial));
    
    const waterGeometry3 = new THREE.BoxGeometry(3, 1, 1);
    waterGeometry3.translate(0, 0, 4);
    scene.add(new THREE.Mesh(waterGeometry3, waterMaterial));
    
    const waterGeometry4 = new THREE.BoxGeometry(4, 1, 1);
    waterGeometry4.translate(0, 0, 6);
    scene.add(new THREE.Mesh(waterGeometry4, waterMaterial));
    
    // Add light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 2, 3);
    scene.add(light);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Load texture
    const loader = new THREE.TextureLoader();
    loader.load('public/textures/ice.png', function(tex) {
        console.log("Texture loaded successfully");
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(1, 1);
        // Apply the loaded texture to our water material
        waterMaterial.uniforms.tAtlas.value = tex;
    });
    
    // Animation loop
    const clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        
        // Update the water material time - CRITICAL for ripple animation
        waterMaterial.update(clock.getDelta());
        
        renderer.render(scene, camera);
    }
    animate();
}
