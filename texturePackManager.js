// TexturePackManager.js
// Manages multiple texture packs and allows switching between them

/**
 * Defines a texture pack with its textures and metadata
 */
export class TexturePack {
  constructor(name, description = '') {
    this.name = name;
    this.description = description;
    this.textures = new Map(); // Map of texture name to image data
  }

  /**
   * Add a texture to this pack
   * @param {string} name - Texture name (e.g., 'stone', 'dirt')
   * @param {HTMLImageElement|HTMLCanvasElement} imageData - Image or canvas
   */
  addTexture(name, imageData) {
    this.textures.set(name, imageData);
  }

  /**
   * Get a texture by name
   * @param {string} name - Texture name
   * @returns {HTMLImageElement|HTMLCanvasElement|null}
   */
  getTexture(name) {
    return this.textures.get(name) || null;
  }

  /**
   * Check if pack has a texture
   * @param {string} name - Texture name
   * @returns {boolean}
   */
  hasTexture(name) {
    return this.textures.has(name);
  }

  /**
   * Get all texture names
   * @returns {string[]}
   */
  getTextureNames() {
    return Array.from(this.textures.keys());
  }
}

/**
 * Manages multiple texture packs and handles switching between them
 */
export class TexturePackManager {
  constructor() {
    this.packs = new Map();
    this.currentPack = null;
    this.onPackChangedCallbacks = [];

    // Initialize with built-in packs
    this._initializeBuiltInPacks();
  }

  /**
   * Initialize built-in texture packs
   */
  _initializeBuiltInPacks() {
    // Create dev pack with simple colored textures
    const devPack = this._createDevPack();
    this.registerPack(devPack);
  }

  /**
   * Create the dev texture pack with simple colored textures
   * @returns {TexturePack}
   */
  _createDevPack() {
    const pack = new TexturePack('dev', 'Simple colored textures for development');

    // Define simple colors for each block type
    const textureDefinitions = {
      // Basic blocks
      'stone': { color: '#808080', pattern: 'noise' },
      'dirt': { color: '#8B4513', pattern: 'noise' },
      'grass_block_top': { color: '#4CAF50', pattern: 'grass' },
      'grass_block_side': { color: '#8B4513', pattern: 'grass_side' },
      'sand': { color: '#F4D03F', pattern: 'noise' },
      'gravel': { color: '#A0A0A0', pattern: 'dots' },

      // Water and ice
      'water_still': { color: '#2196F3', pattern: 'waves' },
      'water': { color: '#2196F3', pattern: 'waves' },
      'ice': { color: '#B3E5FC', pattern: 'solid' },
      'packed_ice': { color: '#81D4FA', pattern: 'solid' },
      'snow': { color: '#FFFFFF', pattern: 'noise' },

      // Vegetation
      'poppy': { color: '#FF5722', pattern: 'flower' },

      // Lava
      'lava_still': { color: '#FF5722', pattern: 'lava' },
      'lava': { color: '#FF5722', pattern: 'lava' }
    };

    // Generate textures for each definition
    for (const [name, def] of Object.entries(textureDefinitions)) {
      const canvas = this._generateTexture(def.color, def.pattern);
      pack.addTexture(name, canvas);
    }

    return pack;
  }

  /**
   * Generate a simple textured canvas
   * @param {string} baseColor - Base color in hex format
   * @param {string} pattern - Pattern type
   * @returns {HTMLCanvasElement}
   */
  _generateTexture(baseColor, pattern) {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Parse the base color
    const rgb = this._hexToRgb(baseColor);

    switch (pattern) {
      case 'solid':
        this._drawSolid(ctx, size, rgb);
        break;
      case 'noise':
        this._drawNoise(ctx, size, rgb);
        break;
      case 'grass':
        this._drawGrass(ctx, size, rgb);
        break;
      case 'grass_side':
        this._drawGrassSide(ctx, size, rgb);
        break;
      case 'dots':
        this._drawDots(ctx, size, rgb);
        break;
      case 'waves':
        this._drawWaves(ctx, size, rgb);
        break;
      case 'flower':
        this._drawFlower(ctx, size, rgb);
        break;
      case 'lava':
        this._drawLava(ctx, size, rgb);
        break;
      default:
        this._drawSolid(ctx, size, rgb);
    }

    return canvas;
  }

  /**
   * Convert hex color to RGB
   * @param {string} hex - Hex color string
   * @returns {{r: number, g: number, b: number}}
   */
  _hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 128, g: 128, b: 128 };
  }

  /**
   * Draw solid color
   */
  _drawSolid(ctx, size, rgb) {
    ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    ctx.fillRect(0, 0, size, size);
  }

  /**
   * Draw noise pattern
   */
  _drawNoise(ctx, size, rgb) {
    const imageData = ctx.createImageData(size, size);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const variation = (Math.random() - 0.5) * 40;
      imageData.data[i] = Math.max(0, Math.min(255, rgb.r + variation));
      imageData.data[i + 1] = Math.max(0, Math.min(255, rgb.g + variation));
      imageData.data[i + 2] = Math.max(0, Math.min(255, rgb.b + variation));
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  }

  /**
   * Draw grass pattern (top view)
   */
  _drawGrass(ctx, size, rgb) {
    // Base green
    this._drawNoise(ctx, size, rgb);

    // Add some darker grass blades
    ctx.fillStyle = `rgba(${Math.max(0, rgb.r - 40)}, ${Math.max(0, rgb.g - 30)}, ${Math.max(0, rgb.b - 40)}, 0.3)`;
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      ctx.fillRect(x, y, 2, 2);
    }
  }

  /**
   * Draw grass side pattern
   */
  _drawGrassSide(ctx, size, rgb) {
    // Bottom is dirt
    const dirtRgb = { r: 139, g: 69, b: 19 };

    // Draw dirt portion (bottom 3/4)
    const imageData = ctx.createImageData(size, size);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = (y * size + x) * 4;
        const isGrass = y < size * 0.25;
        const baseRgb = isGrass ? { r: 76, g: 175, b: 80 } : dirtRgb;
        const variation = (Math.random() - 0.5) * 30;

        imageData.data[i] = Math.max(0, Math.min(255, baseRgb.r + variation));
        imageData.data[i + 1] = Math.max(0, Math.min(255, baseRgb.g + variation));
        imageData.data[i + 2] = Math.max(0, Math.min(255, baseRgb.b + variation));
        imageData.data[i + 3] = 255;
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  /**
   * Draw dots pattern (for gravel)
   */
  _drawDots(ctx, size, rgb) {
    this._drawNoise(ctx, size, rgb);

    // Add some darker and lighter dots
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const brightness = Math.random() > 0.5 ? 30 : -30;
      ctx.fillStyle = `rgb(${rgb.r + brightness}, ${rgb.g + brightness}, ${rgb.b + brightness})`;
      ctx.beginPath();
      ctx.arc(x, y, 2 + Math.random() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /**
   * Draw waves pattern (for water)
   */
  _drawWaves(ctx, size, rgb) {
    // Base blue with slight transparency effect
    ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    ctx.fillRect(0, 0, size, size);

    // Add wave lines
    ctx.strokeStyle = `rgba(255, 255, 255, 0.3)`;
    ctx.lineWidth = 2;
    for (let y = 8; y < size; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x < size; x += 8) {
        ctx.lineTo(x + 4, y + Math.sin(x / 8) * 3);
      }
      ctx.stroke();
    }
  }

  /**
   * Draw flower pattern (for poppy)
   */
  _drawFlower(ctx, size, rgb) {
    // Transparent background
    ctx.clearRect(0, 0, size, size);

    // Draw stem
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(size / 2, size);
    ctx.lineTo(size / 2, size * 0.4);
    ctx.stroke();

    // Draw petals
    ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    const centerX = size / 2;
    const centerY = size * 0.3;
    const petalSize = size * 0.2;

    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * petalSize * 0.5;
      const y = centerY + Math.sin(angle) * petalSize * 0.5;
      ctx.beginPath();
      ctx.arc(x, y, petalSize * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw center
    ctx.fillStyle = '#FFC107';
    ctx.beginPath();
    ctx.arc(centerX, centerY, petalSize * 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  /**
   * Draw lava pattern
   */
  _drawLava(ctx, size, rgb) {
    // Base orange-red
    const imageData = ctx.createImageData(size, size);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = (y * size + x) * 4;
        // Create flowing pattern
        const flow = Math.sin(x / 8 + y / 10) * 30;
        imageData.data[i] = Math.max(0, Math.min(255, rgb.r + flow));
        imageData.data[i + 1] = Math.max(0, Math.min(255, rgb.g + flow * 0.5));
        imageData.data[i + 2] = 0;
        imageData.data[i + 3] = 255;
      }
    }
    ctx.putImageData(imageData, 0, 0);

    // Add bright spots
    ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      ctx.beginPath();
      ctx.arc(x, y, 3 + Math.random() * 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /**
   * Register a texture pack
   * @param {TexturePack} pack - The texture pack to register
   */
  registerPack(pack) {
    this.packs.set(pack.name, pack);
  }

  /**
   * Get a texture pack by name
   * @param {string} name - Pack name
   * @returns {TexturePack|null}
   */
  getPack(name) {
    return this.packs.get(name) || null;
  }

  /**
   * Get all available pack names
   * @returns {string[]}
   */
  getAvailablePacks() {
    return Array.from(this.packs.keys());
  }

  /**
   * Set the current texture pack
   * @param {string} packName - Name of the pack to use
   * @returns {boolean} - True if pack was found and set
   */
  setCurrentPack(packName) {
    const pack = this.packs.get(packName);
    if (pack) {
      const previousPack = this.currentPack;
      this.currentPack = pack;

      // Notify listeners
      this.onPackChangedCallbacks.forEach(cb => cb(pack, previousPack));
      return true;
    }
    return false;
  }

  /**
   * Get the current texture pack
   * @returns {TexturePack|null}
   */
  getCurrentPack() {
    return this.currentPack;
  }

  /**
   * Register a callback for when the pack changes
   * @param {Function} callback - Function to call when pack changes
   */
  onPackChanged(callback) {
    this.onPackChangedCallbacks.push(callback);
  }

  /**
   * Remove a pack change callback
   * @param {Function} callback - The callback to remove
   */
  removePackChangedCallback(callback) {
    const index = this.onPackChangedCallbacks.indexOf(callback);
    if (index !== -1) {
      this.onPackChangedCallbacks.splice(index, 1);
    }
  }
}
