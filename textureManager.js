// TextureManager.js
import * as THREE from 'three';

export class TextureManager {
  constructor(options = {}) {
    this.textureCache = {};         // Store loaded textures
    this.atlasMapping = {};         // UV mapping information
    this.atlasTexture = null;       // The combined texture atlas
    this.texturePaths = [];         // Paths to textures
    this.isLoaded = false;          // Loading state

    // Configuration options with defaults
    this.options = {
      filter: THREE.NearestFilter,
      mipmap: THREE.NearestMipmapNearestFilter,
      colorSpace: THREE.SRGBColorSpace,
      ...options
    };
  }

  /**
   * Set texture sources to load
   * @param {Array<string>} paths - Array of texture paths
   * @return {TextureManager} this instance for chaining
   */
  setTexturePaths(paths) {
    this.texturePaths = paths;
    return this;
  }

  /**
   * Load all textures and create atlas
   * @return {Promise} Resolves when textures are loaded and atlas is created
   */

  async _loadImages(urls) {
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

  async load() {
    const loadedImages = await this._loadImages(this.texturePaths);
    const { canvas, atlasMapping } = this._createAtlasCanvas(loadedImages);
    this.atlasTexture = this._createAtlasTexture(canvas);
    showTextureAtlas(canvas);
    this.atlasMapping = atlasMapping;
    this.textureCache = this._createTextureMap(this.atlasTexture, this.atlasMapping);
    console.log(this.textureCache);
    this.isLoaded = true;
    
    return this;
  }

  /**
   * Get a texture by name
   * @param {string} name - Texture name (without path/extension)
   * @return {THREE.Texture} The requested texture
   */
  getTexture(name) {
    if (!this.isLoaded) {
      console.warn('TextureManager: Textures not loaded yet');
      return null;
    }
    return this.textureCache[name] || null;
  }

  /**
   * Get a material with the specified texture
   * @param {string} name - Texture name
   * @param {Object} materialOptions - Additional material options
   * @return {THREE.Material} Material with the texture applied
   */
  getMaterial(name, materialOptions = {}) {
    return  new THREE.MeshStandardMaterial({ map: this.textureCache[name], metalness: 0, roughness: 1 });

  }

 /**
   * Get a random material from available textures
   * @param {Object} materialOptions - Additional material options
   * @return {THREE.Material} Random material
   */
  getRandomMaterial(materialOptions = {}) {
    const names = Object.keys(this.textureCache);
    if (names.length === 0) return null;
    
    const randomName = names[Math.floor(Math.random() * names.length)];
    return this.getMaterial(randomName, materialOptions);
  }

  _createAtlasCanvas(loadedImages) {

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

  _createAtlasTexture(canvas) {
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }
  _createTextureMap(atlasTexture, atlasMapping) {
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
        //texture.needsUpdate = true;
        
        // Store in our textures map
        textures[textureName] = texture;
    }
    
    return textures;
  }
}
function showTextureAtlas(canvas) {
  const display = document.createElement('div');

  display.width = 64;
  display.height = 64;
  display.style.position = 'absolute';
  display.style.bottom = '100px';
  display.style.left = '100px';
  display.style.zIndex = '500';
  display.appendChild(canvas.cloneNode(true));
  document.body.appendChild(display);
}
