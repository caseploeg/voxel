
import * as THREE from 'three';

export class TextureDebugger {
  constructor(textureManager, blockRegistry = null) {
    this.textureManager = textureManager;
    this.blockRegistry = blockRegistry;
    this.debugPanel = null;
    this.textureList = null;
    this.textureInfos = {};
    this.selectedTextures = {};
    this.validBlockList = [];
    this.multiSidedBlocks = {};
    this.visible = false;

    // For Atlas Overlay
    this.atlasOverlay = null;
    this.atlasOverlayCanvas = null;
    this.atlasOverlayCtx = null;
    this.atlasOverlayVisible = false;

    // We'll store the bounding boxes so we can detect clicks
    this.atlasBoxes = [];

    // For search filter in the atlas overlay
    this.atlasSearchInput = null;
    this.atlasCountLabel = null;
    this.atlasFilterText = '';
  }

  initialize() {
    // Create main debug panel
    this.debugPanel = document.createElement('div');
    this.debugPanel.className = 'debug-panel';
    this.debugPanel.id = 'texture-debugger';
    this.debugPanel.style.position = 'fixed';
    this.debugPanel.style.top = '10px';
    this.debugPanel.style.right = '10px';
    // Adjust width as desired
    this.debugPanel.style.width = '300px';
    // Restrict height and allow vertical scrolling
    this.debugPanel.style.maxHeight = '80vh';
    this.debugPanel.style.overflowY = 'auto';
    this.debugPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    this.debugPanel.style.color = 'white';
    this.debugPanel.style.padding = '10px';
    this.debugPanel.style.borderRadius = '5px';
    this.debugPanel.style.fontFamily = 'monospace';
    this.debugPanel.style.zIndex = '1000';
    this.debugPanel.style.display = 'none';

    // Create header
    const header = document.createElement('div');
    header.innerHTML = '<h2>Texture Debugger</h2>';
    this.debugPanel.appendChild(header);

    // Create keyboard shortcut info
    const shortcuts = document.createElement('div');
    shortcuts.style.marginBottom = '10px';
    shortcuts.style.fontSize = '12px';
    shortcuts.style.color = '#aaa';
    shortcuts.innerHTML = 'F3: Toggle Debugger | F4: Rebuild World';
    this.debugPanel.appendChild(shortcuts);

    // Create controls
    const controls = document.createElement('div');
    controls.style.marginBottom = '10px';

    // Create save button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save Configuration';
    saveButton.style.marginRight = '10px';
    saveButton.addEventListener('click', () => this.saveTextureConfig());
    controls.appendChild(saveButton);

    // Create filter invalid button
    const filterButton = document.createElement('button');
    filterButton.textContent = 'Auto-Filter Invalid';
    filterButton.style.marginRight = '10px';
    filterButton.addEventListener('click', () => {
      // Show filtering status message
      const statusMsg = document.createElement('div');
      statusMsg.textContent = 'Filtering textures...';
      statusMsg.style.color = 'yellow';
      this.debugPanel.appendChild(statusMsg);

      // Use setTimeout to allow UI to update
      setTimeout(() => {
        this.autoFilterInvalid();
      }, 100);
    });
    controls.appendChild(filterButton);

    // Add filter stats
    const filterStats = document.createElement('div');
    filterStats.style.fontSize = '12px';
    filterStats.style.color = '#aaa';
    filterStats.style.marginTop = '5px';
    filterStats.textContent = 'Click Auto-Filter to process textures';
    controls.appendChild(filterStats);

    // -------------- NEW: Button to show/hide Atlas Overlay --------------
    const atlasButton = document.createElement('button');
    atlasButton.textContent = 'Toggle Atlas Overlay';
    atlasButton.addEventListener('click', () => this.toggleAtlasOverlay());
    controls.appendChild(atlasButton);
    // --------------------------------------------------------------------

    this.debugPanel.appendChild(controls);

    // Create texture list
    this.textureList = document.createElement('div');
    // Single-column layout for straightforward vertical scrolling
    this.textureList.style.display = 'flex';
    this.textureList.style.flexDirection = 'column';
    this.textureList.style.gap = '10px';

    this.debugPanel.appendChild(this.textureList);

    document.body.appendChild(this.debugPanel);

    // Add keyboard shortcut for toggling
    window.addEventListener('keydown', (e) => {
      if (e.key === 'F3') {
        this.toggle();
      }
    });
  }

  toggle() {
    this.visible = !this.visible;
    this.debugPanel.style.display = this.visible ? 'block' : 'none';

    // Trigger a custom event so other components can respond
    const event = new CustomEvent('texture-debugger-toggle', {
      detail: { visible: this.visible }
    });
    window.dispatchEvent(event);

    if (this.visible && Object.keys(this.textureInfos).length === 0) {
      this.refreshTextureList();
    }
  }

  refreshTextureList() {
    this.textureList.innerHTML = '';

    if (!this.textureManager.isLoaded) {
      this.textureList.innerHTML = '<p>Textures not loaded yet</p>';
      return;
    }

    const textures = this.textureManager.textureCache;

    // First scan for texture dimensions to detect non-square textures
    for (const name in textures) {
      this.analyzeTexture(name, textures[name]);
    }

    // Sort textures alphabetically
    const textureNames = Object.keys(textures).sort();

    // Display textures
    for (const name of textureNames) {
      const textureInfo = this.textureInfos[name] || {};
      const isValid = textureInfo.isValid !== false; // Default to true if not set

      const textureCard = document.createElement('div');
      textureCard.className = 'texture-card';
      textureCard.style.backgroundColor = isValid
        ? 'rgba(0, 100, 0, 0.3)'
        : 'rgba(100, 0, 0, 0.3)';
      textureCard.style.borderRadius = '5px';
      textureCard.style.padding = '8px';
      textureCard.style.cursor = 'pointer';

      // Add hover effect
      textureCard.addEventListener('mouseenter', () => {
        textureCard.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.5)';
      });
      textureCard.addEventListener('mouseleave', () => {
        textureCard.style.boxShadow = 'none';
      });

      // Create preview
      const preview = document.createElement('div');
      preview.style.width = '64px';
      preview.style.height = '64px';
      preview.style.margin = '0 auto';
      // Use backticks for backgroundImage
      preview.style.backgroundImage = `url(${this.createTexturePreview(name)})`;
      preview.style.backgroundSize = 'contain';
      preview.style.backgroundRepeat = 'no-repeat';
      preview.style.backgroundPosition = 'center';
      textureCard.appendChild(preview);

      // Add texture name
      const nameElement = document.createElement('div');
      nameElement.textContent = name;
      nameElement.style.textAlign = 'center';
      nameElement.style.marginTop = '5px';
      nameElement.style.fontSize = '12px';
      nameElement.style.wordBreak = 'break-all';
      textureCard.appendChild(nameElement);

      // Add info about dimensions and transparency
      const infoElement = document.createElement('div');
      infoElement.style.fontSize = '10px';
      infoElement.style.color = '#aaa';
      infoElement.style.textAlign = 'center';
      infoElement.textContent = textureInfo.dimensions || 'Unknown';
      if (textureInfo.transparent) {
        infoElement.textContent += ' (Transparent)';
      }
      textureCard.appendChild(infoElement);

      // Add valid checkbox
      const validContainer = document.createElement('div');
      validContainer.style.display = 'flex';
      validContainer.style.alignItems = 'center';
      validContainer.style.justifyContent = 'center';
      validContainer.style.marginTop = '5px';

      const validCheckbox = document.createElement('input');
      validCheckbox.type = 'checkbox';
      validCheckbox.checked = isValid;
      validCheckbox.setAttribute('data-texture', name);
      validCheckbox.addEventListener('change', (e) => {
        this.textureInfos[name].isValid = e.target.checked;
      });

      const validLabel = document.createElement('label');
      validLabel.textContent = 'Valid Block';
      validLabel.style.fontSize = '10px';
      validLabel.style.marginLeft = '5px';

      validContainer.appendChild(validCheckbox);
      validContainer.appendChild(validLabel);
      textureCard.appendChild(validContainer);

      // Multi-sided support (for blocks like grass)
      if (isValid) {
        const multiSidedContainer = document.createElement('div');
        multiSidedContainer.style.marginTop = '5px';

        const multiSidedCheckbox = document.createElement('input');
        multiSidedCheckbox.type = 'checkbox';
        multiSidedCheckbox.checked = !!this.multiSidedBlocks[name];
        multiSidedCheckbox.setAttribute('data-texture', name);
        multiSidedCheckbox.addEventListener('change', (e) => {
          if (e.target.checked) {
            this.multiSidedBlocks[name] = {
              top: name,
              sides: name,
              bottom: name
            };
          } else {
            delete this.multiSidedBlocks[name];
          }
        });

        const multiSidedLabel = document.createElement('label');
        multiSidedLabel.textContent = 'Multi-sided';
        multiSidedLabel.style.fontSize = '10px';
        multiSidedLabel.style.marginLeft = '5px';

        multiSidedContainer.appendChild(multiSidedCheckbox);
        multiSidedContainer.appendChild(multiSidedLabel);
        textureCard.appendChild(multiSidedContainer);
      }

      this.textureList.appendChild(textureCard);
    }
  }

  analyzeTexture(name, texture) {
    // Skip if we've already analyzed this texture
    if (this.textureInfos[name]) {
      return this.textureInfos[name];
    }

    const textureInfo = {
      name,
      isValid: false // Default to invalid
    };

    // Extract the portion of the atlas that corresponds to this texture
    const canvas = this.extractTextureCanvas(name);
    if (!canvas) {
      this.textureInfos[name] = textureInfo;
      return textureInfo;
    }

    // Get the texture's dimensions
    textureInfo.dimensions = `${canvas.width}x${canvas.height}`;

    // Check for transparency
    textureInfo.transparent = this.detectTransparency(name);

    // Determine validity based on name matching against common block patterns
    if (this.blockRegistry && this.blockRegistry.isValidTexture(name)) {
      textureInfo.isValid = true;
    }

    // Match against known good patterns
    const validPatterns = ['stone', 'dirt', 'grass', 'sand', 'planks', 'log', 'leaves'];
    for (const pattern of validPatterns) {
      if (name.includes(pattern)) {
        textureInfo.isValid = true;
        break;
      }
    }

    // Mark as invalid if mostly transparent in the center
    if (textureInfo.transparent && this.isTransparentInCenter(name)) {
      textureInfo.isValid = false;
    }

    // Mark as invalid if it has a known non-block name pattern
    if (
      name.includes('ui_') ||
      name.includes('destroy_stage_') ||
      name.includes('fire_') ||
      name.includes('_stem') ||
      name.includes('particle') ||
      name.includes('_stage')
    ) {
      textureInfo.isValid = false;
    }

    this.textureInfos[name] = textureInfo;
    return textureInfo;
  }

  extractTextureCanvas(textureName, size = 64) {
    const texture = this.textureManager.getTexture(textureName);
    if (!texture) return null;

    const atlasTexture = this.textureManager.atlasTexture;
    if (!atlasTexture || !atlasTexture.image) return null;

    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = size;
    canvas.height = size;

    // Extract the correct portion of the atlas image based on UV coordinates
    const offsetX = texture.offset.x;
    const offsetY = texture.offset.y;
    const repeatX = texture.repeat.x;
    const repeatY = texture.repeat.y;

    const atlasWidth = atlasTexture.image.width;
    const atlasHeight = atlasTexture.image.height;

    const srcX = Math.floor(offsetX * atlasWidth);
    const srcY = Math.floor(offsetY * atlasHeight);
    const srcWidth = Math.floor(repeatX * atlasWidth);
    const srcHeight = Math.floor(repeatY * atlasHeight);

    try {
      ctx.drawImage(
        atlasTexture.image,
        srcX,
        srcY,
        srcWidth,
        srcHeight,
        0,
        0,
        size,
        size
      );
    } catch (error) {
      console.error('Error extracting texture:', error);
      return null;
    }

    return canvas;
  }

  detectTransparency(textureName) {
    try {
      const canvas = this.extractTextureCanvas(textureName);
      if (!canvas) return false;

      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Check for any transparent pixels
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] < 250) {
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error('Error detecting transparency:', error);
      return false;
    }
  }

  isTransparentInCenter(textureName) {
    try {
      const canvas = this.extractTextureCanvas(textureName);
      if (!canvas) return false;

      const ctx = canvas.getContext('2d');
      const size = canvas.width;

      // Check center 50% area
      const startX = Math.floor(size * 0.25);
      const startY = Math.floor(size * 0.25);
      const width = Math.floor(size * 0.5);
      const height = Math.floor(size * 0.5);

      const imageData = ctx.getImageData(startX, startY, width, height);
      const data = imageData.data;

      let transparentPixels = 0;
      let totalPixels = width * height;

      for (let i = 3; i < data.length; i += 4) {
        if (data[i] < 200) {
          transparentPixels++;
        }
      }

      return transparentPixels > totalPixels * 0.5;
    } catch (error) {
      console.error('Error checking center transparency:', error);
      return false;
    }
  }

  createTexturePreview(textureName) {
    // Create a canvas with a checkered background
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 64;
    canvas.height = 64;

    // Draw checkered background
    ctx.fillStyle = '#aaaaaa';
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = '#888888';
    for (let y = 0; y < 64; y += 16) {
      for (let x = 0; x < 64; x += 16) {
        if ((x / 16 + y / 16) % 2 === 0) {
          ctx.fillRect(x, y, 16, 16);
        }
      }
    }

    // Extract the texture
    const textureCanvas = this.extractTextureCanvas(textureName);
    if (textureCanvas) {
      ctx.drawImage(textureCanvas, 0, 0, 64, 64);

      // Debug overlay for UV coordinates
      const texture = this.textureManager.getTexture(textureName);
      if (texture) {
        const offsetX = texture.offset.x;
        const offsetY = texture.offset.y;
        const repeatX = texture.repeat.x;
        const repeatY = texture.repeat.y;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '8px monospace';
        ctx.fillText(
          `U: ${offsetX.toFixed(2)}-${(offsetX + repeatX).toFixed(2)}`,
          2,
          10
        );
        ctx.fillText(
          `V: ${offsetY.toFixed(2)}-${(offsetY + repeatY).toFixed(2)}`,
          2,
          20
        );
      }
    }

    return canvas.toDataURL();
  }

  autoFilterInvalid() {
    console.log('Auto-filtering invalid textures...');

    // Define known good block texture patterns
    const validPatterns = [
      'stone', 'dirt', 'grass_block_top', 'grass_block_side',
      'sand', 'gravel', 'planks', 'log', 'leaves',
      'cobblestone', 'brick', 'wood', 'oak', 'birch', 'acacia',
      'spruce', 'jungle', 'dark_oak', 'glass', 'wool',
      'concrete', 'terracotta', 'sandstone', 'quartz'
    ];

    // Check all textures
    for (const name in this.textureManager.textureCache) {
      if (!this.textureInfos[name]) {
        this.analyzeTexture(name, this.textureManager.getTexture(name));
      }

      const info = this.textureInfos[name];
      info.isValid = false; // default

      // Mark as valid if it matches any valid pattern
      for (const pattern of validPatterns) {
        if (name.includes(pattern)) {
          info.isValid = true;
          break;
        }
      }

      // Filter out mostly transparent center
      if (info.transparent && this.isTransparentInCenter(name)) {
        info.isValid = false;
      }

      // Filter out known UI elements
      if (
        name.includes('ui_') ||
        name.includes('destroy_stage_') ||
        name.includes('fire_') ||
        name.includes('_stem') ||
        name.includes('particle') ||
        name.includes('_stage')
      ) {
        info.isValid = false;
      }

      // Special case leaves, grass
      if (
        name === 'acacia_leaves' ||
        name === 'oak_leaves' ||
        name === 'birch_leaves' ||
        name === 'grass_block_top' ||
        name === 'grass_block_side'
      ) {
        info.isValid = true;
      }
    }

    // Special handling for multi-sided blocks
    if (this.textureInfos['grass_block_top']) {
      this.multiSidedBlocks['grass_block'] = {
        top: 'grass_block_top',
        sides: 'grass_block_side',
        bottom: 'dirt'
      };
    }

    // Handle log blocks
    ['oak', 'birch', 'spruce', 'acacia', 'jungle', 'dark_oak'].forEach((woodType) => {
      const logName = `${woodType}_log`;
      const topName = `${woodType}_log_top`;

      if (this.textureInfos[logName] && this.textureInfos[topName]) {
        this.multiSidedBlocks[logName] = {
          top: topName,
          bottom: topName,
          sides: logName
        };
      }

      // Register leaves as valid
      const leavesName = `${woodType}_leaves`;
      if (this.textureInfos[leavesName]) {
        this.textureInfos[leavesName].isValid = true;
      }
    });

    // Handle sandstone variants
    ['sandstone', 'red_sandstone'].forEach((stoneName) => {
      const topName = `${stoneName}_top`;
      const bottomName = `${stoneName}_bottom`;

      if (this.textureInfos[stoneName] && this.textureInfos[topName]) {
        this.multiSidedBlocks[stoneName] = {
          top: topName,
          bottom: bottomName || topName,
          sides: stoneName
        };
      }
    });

    // Refresh the display
    this.refreshTextureList();
  }

  saveTextureConfig() {
    // Build list of valid textures
    this.validBlockList = [];
    for (const name in this.textureInfos) {
      if (this.textureInfos[name].isValid) {
        this.validBlockList.push(name);
      }
    }

    // Save as JSON and download
    const config = {
      validBlocks: this.validBlockList,
      multiSidedBlocks: this.multiSidedBlocks
    };

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'texture_config.json';
    a.click();

    URL.revokeObjectURL(url);

    return config;
  }

  getValidTextures() {
    // Ensure all textures have been analyzed
    for (const name in this.textureManager.textureCache) {
      if (!this.textureInfos[name]) {
        this.analyzeTexture(name, this.textureManager.getTexture(name));
      }
    }

    // Collect all valid textures
    const valid = [];
    for (const name in this.textureInfos) {
      if (this.textureInfos[name].isValid) {
        valid.push(name);
      }
    }

    // Fallback if none found
    if (valid.length === 0) {
      const fallbacks = ['stone', 'dirt', 'cobblestone', 'oak_planks', 'diamond_ore'];
      for (const name of fallbacks) {
        if (this.textureManager.getTexture(name)) {
          valid.push(name);
        }
      }
      console.warn('No valid textures found, using fallbacks:', valid);
    }

    return valid;
  }

  // Updated createAtlasOverlay method with grid-based view
  createAtlasOverlay() {
    // Create container div for the atlas overlay
    this.atlasOverlay = document.createElement('div');
    this.atlasOverlay.className = 'atlas-overlay';
    this.atlasOverlay.style.position = 'fixed';
    this.atlasOverlay.style.top = '50px';
    this.atlasOverlay.style.right = '320px';
    this.atlasOverlay.style.zIndex = '1001';
    this.atlasOverlay.style.border = '1px solid #888';
    this.atlasOverlay.style.backgroundColor = '#222';
    this.atlasOverlay.style.padding = '10px';
    this.atlasOverlay.style.display = 'none'; // hidden by default
    this.atlasOverlay.style.width = '600px'; // Fixed width

    // Make overlay vertically scrollable
    this.atlasOverlay.style.maxHeight = '80vh';
    this.atlasOverlay.style.overflowY = 'auto';

    // Add title
    const title = document.createElement('h3');
    title.textContent = 'Texture Atlas Grid View';
    title.style.margin = '0 0 10px 0';
    title.style.color = '#fff';
    this.atlasOverlay.appendChild(title);

    // Add search bar and controls
    const controlsContainer = document.createElement('div');
    controlsContainer.style.marginBottom = '10px';
    controlsContainer.style.display = 'flex';
    controlsContainer.style.alignItems = 'center';
    controlsContainer.style.gap = '10px';

    this.atlasSearchInput = document.createElement('input');
    this.atlasSearchInput.type = 'text';
    this.atlasSearchInput.placeholder = 'Search textures...';
    this.atlasSearchInput.style.flex = '1';
    this.atlasSearchInput.style.padding = '5px';
    this.atlasSearchInput.addEventListener('input', () => {
      this.atlasFilterText = this.atlasSearchInput.value.trim().toLowerCase();
      this.drawGridAtlasOverlay();
    });

    // Label to show how many textures are displayed
    this.atlasCountLabel = document.createElement('span');
    this.atlasCountLabel.style.color = '#fff';
    this.atlasCountLabel.textContent = '0 / 0';

    controlsContainer.appendChild(this.atlasSearchInput);
    controlsContainer.appendChild(this.atlasCountLabel);
    this.atlasOverlay.appendChild(controlsContainer);

    // Add grid cell size slider
    const sizeContainer = document.createElement('div');
    sizeContainer.style.marginBottom = '10px';
    sizeContainer.style.display = 'flex';
    sizeContainer.style.alignItems = 'center';
    sizeContainer.style.gap = '10px';

    const sizeLabel = document.createElement('label');
    sizeLabel.textContent = 'Texture Size:';
    sizeLabel.style.color = '#fff';

    const sizeSlider = document.createElement('input');
    sizeSlider.type = 'range';
    sizeSlider.min = '32';
    sizeSlider.max = '128';
    sizeSlider.step = '16';
    sizeSlider.value = '64';
    sizeSlider.style.flex = '1';
    sizeSlider.addEventListener('input', (e) => {
      this.gridCellSize = parseInt(e.target.value);
      this.drawGridAtlasOverlay();
    });
    
    const sizeValueLabel = document.createElement('span');
    sizeValueLabel.textContent = '64px';
    sizeValueLabel.style.color = '#fff';
    sizeValueLabel.style.minWidth = '50px';
    
    sizeSlider.addEventListener('input', (e) => {
      const value = e.target.value;
      sizeValueLabel.textContent = `${value}px`;
      this.gridCellSize = parseInt(value);
      this.drawGridAtlasOverlay();
    });

    sizeContainer.appendChild(sizeLabel);
    sizeContainer.appendChild(sizeSlider);
    sizeContainer.appendChild(sizeValueLabel);
    this.atlasOverlay.appendChild(sizeContainer);

    // Container for the grid
    this.gridContainer = document.createElement('div');
    this.gridContainer.style.display = 'grid';
    this.gridContainer.style.gap = '5px';
    this.gridContainer.style.justifyContent = 'center';
    this.atlasOverlay.appendChild(this.gridContainer);

    // Set default grid cell size
    this.gridCellSize = 64;

    // Get the atlas texture from the texture manager
    const atlasTexture = this.textureManager.atlasTexture;
    
    if (!atlasTexture || !atlasTexture.image) {
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'Atlas texture is not loaded or unavailable.';
      errorMsg.style.color = 'red';
      this.atlasOverlay.appendChild(errorMsg);
      document.body.appendChild(this.atlasOverlay);
      return;
    }
    
    // Log atlas dimensions
    const atlasWidth = atlasTexture.image.width;
    const atlasHeight = atlasTexture.image.height;
    console.log(`Atlas dimensions: ${atlasWidth}x${atlasHeight}`);
    
    // Build texture info
    this.atlasBoxes = [];
    
    // Try first with atlasMapping
    const atlasMapping = this.textureManager.atlasMapping;
    if (atlasMapping && Object.keys(atlasMapping).length > 0) {
      for (const url in atlasMapping) {
        const mapping = atlasMapping[url];
        if (!mapping || !mapping.offset || !mapping.size) {
          console.warn(`Invalid mapping for ${url}`, mapping);
          continue;
        }

        const x = mapping.offset.x * atlasWidth;
        const y = mapping.offset.y * atlasHeight;
        const w = mapping.size.x * atlasWidth;
        const h = mapping.size.y * atlasHeight;

        // Extract texture name from URL
        let textureName = url.split('/').pop(); // e.g. "grass_block_side.png"
        if (textureName) {
          textureName = textureName.replace(/\.(png|jpg|jpeg|webp)$/i, '');
          
          this.atlasBoxes.push({
            x, y, w, h,
            textureUrl: url,
            textureName: textureName
          });
        }
      }
    } else {
      // Fallback to texture cache
      console.log("Using texture cache for atlas data");
      const textures = this.textureManager.textureCache;
      
      if (!textures) {
        console.error("No texture cache available");
        return;
      }
      
      for (const name in textures) {
        const texture = textures[name];
        if (!texture || !texture.offset || !texture.repeat) {
          console.warn(`Invalid texture data for ${name}`, texture);
          continue;
        }
        
        const x = texture.offset.x * atlasWidth;
        const y = texture.offset.y * atlasHeight;
        const w = texture.repeat.x * atlasWidth;
        const h = texture.repeat.y * atlasHeight;
        
        this.atlasBoxes.push({
          x, y, w, h,
          textureUrl: name,
          textureName: name
        });
      }
    }
    
    console.log(`Found ${this.atlasBoxes.length} textures in atlas`);

    document.body.appendChild(this.atlasOverlay);

    // Initial draw of the grid atlas
    this.drawGridAtlasOverlay();
  }

  // New method to draw the grid-based atlas view
  drawGridAtlasOverlay() {
    // Clear previous grid
    this.gridContainer.innerHTML = '';
    
    if (!this.atlasBoxes || this.atlasBoxes.length === 0) {
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'No texture data available.';
      errorMsg.style.color = 'red';
      this.gridContainer.appendChild(errorMsg);
      return;
    }

    const atlasTexture = this.textureManager.atlasTexture;
    if (!atlasTexture || !atlasTexture.image) {
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'Atlas texture image not available.';
      errorMsg.style.color = 'red';
      this.gridContainer.appendChild(errorMsg);
      return;
    }

    // Filter textures based on search
    let filteredBoxes = this.atlasBoxes;
    if (this.atlasFilterText) {
      filteredBoxes = this.atlasBoxes.filter(box => 
        box.textureName.toLowerCase().includes(this.atlasFilterText)
      );
    }

    // Update the count label
    if (this.atlasCountLabel) {
      this.atlasCountLabel.textContent = `${filteredBoxes.length} / ${this.atlasBoxes.length}`;
    }

    // Calculate grid columns based on container width
    const containerWidth = this.atlasOverlay.clientWidth - 30; // Account for padding
    const columns = Math.max(2, Math.floor(containerWidth / (this.gridCellSize + 5)));
    
    // Set grid template columns
    this.gridContainer.style.gridTemplateColumns = `repeat(${columns}, ${this.gridCellSize}px)`;

    // Create a cell for each texture
    filteredBoxes.forEach(box => {
      const cell = document.createElement('div');
      cell.style.width = `${this.gridCellSize}px`;
      cell.style.height = `${this.gridCellSize}px`;
      cell.style.position = 'relative';
      cell.style.border = '1px solid #444';
      cell.style.borderRadius = '3px';
      cell.style.overflow = 'hidden';
      cell.style.cursor = 'pointer';
      
      // Create canvas for the texture
      const canvas = document.createElement('canvas');
      canvas.width = this.gridCellSize;
      canvas.height = this.gridCellSize;
      const ctx = canvas.getContext('2d');
      
      // Draw checkered background
      ctx.fillStyle = '#aaaaaa';
      ctx.fillRect(0, 0, this.gridCellSize, this.gridCellSize);
      ctx.fillStyle = '#888888';
      const checkerSize = this.gridCellSize / 4;
      for (let y = 0; y < this.gridCellSize; y += checkerSize) {
        for (let x = 0; x < this.gridCellSize; x += checkerSize) {
          if ((x / checkerSize + y / checkerSize) % 2 === 0) {
            ctx.fillRect(x, y, checkerSize, checkerSize);
          }
        }
      }
      
      // Draw texture from atlas
      try {
        ctx.drawImage(
          atlasTexture.image,
          box.x, box.y, box.w, box.h,
          0, 0, this.gridCellSize, this.gridCellSize
        );
      } catch (error) {
        console.error(`Failed to draw texture ${box.textureName}:`, error);
      }
      
      cell.appendChild(canvas);
      
      // Add texture name label
      const label = document.createElement('div');
      label.style.position = 'absolute';
      label.style.bottom = '0';
      label.style.left = '0';
      label.style.right = '0';
      label.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      label.style.color = 'white';
      label.style.padding = '2px 4px';
      label.style.fontSize = '10px';
      label.style.overflow = 'hidden';
      label.style.textOverflow = 'ellipsis';
      label.style.whiteSpace = 'nowrap';
      label.textContent = box.textureName;
      cell.appendChild(label);
      
      // Add click handler to show detailed info
      cell.addEventListener('click', () => {
        this.showTextureDetails(box);
      });
      
      this.gridContainer.appendChild(cell);
    });
    
    // Add message if no results
    if (filteredBoxes.length === 0) {
      const noResults = document.createElement('div');
      noResults.style.gridColumn = '1 / -1'; // Span all columns
      noResults.style.padding = '20px';
      noResults.style.color = 'white';
      noResults.style.textAlign = 'center';
      noResults.textContent = 'No matching textures found.';
      this.gridContainer.appendChild(noResults);
    }
  }

  // New method to show texture details
  showTextureDetails(box) {
    // Remove any existing details popup
    const existingPopup = document.getElementById('texture-details-popup');
    if (existingPopup) {
      existingPopup.remove();
    }
    
    // Create popup
    const popup = document.createElement('div');
    popup.id = 'texture-details-popup';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#333';
    popup.style.border = '2px solid #555';
    popup.style.borderRadius = '5px';
    popup.style.padding = '20px';
    popup.style.zIndex = '2000';
    popup.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    popup.style.maxWidth = '90vw';
    popup.style.maxHeight = '90vh';
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.gap = '15px';
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => popup.remove());
    popup.appendChild(closeButton);
    
    // Add texture name header
    const header = document.createElement('h3');
    header.textContent = box.textureName;
    header.style.margin = '0';
    header.style.color = 'white';
    popup.appendChild(header);
    
    // Container for image and details
    const contentContainer = document.createElement('div');
    contentContainer.style.display = 'flex';
    contentContainer.style.gap = '20px';
    contentContainer.style.alignItems = 'flex-start';
    popup.appendChild(contentContainer);
    
    // Create enlarged texture preview
    const previewSize = 200;
    const canvas = document.createElement('canvas');
    canvas.width = previewSize;
    canvas.height = previewSize;
    canvas.style.border = '1px solid #666';
    
    const ctx = canvas.getContext('2d');
    
    // Draw checkered background
    ctx.fillStyle = '#aaaaaa';
    ctx.fillRect(0, 0, previewSize, previewSize);
    ctx.fillStyle = '#888888';
    const checkerSize = previewSize / 8;
    for (let y = 0; y < previewSize; y += checkerSize) {
      for (let x = 0; x < previewSize; x += checkerSize) {
        if ((x / checkerSize + y / checkerSize) % 2 === 0) {
          ctx.fillRect(x, y, checkerSize, checkerSize);
        }
      }
    }
    
    // Draw texture from atlas
    try {
      const atlasTexture = this.textureManager.atlasTexture;
      ctx.drawImage(
        atlasTexture.image,
        box.x, box.y, box.w, box.h,
        0, 0, previewSize, previewSize
      );
    } catch (error) {
      console.error(`Failed to draw texture preview:`, error);
    }
    
    contentContainer.appendChild(canvas);
    
    // Texture details
    const details = document.createElement('div');
    details.style.color = 'white';
    details.style.fontSize = '14px';
    
    // Add texture info
    const infoList = [
      `Name: ${box.textureName}`,
      `Dimensions: ${Math.round(box.w)}x${Math.round(box.h)}`,
      `Atlas Position: (${Math.round(box.x)}, ${Math.round(box.y)})`,
      `Is Valid Block: ${this.textureInfos[box.textureName]?.isValid ? 'Yes' : 'No'}`
    ];
    
    infoList.forEach(info => {
      const p = document.createElement('p');
      p.textContent = info;
      p.style.margin = '5px 0';
      details.appendChild(p);
    });
    
    contentContainer.appendChild(details);
    
    // Add action buttons
    const actionsContainer = document.createElement('div');
    actionsContainer.style.marginTop = '10px';
    actionsContainer.style.display = 'flex';
    actionsContainer.style.gap = '10px';
    actionsContainer.style.justifyContent = 'flex-start';
    popup.appendChild(actionsContainer);
    
    // Toggle valid button
    const validButton = document.createElement('button');
    const isValid = this.textureInfos[box.textureName]?.isValid || false;
    validButton.textContent = isValid ? 'Mark as Invalid' : 'Mark as Valid';
    validButton.style.padding = '5px 10px';
    validButton.addEventListener('click', () => {
      if (!this.textureInfos[box.textureName]) {
        this.textureInfos[box.textureName] = { name: box.textureName };
      }
      this.textureInfos[box.textureName].isValid = !isValid;
      popup.remove();
      this.drawGridAtlasOverlay();
    });
    actionsContainer.appendChild(validButton);
    
    // Multi-sided toggle if valid
    if (isValid) {
      const multiSidedButton = document.createElement('button');
      const isMultiSided = !!this.multiSidedBlocks[box.textureName];
      multiSidedButton.textContent = isMultiSided ? 'Remove Multi-sided' : 'Set as Multi-sided';
      multiSidedButton.style.padding = '5px 10px';
      multiSidedButton.addEventListener('click', () => {
        if (isMultiSided) {
          delete this.multiSidedBlocks[box.textureName];
        } else {
          this.multiSidedBlocks[box.textureName] = {
            top: box.textureName,
            sides: box.textureName,
            bottom: box.textureName
          };
        }
        popup.remove();
      });
      actionsContainer.appendChild(multiSidedButton);
    }
    
    document.body.appendChild(popup);
  }

  // Updated toggleAtlasOverlay method
  toggleAtlasOverlay() {
    if (!this.atlasOverlay) {
      this.createAtlasOverlay();
    }
    
    this.atlasOverlayVisible = !this.atlasOverlayVisible;
    
    if (this.atlasOverlay) {
      this.atlasOverlay.style.display = this.atlasOverlayVisible ? 'block' : 'none';
    }

    if (this.atlasOverlayVisible) {
      console.log("Grid atlas overlay visible");
      this.drawGridAtlasOverlay();
    }
  }
};
