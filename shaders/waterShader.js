// waterShader.js
import * as THREE from 'three';

// Vertex shader
const waterVertexShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vPosition = position;
  vNormal = normal;
  
  // Add simple wave animation
  vec3 newPosition = position;
  newPosition.y += sin(position.x * 2.0 + time) * 0.05;
  newPosition.y += cos(position.z * 2.0 + time) * 0.05;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

// Fragment shader
const waterFragmentShader = `
uniform float time;
uniform sampler2D tAtlas;
uniform vec2 uvOffset;
uniform vec2 uvRepeat;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  // Sample from the atlas with correct UV mapping
  vec2 atlasUv = vec2(
    uvOffset.x + vUv.x * uvRepeat.x,
    uvOffset.y + vUv.y * uvRepeat.y
  );
  
  // Distort UVs over time for a water ripple effect
  vec2 distortedUv = atlasUv;
  distortedUv.x += sin(vPosition.x * 10.0 + time * 0.5) * 0.01;
  distortedUv.y += cos(vPosition.z * 10.0 + time * 0.5) * 0.01;
  
  vec4 texColor = texture2D(tAtlas, distortedUv);
  
  // Add a blue tint and transparency
  vec4 waterColor = vec4(0.1, 0.5, 0.8, 0.75);
  gl_FragColor = mix(texColor, waterColor, 0.7);
  gl_FragColor = texColor;
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
    side: THREE.DoubleSide
  });
}
