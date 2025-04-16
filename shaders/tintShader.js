// shaders/tintShader.js
import * as THREE from 'three';

//
// Simple vertex shader:
// Just pass along the geometry UVs and position.
//
const tintVertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;  // The geometry's UV
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

//
// Simple fragment shader:
// Samples the atlas, then multiplies by a tint color uniform.
//
const tintFragmentShader = `
uniform sampler2D tAtlas;  // Atlas containing the grayscale texture
uniform vec4 tintColor;    // RGBA color to multiply
varying vec2 vUv;

void main() {
    // Sample the atlas at vUv (which already includes any offset/repeat)
    vec4 texColor = texture2D(tAtlas, vUv);

    // Multiply the sampled color by tintColor
    // (Assumes the texture is grayscale, so R=G=B and it gets "tinted")
    gl_FragColor = texColor * tintColor;
}
`;

//
// Create the tinted material, similar to how you do with waterShader
//
export function createTintMaterial(atlasTexture, tintColor) {
    return new THREE.ShaderMaterial({
        uniforms: {
            tAtlas:    { value: atlasTexture },
            tintColor: { value: new THREE.Vector4(tintColor.r, tintColor.g, tintColor.b, tintColor.a || 1.0) }
        },
        vertexShader:   tintVertexShader,
        fragmentShader: tintFragmentShader,
        transparent:    false,           // Set true if you want some alpha
        side:           THREE.DoubleSide // Often helpful for blocks
    });
}