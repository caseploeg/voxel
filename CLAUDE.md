# CLAUDE.md - Voxel Project Guide

## Build Commands
- `npm run dev` - Start development server with Vite
- `npm test` - Run test suite
- `npm run analyze` - Analyze codebase for issues
- `npm run validate:terrain` - Validate terrain generation
- `npm run check:imports` - Check import/export integrity

## Technical Debt & TODOs
See [TODO.md](./TODO.md) for:
- Critical bugs (DENSITY terrain crash, broken DemoTerrain)
- Dead code inventory (batchManager.js unused, duplicate methods)
- Code duplication issues
- Headless mode requirements

## Code Style Guidelines

### Imports
- Import Three.js modules first, followed by project modules
- Group imports by functionality

### Formatting
- Use 2-space indentation
- Use semicolons at the end of statements
- Keep lines under 100 characters

### Naming Conventions
- Classes: PascalCase (e.g., VoxelWorld, TextureManager)
- Methods/Functions: camelCase (e.g., initScene, buildCulledMesh)
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

### Error Handling
- Use try/catch blocks for async operations
- Log errors to console with descriptive messages

### Documentation
- Use JSDoc-style comments for classes and methods
- Provide inline comments for complex logic

### Architecture
- Use classes to encapsulate related functionality
- Follow Three.js patterns for scene setup and rendering
- Keep main.js as the entry point with minimal code

## Project Understanding Notes

### Current Performance Profiling Status
- **Stats.js**: Already integrated in main.js (line 14-17) showing basic FPS/frame time
- **Debug Menu**: Comprehensive debug overlay with performance metrics (lines 230-415)
- **Existing Performance Tracking**: 
  - Generation stats tracking (chunk generation times)
  - Build stats tracking (mesh building times)
  - Worker vs main thread timing
  - Memory usage monitoring

### Key Performance Areas Already Identified
1. **Chunk Generation**: Uses web workers for terrain generation (workers/ directory)
2. **Mesh Building**: Separate performance tracking for mesh construction
3. **Rendering**: Toggle between chunk-based and single mesh rendering
4. **Dynamic Loading**: Chunk loading/unloading based on camera position
5. **Texture Management**: Texture atlas system with debugging capabilities

### Architecture Overview
- **Main Entry**: main.js - Game class initialization and rendering loop
- **Voxel World**: voxelWorld.js - Core world management
- **Texture System**: textureManager.js - Texture atlas and loading
- **Mesh Building**: meshBuilder.js - Geometry generation
- **Terrain Generation**: terrainGenerator.js - World generation algorithms
- **Worker System**: workers/ - Background chunk generation
- **Rendering**: renderManager.js - Three.js rendering pipeline

### Current Profiling Capabilities
- Real-time performance overlay (F3 to toggle)
- Draw call and triangle count tracking
- Chunk generation timing statistics
- Mesh building performance metrics
- Worker thread utilization monitoring
- Camera position and view distance tracking

### Completed Profiler Implementation
1. ✅ Added industry standard tools (spector.js, lil-gui)
2. ✅ Enhanced existing stats.js integration with comprehensive metrics
3. ✅ Created unified profiler dashboard building on existing debug menu
4. ✅ Implemented automated performance report generation
5. ✅ Added bottleneck detection and alerting system
6. ✅ Added comprehensive help system with keyboard controls
7. ✅ Implemented intelligent alert management with throttling and limits
8. ✅ Consolidated dual profiler systems into single interface
9. ✅ Fixed Space key input handling bug
10. ✅ Relocated alert toasts to bottom of screen for better UX

### Help System Features
- **Welcome Message**: Brief intro when game starts
- **Help Menu**: Press H to toggle comprehensive controls guide
- **Help Hint**: Persistent green button in bottom-left corner
- **ESC Support**: Close help menu with Escape key
- **Close Button**: X button in top-right of help menu
- **Organized Layout**: Controls grouped by category (Debug, World, Profiler, Movement)

### Keyboard Controls Summary
- **H** - Toggle help menu
- **F3** - Toggle debug overlay
- **F8-F12** - Profiler controls (recording, capture, baseline, report, export)
- **F1, F4-F6** - World controls (terrain, water shader, chunk rendering)
- **ESC** - Close help menu

### Alert Management System
- **Maximum 5 visible alerts** - Prevents screen spam
- **Intelligent throttling** - Same alert type limited to once per 2-10 seconds
- **Oldest alerts removed first** - FIFO system when limit reached
- **Fade-out animations** - Smooth transitions when alerts disappear
- **Configurable limits** - Max alerts adjustable via lil-gui (1-10)
- **Alert categories**: Threshold warnings, frame spikes, bottleneck detection
- **Bottom positioning** - Alerts appear at bottom of screen for better UX

### Profiler System Consolidation
- **Single interface** - Removed duplicate blue stats.js panels
- **Unified metrics** - All performance data in lil-gui profiler
- **Clean debug panel** - Removed performance metrics and control info
- **Fixed Space key** - Prevented default browser behavior causing rendering split
- **Organized profiler GUI** - Grouped into Current Frame, Averages, and Voxel Engine sections

### Final UI Layout
- **Top-left DEBUG INFO**: Position, shader types, rendering mode, chunk info, worker status
- **Top-right Profiler GUI**: Comprehensive performance metrics organized in folders
- **Bottom-right Help**: Green help hint button
- **Bottom-center Alerts**: Performance warning toasts (max 5, intelligently throttled)
- **Press H**: Full help screen with all controls

---

## Headless Mode Implementation Plan

### Overview
Add a headless mode to enable CLI-based performance benchmarking without a browser/GUI. This allows automated testing, CI/CD integration, and reproducible performance measurements.

### Architecture Design

#### 1. Entry Points
```
main.js           → Browser entry (existing)
headless.js       → Node.js CLI entry (new)
```

#### 2. Core Abstraction Layer
Create an abstraction layer to separate engine logic from browser-specific APIs:

```
src/
├── core/                    # Browser-agnostic core
│   ├── Engine.js           # Main engine class (abstract)
│   ├── WorldGenerator.js   # Terrain generation (reuse existing)
│   ├── ChunkManager.js     # Chunk data management
│   └── BenchmarkRunner.js  # Benchmark orchestration
├── browser/                 # Browser-specific implementations
│   ├── BrowserEngine.js    # extends Engine
│   ├── BrowserRenderer.js  # Three.js WebGL
│   └── BrowserWorkers.js   # Web Workers
├── headless/                # Node.js implementations
│   ├── HeadlessEngine.js   # extends Engine
│   ├── HeadlessRenderer.js # Mock or headless-gl
│   └── NodeWorkers.js      # worker_threads
└── cli/
    ├── benchmark.js        # CLI benchmark runner
    └── commands/           # Subcommands
```

#### 3. Dependencies for Headless Mode
```json
{
  "devDependencies": {
    "headless-gl": "^6.0.0",     // WebGL in Node.js (optional)
    "commander": "^12.0.0",       // CLI argument parsing
    "ora": "^8.0.0"               // CLI spinners/progress
  }
}
```

#### 4. Benchmark Scenarios

| Benchmark | Description | Metrics |
|-----------|-------------|---------|
| `chunk-gen` | Generate N chunks | Time per chunk, memory |
| `mesh-build` | Build mesh for chunks | Vertices/sec, time |
| `full-world` | Generate complete world | Total time, peak memory |
| `streaming` | Simulate player movement | Chunks/sec loaded |
| `render-sim` | Simulate render passes | Draw calls, triangles |

#### 5. CLI Interface Design
```bash
# Run all benchmarks
npm run benchmark

# Specific benchmark with options
npm run benchmark -- --scenario chunk-gen --chunks 100 --seed 12345

# Output formats
npm run benchmark -- --output json > results.json
npm run benchmark -- --output table

# Compare with baseline
npm run benchmark -- --compare baseline.json

# CI mode (exit code based on thresholds)
npm run benchmark -- --ci --max-chunk-time 50ms
```

### Implementation Phases

#### Phase 1: Core Abstraction
- [ ] Create `src/core/Engine.js` base class
- [ ] Extract terrain generation into standalone module
- [ ] Create `BenchmarkRunner.js` for test orchestration
- [ ] Abstract worker management interface

#### Phase 2: Headless Implementation
- [ ] Implement `HeadlessEngine.js`
- [ ] Create Node.js worker thread wrapper
- [ ] Implement mock renderer for metrics collection
- [ ] Optional: headless-gl integration for GPU benchmarks

#### Phase 3: CLI & Benchmarks
- [ ] Create `cli/benchmark.js` entry point
- [ ] Implement benchmark scenarios
- [ ] Add JSON/table output formatters
- [ ] Add baseline comparison feature

#### Phase 4: CI Integration
- [ ] Add `npm run benchmark` script
- [ ] Create GitHub Actions workflow
- [ ] Add performance regression detection
- [ ] Generate benchmark reports

### Key Files to Modify/Create

#### New Files
| File | Purpose |
|------|---------|
| `headless.js` | CLI entry point |
| `src/core/Engine.js` | Abstract engine base |
| `src/core/BenchmarkRunner.js` | Benchmark orchestration |
| `src/headless/HeadlessEngine.js` | Node.js engine |
| `src/headless/MockRenderer.js` | Metrics-only renderer |
| `src/headless/NodeWorkerPool.js` | worker_threads pool |
| `cli/benchmark.js` | CLI command handler |

#### Files to Refactor
| File | Changes Needed |
|------|----------------|
| `voxelWorld.js` | Extract core logic to Engine base |
| `workers/chunkWorker.js` | Make isomorphic (browser/node) |
| `terrainGenerator.js` | Already mostly portable |
| `meshBuilder.js` | Add headless geometry generation |
| `profiler.js` | Extract metrics collection from GUI |

### Browser/Node Compatibility Matrix

| Component | Browser | Node.js | Notes |
|-----------|---------|---------|-------|
| Terrain Gen | ✅ | ✅ | Pure JS, fully portable |
| Noise Functions | ✅ | ✅ | noisejs works in both |
| Chunk Storage | ✅ | ✅ | Uint16Array works in both |
| Web Workers | ✅ | ❌ | Need worker_threads wrapper |
| THREE.Scene | ✅ | ✅ | Works without rendering |
| WebGLRenderer | ✅ | ⚠️ | Needs headless-gl |
| DOM APIs | ✅ | ❌ | Must be abstracted |
| Performance.now | ✅ | ✅ | Works in both |

### Benchmark Output Format
```json
{
  "meta": {
    "version": "1.0.0",
    "timestamp": "2026-01-12T...",
    "platform": "linux",
    "nodeVersion": "v20.x.x",
    "seed": 12345
  },
  "results": {
    "chunk-gen": {
      "iterations": 100,
      "totalMs": 523.4,
      "avgMs": 5.234,
      "minMs": 3.1,
      "maxMs": 12.8,
      "stdDev": 1.2,
      "memoryPeakMB": 128.5
    },
    "mesh-build": {
      "iterations": 100,
      "verticesGenerated": 1250000,
      "verticesPerSecond": 2890000,
      "avgMs": 4.32
    }
  },
  "summary": {
    "passed": true,
    "warnings": [],
    "errors": []
  }
}
```

### Development Notes
- Three.js can create Scene/Geometry without WebGL context
- Focus on chunk generation and mesh building metrics first
- GPU rendering benchmarks can be added later with headless-gl
- Worker thread pool should match navigator.hardwareConcurrency pattern
