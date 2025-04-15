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
    this.debugPanel.style.width = '300px';
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
    this.textureList.style.display = 'grid';
    this.textureList.style.gridTemplateColumns = 'repeat(2, 1fr)';
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
      textureCard.style.marginBottom = '5px';
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
      preview.style.backgroundImage = url(`${this.createTexturePreview(name)}`);
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
        ctx.fillText(`U: ${offsetX.toFixed(2)}-${(offsetX + repeatX).toFixed(2)}`, 2, 10);
        ctx.fillText(`V: ${offsetY.toFixed(2)}-${(offsetY + repeatY).toFixed(2)}`, 2, 20);
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

      // Special case leaves
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

  // ----------------------------------------------------------------------
  // NEW FUNCTIONALITY: ATLAS OVERLAY (with search, click to see full name)
  // ----------------------------------------------------------------------
  toggleAtlasOverlay() {
    // If we haven't created the overlay yet, do so
    if (!this.atlasOverlay) {
      this.createAtlasOverlay();
    }
    // Toggle visibility
    this.atlasOverlayVisible = !this.atlasOverlayVisible;
    this.atlasOverlay.style.display = this.atlasOverlayVisible ? 'block' : 'none';

    if (this.atlasOverlayVisible) {
      // Redraw with current filter
      this.drawAtlasOverlay();
    }
  }

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
    this.atlasOverlay.style.padding = '5px';
    this.atlasOverlay.style.display = 'none'; // hidden by default

    // Make overlay scrollable if needed
    this.atlasOverlay.style.maxWidth = '80vw';
    this.atlasOverlay.style.maxHeight = '80vh';
    this.atlasOverlay.style.overflow = 'auto';

    // Add search bar
    const searchContainer = document.createElement('div');
    searchContainer.style.marginBottom = '5px';

    this.atlasSearchInput = document.createElement('input');
    this.atlasSearchInput.type = 'text';
    this.atlasSearchInput.placeholder = 'Search textures...';
    this.atlasSearchInput.style.width = '150px';
    this.atlasSearchInput.style.marginRight = '10px';
    this.atlasSearchInput.addEventListener('input', () => {
      this.atlasFilterText = this.atlasSearchInput.value.trim().toLowerCase();
      this.drawAtlasOverlay();
    });

    // Label to show how many textures are displayed
    this.atlasCountLabel = document.createElement('span');
    this.atlasCountLabel.style.color = '#fff';
    this.atlasCountLabel.textContent = '0 / 0';

    searchContainer.appendChild(this.atlasSearchInput);
    searchContainer.appendChild(this.atlasCountLabel);
    this.atlasOverlay.appendChild(searchContainer);

    // Attempt to render the atlas image plus bounding boxes
    const atlasTexture = this.textureManager.atlasTexture;
    if (!atlasTexture || !atlasTexture.image) {
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'Atlas texture is not loaded or unavailable.';
      errorMsg.style.color = 'red';
      this.atlasOverlay.appendChild(errorMsg);
    } else {
      // We'll create a canvas to draw on top of the atlas
      this.atlasOverlayCanvas = document.createElement('canvas');
      this.atlasOverlayCtx = this.atlasOverlayCanvas.getContext('2d');

      // Set canvas dimensions to match the atlas
      const width = atlasTexture.image.width;
      const height = atlasTexture.image.height;
      this.atlasOverlayCanvas.width = width;
      this.atlasOverlayCanvas.height = height;
      this.atlasOverlayCanvas.style.display = 'block';
      this.atlasOverlayCanvas.style.border = '1px solid #555';

      // Build bounding box data
      const atlasMapping = this.textureManager.atlasMapping;
      this.atlasBoxes = []; // reset

      for (const url in atlasMapping) {
        const { offset, size } = atlasMapping[url];
        const x = offset.x * width;
        const y = offset.y * height;
        const w = size.x * width;
        const h = size.y * height;

        // Full texture name is the last part of the URL (minus extension)
        let textureFullName = url.split('/').pop(); // e.g. "grass_block_side.png"
        textureFullName = textureFullName.replace(/\.(png|jpg|jpeg|webp)$/i, '');

        this.atlasBoxes.push({
          x, y, w, h,
          textureUrl: url,
          textureName: textureFullName // store the full name
        });
      }

      // Add event listener for clicking on bounding boxes
      this.atlasOverlayCanvas.addEventListener('click', (e) => {
        const rect = this.atlasOverlayCanvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        // Find which box was clicked
        for (let i = 0; i < this.atlasBoxes.length; i++) {
          const box = this.atlasBoxes[i];
          if (
            clickX >= box.x && clickX <= box.x + box.w &&
            clickY >= box.y && clickY <= box.y + box.h
          ) {
            // Show a small tooltip with the full texture name
            this.showAtlasTooltip(e.pageX, e.pageY, box.textureName);
            break;
          }
        }
      });

      this.atlasOverlay.appendChild(this.atlasOverlayCanvas);
    }

    document.body.appendChild(this.atlasOverlay);
  }

  drawAtlasOverlay() {
    // Safety check
    if (!this.atlasOverlayCanvas || !this.atlasOverlayCtx) return;

    const atlasTexture = this.textureManager.atlasTexture;
    if (!atlasTexture || !atlasTexture.image) return;

    const ctx = this.atlasOverlayCtx;
    const width = atlasTexture.image.width;
    const height = atlasTexture.image.height;

    // Clear and draw the atlas background
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(atlasTexture.image, 0, 0);

    // Filter bounding boxes by search text
    const filterText = this.atlasFilterText;
    let filteredBoxes = this.atlasBoxes;
    if (filterText) {
      filteredBoxes = this.atlasBoxes.filter((box) =>
        box.textureName.toLowerCase().includes(filterText)
      );
    }

    // Update the count label
    this.atlasCountLabel.textContent = `${filteredBoxes.length}` / `${this.atlasBoxes.length}`;
    // Draw bounding boxes
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    ctx.font = '12px sans-serif';

    filteredBoxes.forEach((box) => {
      ctx.beginPath();
      ctx.rect(box.x, box.y, box.w, box.h);
      ctx.stroke();

      // We'll draw the short label with black stroke & yellow fill
      const label = box.textureName;
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'black';
      ctx.fillStyle = 'yellow';
      // Outline text
      ctx.strokeText(label, box.x + 2, box.y + 12);
      // Fill text
      ctx.fillText(label, box.x + 2, box.y + 12);
    });
  }

  showAtlasTooltip(x, y, text) {
    // Create or reuse a tooltip div
    let tooltip = document.getElementById('atlas-overlay-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'atlas-overlay-tooltip';
      tooltip.style.position = 'absolute';
      tooltip.style.padding = '4px 8px';
      tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      tooltip.style.color = 'yellow';
      tooltip.style.border = '1px solid #333';
      tooltip.style.borderRadius = '4px';
      tooltip.style.fontSize = '12px';
      tooltip.style.pointerEvents = 'none';
      tooltip.style.zIndex = '2000';
      document.body.appendChild(tooltip);
    }
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.textContent = text;

    // Hide tooltip after 2 seconds
    setTimeout(() => {
      if (tooltip && tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
      }
    }, 2000);
  }
}
