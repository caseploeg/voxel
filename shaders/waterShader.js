// waterShader.js
import * as THREE from 'three';

// Vertex shader
const waterVertexShader = `
uniform float time;
varying vec2 vUv;

void main() {
  vUv = uv;
  
  // Add simple wave animation
  vec3 pos = position;
  pos.y += sin(position.x * 2.0 + time) * 0.05;
  pos.y += cos(position.z * 2.0 + time) * 0.05;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

// Fragment shader
const waterFragmentShader = `
precision highp float;  // Add precision qualifier to fix errors

uniform float time;
uniform sampler2D tAtlas;
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
`;

/**
 * Create a water material with animated effects
 * @param {THREE.Texture} atlasTexture - The texture atlas
 * @param {Object} uvMapping - The UV mapping for water in the atlas
 * @returns {THREE.ShaderMaterial} The water shader material
 */
export function createWaterMaterial(atlasTexture, uvMapping) {
  return new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      tAtlas: { value: atlasTexture },
      uvOffset: { value: new THREE.Vector2(uvMapping.offset.x, uvMapping.offset.y) },
      uvRepeat: { value: new THREE.Vector2(uvMapping.repeat.x, uvMapping.repeat.y) }
    },
    vertexShader: waterVertexShader,
    fragmentShader: waterFragmentShader,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide
  });
}
