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
   * Set texture entries (with path and URL mapping)
   * @param {Array<Object>} entries - Array of {path, url} objects
   * @return {TextureManager} this instance for chaining
   */
  setTextureEntries(entries) {
    this.textureEntries = entries;
    this.texturePaths = entries.map(entry => entry.url);
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
    //showTextureAtlas(canvas);
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
   * Get UV mapping data for a texture (for mesh building)
   * @param {string} name - Texture name (without path/extension)
   * @return {Object} UV mapping data with offset and repeat properties
   */
  getTextureUV(name) {
    if (!this.isLoaded) {
      console.warn('TextureManager: Textures not loaded yet');
      return null;
    }
    const texture = this.textureCache[name];
    if (!texture) {
      console.warn(`TextureManager: Texture '${name}' not found. Available textures:`, Object.keys(this.textureCache));
      return null;
    }
    
    return {
      offset: { x: texture.offset.x, y: texture.offset.y },
      repeat: { x: texture.repeat.x, y: texture.repeat.y }
    };
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
    // Create a grid layout instead of a single row to avoid exceeding WebGL limits
    const MAX_WIDTH = 8096;  // Safe WebGL texture width limit
    const MAX_HEIGHT = 8096; // Safe WebGL texture height limit
    
    // Calculate grid layout
    const tileSize = 64; // Assuming most textures are 64x64 or smaller
    const tilesPerRow = Math.floor(MAX_WIDTH / tileSize);
    
    // Create a canvas with limited size
    const canvas = document.createElement('canvas');
    canvas.width = Math.min(MAX_WIDTH, tilesPerRow * tileSize);
    canvas.height = Math.min(MAX_HEIGHT, Math.ceil(loadedImages.length / tilesPerRow) * tileSize);
    
    // Create debug display
    const debugCanvas = canvas.cloneNode(true);
    debugCanvas.width = 64;
    debugCanvas.height = 64;
    debugCanvas.style.position = 'absolute';
    debugCanvas.style.top = '10px';
    debugCanvas.style.right = '10px';
    debugCanvas.style.zIndex = '100';
    document.body.appendChild(debugCanvas);
    
    // Draw each image onto the canvas in a grid
    const ctx = canvas.getContext('2d');
    const atlasMapping = {}; // We'll store sub-rect info here
    
    loadedImages.forEach(({ url, img }, index) => {
      const row = Math.floor(index / tilesPerRow);
      const col = index % tilesPerRow;
      
      const x = col * tileSize;
      const y = row * tileSize;
      
      // Draw the image, scaling to fit the tile size if needed
      ctx.drawImage(img, x, y, tileSize, tileSize);
      
      // Store normalized UV coordinates (0-1)
      const u0 = x / canvas.width;
      const v0 = y / canvas.height;
      const u1 = (x + tileSize) / canvas.width;
      const v1 = (y + tileSize) / canvas.height;
      
      atlasMapping[url] = {
        offset: { x: u0, y: v0 },
        size: { x: (u1 - u0), y: (v1 - v0) }
      };
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
    
    // Create a map from URL to original path for name extraction
    const urlToPath = {};
    if (this.textureEntries) {
      this.textureEntries.forEach(entry => {
        urlToPath[entry.url] = entry.path;
      });
    }
    
    for (const textureUrl in atlasMapping) {
        // Get the original path from our mapping
        const originalPath = urlToPath[textureUrl];
        let textureName;
        
        if (originalPath) {
          // Extract name from the original path (e.g., './assets/textures/stone.png' -> 'stone')
          const filename = originalPath.split('/').pop().split('.')[0];
          textureName = filename;
        } else {
          // Fallback: try to extract from URL if no original path
          const filename = textureUrl.split('/').pop().split('.')[0];
          if (filename.includes('-')) {
            textureName = filename.split('-')[0];
          } else {
            textureName = filename;
          }
        }
        
        // Log for debugging
        console.log(`Mapping texture URL: ${textureUrl} (original: ${originalPath}) -> ${textureName}`);
        
        // Create a clone of the atlas texture for each individual texture
        const texture = atlasTexture.clone();
        
        // Set the UV mapping for this specific texture
        const uv = atlasMapping[textureUrl];
        texture.offset.set(uv.offset.x, uv.offset.y);
        texture.repeat.set(uv.size.x, uv.size.y);
        texture.needsUpdate = true;
        
        // Store in our textures map
        textures[textureName] = texture;
        
        // Also store the original path for debugging
        textures[textureName]._originalPath = originalPath;
        textures[textureName]._originalUrl = textureUrl;
    }
    
    console.log('Texture cache created:', Object.keys(textures));
    return textures;
  }
}
