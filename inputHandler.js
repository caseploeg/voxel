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

    // Attach event listeners
    this._addEventListeners();
  }

  _addEventListeners() {
    // Key down
    document.addEventListener('keydown', (event) => {
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
      switch(event.code) {
        case 'KeyW': this.movement.forward = false; break;
        case 'KeyS': this.movement.back    = false; break;
        case 'KeyA': this.movement.left    = false; break;
        case 'KeyD': this.movement.right   = false; break;
        case 'Space': this.movement.up     = false; break;
        case 'ShiftLeft': this.movement.down = false; break;
      }
    });

    // Click to lock pointer (optional)
    document.addEventListener('click', () => {
      if (!this.controls.isLocked) {
        this.controls.lock();
      }
    });
  }

  /**
   * Update camera/controls based on current movement flags.
   * This should be called each frame with `deltaTime`.
   * @param {number} delta - Time elapsed since last frame
   */
  update(delta) {
    // Only move if pointer is locked
    if (this.controls.isLocked) {
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
  }
}
