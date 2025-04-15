
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export class InputHandler {
  /**
   * Creates the InputHandler, sets up PointerLock, and attaches event listeners for movement.
   * 
   * @param {THREE.Camera} camera - A Three.js camera.
   * @param {HTMLElement} domElement - The DOM element for pointer lock (usually `document.body`).
   * @param {Object} options - Optional settings. Example: { movementSpeed: 5 }
   */
  constructor(camera, domElement, options = {}) {
    this.camera = camera;
    this.domElement = domElement;
    this.controls = new PointerLockControls(camera, domElement);
    
    // Debug mode flag
    this.debugMode = false;

    // Movement flags
    this.movement = {
      forward: false,
      back: false,
      left: false,
      right: false,
      up: false,
      down: false
    };

    // Setup default options
    this.movementSpeed = options.movementSpeed || 5.0;

    // Console open or not
    this.consoleOpen = false;

    // Create and initialize the console UI
    this._initConsoleUI();

    // Attach event listeners
    this._addEventListeners();
  }

  _addEventListeners() {
    // Key down
    document.addEventListener('keydown', (event) => {
      // If console is open, don't capture WASD, space, etc. Instead let user type in the console

      // Toggle console on Backquote (~ key)
      if (event.code === 'Backquote' && !event.repeat) {
        event.preventDefault();
        this._toggleConsole();
        return;
      }

      
      if (this.consoleOpen) {
        return;
      }

      switch(event.code) {
        case 'KeyW': this.movement.forward = true; break;
        case 'KeyS': this.movement.back    = true; break;
        case 'KeyA': this.movement.left    = true; break;
        case 'KeyD': this.movement.right   = true; break;
        case 'Space': this.movement.up     = true; break;
        case 'ShiftLeft': this.movement.down = true; break;
      }
    });

    // Key up
    document.addEventListener('keyup', (event) => {
      // If console is open, ignore movement key ups
      if (this.consoleOpen) {
        return;
      }

      switch(event.code) {
        case 'KeyW': this.movement.forward = false; break;
        case 'KeyS': this.movement.back    = false; break;
        case 'KeyA': this.movement.left    = false; break;
        case 'KeyD': this.movement.right   = false; break;
        case 'Space': this.movement.up     = false; break;
        case 'ShiftLeft': this.movement.down = false; break;
      }

    });

    // Listen for debugger toggle events
    window.addEventListener('texture-debugger-toggle', (event) => {
      this.debugMode = event.detail.visible;
      
      // If entering debug mode, unlock the controls
      if (this.debugMode && this.controls.isLocked) {
        this.controls.unlock();
      }
    });

    // Click to lock pointer (only when not in debug mode and console closed)
    document.addEventListener('click', (event) => {
      // Don't lock if we're in debug mode, if console is open, or if we clicked on a UI element
      const isUiElement = event.target.closest('.debug-panel') !== null ||
                          event.target.closest('#command-console-container') !== null;

      if (!this.debugMode && !this.consoleOpen && !isUiElement && !this.controls.isLocked) {
        this.controls.lock();
      }
    });
  }

  /**
   * Initialize a simple text input at the bottom of the screen for the console.
   * Hidden by default. We'll show/hide with a CSS toggle.
   */
  _initConsoleUI() {
    // Container for console
    this.consoleContainer = document.createElement('div');
    this.consoleContainer.id = 'command-console-container';
    this.consoleContainer.style.position = 'fixed';
    this.consoleContainer.style.left = '0';
    this.consoleContainer.style.right = '0';
    this.consoleContainer.style.bottom = '0';
    this.consoleContainer.style.padding = '8px';
    this.consoleContainer.style.display = 'none';  // hidden initially
    this.consoleContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    
    // (Optional) Some styling to make text visible
    this.consoleContainer.style.color = '#fff';
    this.consoleContainer.style.fontFamily = 'monospace';

    // Create an input field for entering commands
    this.consoleInput = document.createElement('input');
    this.consoleInput.type = 'text';
    this.consoleInput.style.width = '100%';
    this.consoleInput.style.padding = '8px';
    this.consoleInput.style.boxSizing = 'border-box';
    this.consoleInput.style.backgroundColor = '#222';
    this.consoleInput.style.color = '#fff';
    this.consoleInput.style.fontFamily = 'monospace';
    this.consoleInput.style.border = '1px solid #555';

    // When the user presses Enter, parse the command
    this.consoleInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const commandText = this.consoleInput.value.trim();
        this._executeCommand(commandText);
        this.consoleInput.value = '';  // Clear input after executing
      }
    });

    // Add elements to DOM
    this.consoleContainer.appendChild(this.consoleInput);
    document.body.appendChild(this.consoleContainer);
  }

  /**
   * Open/close the console and handle pointer lock
   */
  _toggleConsole() {
    this.consoleOpen = !this.consoleOpen;
    if (this.consoleOpen) {
      // Show console
      this.consoleContainer.style.display = 'block';
      // Unlock pointer controls if locked
      if (this.controls.isLocked) {
        this.controls.unlock();
      }
      // Focus input
      this.consoleInput.focus();
    } else {
      // Hide console
      this.consoleContainer.style.display = 'none';
      // Clear any leftover commands
      this.consoleInput.value = '';
      // Re-lock pointer if user wants to
      // (They can click or press a key; depends on your UX decision.)
    }
  }

  /**
   * Parse a command string and execute accordingly.
   * Example: teleport(3, 10, -5)
   * 
   * @param {string} commandString 
   */
  _executeCommand(commandString) {
    if (!commandString) return;
    
    // Basic parse for teleport command
    // Example expected command: teleport(1, 2, 3)
    // We'll do a simple regex to match teleport and capture the numbers
    const teleportRegex = /^teleport\s*\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)$/i;
    const match = commandString.match(teleportRegex);
    if (match) {
      // Extract positions
      const x = parseFloat(match[1]);
      const y = parseFloat(match[2]);
      const z = parseFloat(match[3]);
      // Teleport camera
      this.camera.position.set(x, y, z);

      console.log(`Teleported camera to: (${x}, ${y}, ${z})`);
      return;
    }

    // If not recognized, you might show an error or a help message
    console.warn(`Unrecognized command: ${commandString}`);
  }

  /**
   * Update camera/controls based on current movement flags.
   * This should be called each frame with `deltaTime`.
   * @param {number} delta - Time elapsed since last frame
   */
  update(delta) {
    // Don't move if in debug mode, console is open, or if controls aren't locked
    if (this.debugMode || this.consoleOpen || !this.controls.isLocked) {
      return;
    }
    
    // Handle movement
    const speed = this.movementSpeed * delta;
    if (this.movement.forward) this.controls.moveForward(speed);
    if (this.movement.back)    this.controls.moveForward(-speed);
    if (this.movement.left)    this.controls.moveRight(-speed);
    if (this.movement.right)   this.controls.moveRight(speed);

    if (this.movement.up) {
      this.camera.position.y += speed;
    }
    if (this.movement.down) {
      this.camera.position.y -= speed;
    }
  }
  
  /**
   * Manually set debug mode
   * @param {boolean} enabled - Whether debug mode is enabled
   */
  setDebugMode(enabled) {
    this.debugMode = enabled;
    if (enabled && this.controls.isLocked) {
      this.controls.unlock();
    }
  }
}
