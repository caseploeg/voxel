# Voxel Engine TODO

## Profiler Implementation Plan

### Phase 0: Industry Standard Three.js Profilers
- [x] Install and configure three.js stats.js for basic performance monitoring
- [x] Add spector.js for WebGL call inspection and debugging
- [ ] Install three.js editor/inspector for runtime scene debugging
- [ ] Set up Chrome DevTools Performance tab integration
- [ ] Configure WebGL Insight extension for GPU profiling
- [ ] Add three-mesh-bvh for spatial query performance analysis
- [ ] Install and configure r3f-perf (if using React Three Fiber)
- [x] Set up three.js debug UI with lil-gui for runtime tweaking

#### Integration & Reporting for Phase 0
- [x] Create unified profiler dashboard that aggregates data from all tools
- [x] Set up automated data collection from stats.js, spector.js, and Chrome DevTools
- [x] Implement performance report generator that combines findings from all profilers
- [x] Add alert system for critical performance issues detected by any tool
- [x] Create performance regression detection using baseline data from multiple tools
- [ ] Set up automated screenshots/recordings when performance issues are detected
- [x] Implement export functionality for performance reports (JSON, CSV, PDF)
- [x] Add correlation analysis between different profiler findings
- [x] Create performance issue priority ranking system based on tool findings
- [x] Set up continuous monitoring that runs profilers in background during development

### Phase 1: Core Profiler Infrastructure
- [x] Create `Profiler` class to track performance metrics
- [x] Implement timing utilities for measuring frame times
- [x] Add memory usage tracking
- [x] Create performance data storage and history
- [x] Add configuration options for profiler sensitivity

### Phase 2: Three.js Renderer Profiling
- [x] Hook into Three.js render loop to measure frame times
- [x] Track draw calls and geometry complexity
- [ ] Monitor texture uploads and GPU memory usage
- [ ] Measure shader compilation times
- [x] Track vertex/triangle counts per frame

### Phase 3: Voxel-Specific Profiling
- [x] Profile chunk generation and mesh building performance
- [x] Track voxel world update times
- [ ] Monitor culling algorithm efficiency
- [ ] Measure texture atlas operations
- [ ] Profile level-of-detail (LOD) system performance

### Phase 4: Automatic Bottleneck Detection
- [x] Implement threshold-based alerts for frame time spikes
- [x] Add automatic flagging of expensive operations
- [x] Create performance regression detection
- [x] Implement statistical analysis of performance patterns
- [x] Add early warning system for memory leaks

### Phase 5: Profiler UI and Visualization
- [x] Create real-time performance overlay
- [x] Add performance graphs and charts
- [x] Implement performance history viewer
- [x] Create bottleneck identification display
- [x] Add exportable performance reports

## Optimization Techniques

### Rendering Optimizations
- [ ] Implement frustum culling for chunks
- [ ] Add occlusion culling for hidden chunks
- [ ] Optimize mesh generation with greedy meshing algorithm
- [ ] Implement level-of-detail (LOD) system for distant chunks
- [ ] Use instanced rendering for repeated elements
- [ ] Implement texture atlasing to reduce draw calls
- [ ] Add batch rendering for similar objects
- [ ] Optimize shader uniforms and attributes

### Memory Management
- [ ] Implement object pooling for frequently created objects
- [ ] Add chunk unloading for distant areas
- [ ] Optimize texture memory usage
- [ ] Implement geometry compression
- [ ] Add garbage collection optimization
- [ ] Use typed arrays for better memory layout
- [ ] Implement efficient data structures for voxel storage

### CPU Performance
- [ ] Move chunk generation to web workers
- [ ] Implement multithreaded mesh building
- [ ] Add async chunk loading system
- [ ] Optimize voxel data structures (octrees, sparse arrays)
- [ ] Implement efficient neighbor checking
- [ ] Add spatial indexing for faster queries
- [ ] Optimize collision detection algorithms

### GPU Performance
- [ ] Implement vertex buffer optimization
- [ ] Add geometry instancing for repeated structures
- [ ] Optimize texture sampling and filtering
- [ ] Implement efficient shadow mapping
- [ ] Add GPU-based culling techniques
- [ ] Optimize fragment shader performance
- [ ] Implement compute shaders for appropriate tasks

### Network and Loading
- [ ] Implement chunk streaming system
- [ ] Add progressive mesh loading
- [ ] Optimize texture loading and compression
- [ ] Implement efficient serialization formats
- [ ] Add predictive chunk loading
- [ ] Implement compression for network data

### Algorithm Optimizations
- [ ] Implement efficient voxel meshing algorithms
- [ ] Add spatial partitioning (octrees, BSP trees)
- [ ] Optimize pathfinding algorithms
- [ ] Implement efficient collision detection
- [ ] Add predictive systems for user movement
- [ ] Optimize physics simulation
- [ ] Implement efficient lighting calculations

### Profiling and Monitoring
- [ ] Add performance budgeting system
- [ ] Implement automated performance testing
- [ ] Create performance regression detection
- [ ] Add A/B testing for optimization techniques
- [ ] Implement continuous performance monitoring
- [ ] Create performance benchmarking suite

## Implementation Priority
1. **High Priority**: Profiler infrastructure and renderer profiling
2. **Medium Priority**: Core rendering optimizations and memory management
3. **Low Priority**: Advanced optimizations and nice-to-have features

## Notes
- Focus on measuring before optimizing
- Profile on target devices and browsers
- Consider both desktop and mobile performance
- Document performance improvements with metrics
- Test optimizations thoroughly to avoid regressions

## Profiler Integration Reminders
- **Cross-Tool Validation**: Always validate performance issues found by one tool with another (e.g., stats.js frame drops should correlate with spector.js WebGL call spikes)
- **Baseline Establishment**: Create performance baselines using multiple tools before making any optimizations
- **Report Correlation**: Ensure automated reports include data from all active profilers to avoid missing critical issues
- **Alert Thresholds**: Set up cascading alerts where issues detected by multiple tools trigger higher priority notifications
- **Historical Tracking**: Maintain performance history across all tools to identify trends and regressions
- **Tool-Specific Strengths**: Use stats.js for frame timing, spector.js for draw calls, Chrome DevTools for memory, WebGL Insight for GPU bottlenecks
- **Development Integration**: Ensure profilers run automatically during development and CI/CD processes
- **Performance Budget**: Set performance budgets that are monitored by all profiling tools simultaneously

---

## 🔴 Critical Issues / Technical Debt

### 1. TERRAIN_TYPE.DENSITY Crashes
**File:** `terrainGenerator.js:7, 62-64`
**Issue:** `AdvancedDensityTerrain` import is commented out, but the switch case still references it.
**Impact:** Selecting DENSITY terrain type will crash with `ReferenceError`.
```javascript
// Line 7: Import is commented out
//import { AdvancedDensityTerrain, BLOCK as DENSITY_BLOCK } from './improvedPerlin.js';

// Line 62-64: But it's still used
case TERRAIN_TYPE.DENSITY:
  generator = new AdvancedDensityTerrain(seed); // CRASH!
```
**Fix:** Either uncomment the import or remove/disable the DENSITY case.

### 2. DemoTerrain Generates Empty Chunks
**File:** `demo.js:75-81`
**Issue:** DemoTerrain only fills bedrock at y=0, the terrain layer logic is incomplete.
```javascript
for (let y = 0; y < maxHeight; y++) {
  if (y === 0) {
    chunk[x][z][y] = BLOCK.STONE; // Only bedrock
  }
  // Rest is air - no terrain!
}
```
**Impact:** Demo terrain type produces nearly empty worlds.

### 3. geometryWorker.js is a Stub
**File:** `workers/geometryWorker.js`
**Issue:** Only creates a hardcoded test cube, doesn't actually build chunk geometry.
**Impact:** Worker-based geometry building is non-functional.

---

## 🟡 Dead Code / Unused Files

### 1. batchManager.js - Not Used
**File:** `batchManager.js` (313 lines)
**Issue:** Complete module but never imported anywhere in the codebase.
**Action:** Delete or integrate into the rendering pipeline.

### 2. Duplicate Direction Cache
**File:** `meshBuilder.js:142-211, 510-579`
**Issue:** `_createDirectionsCache()` and `_getDirections()` are nearly identical.
**Action:** Remove `_getDirections()`, use cached version only.

### 3. Dead Code in chunkWorker.js
**File:** `workers/chunkWorker.js:329-345`
**Issue:** `getBlockType()` has unreachable code after `return 0;`
```javascript
function getBlockType(worldX, worldY, worldZ, surfaceHeight) {
  return 0;  // Always returns here
  if (!terrainGen) { // Never reached
    return worldY < 5 ? 3 : 2;
  }
}
```

### 4. Commented Out Chunk Generation
**File:** `workers/chunkWorker.js:78-115, 117-193`
**Issue:** Multiple commented-out versions of `generateChunk` function.
**Action:** Remove dead code.

---

## 🟡 Code Duplication

### 1. Block Processing Duplication
**Files:** `meshBuilder.js`
- `_processBlocks()` (lines 611-750)
- `_processChunkBlocks()` (lines 306-463)

**Issue:** These methods are ~90% identical. Only difference is coordinate handling.
**Action:** Extract shared logic into a helper method.

### 2. Dual Storage Systems
**Files:** `voxelWorld.js`, `worldData.js`
**Issue:** Both `WorldData` and `ChunkManager` are used for "legacy support".
```javascript
// voxelWorld.js:19-20
this.worldData = new WorldData(...);   // Legacy
this.chunkManager = new ChunkManager(...); // Modern
```
**Action:** Migrate fully to ChunkManager, remove WorldData.

---

## 🟡 Debug/Development Leftovers

### 1. Excessive Console Logging
**Impact:** ~50+ console.log statements across the codebase.
**Files with most logs:**
- `meshBuilder.js` (15+)
- `voxelWorld.js` (10+)
- `workers/chunkWorker.js` (5+)

**Action:** Add DEBUG flag or use proper logging system.

### 2. Hardcoded Debug Flags
**File:** `workers/chunkManager.js:107`
```javascript
debug_more_poppies: true  // Hardcoded!
```
**Action:** Make configurable or remove.

---

## 🔵 Headless Mode Requirements

### Components Needing Abstraction for CLI Benchmarks

| Component | Browser Dependency | Abstraction Needed |
|-----------|-------------------|-------------------|
| `main.js` | DOM events, window | Separate entry point |
| `renderManager.js` | WebGLRenderer | Mock renderer |
| `inputHandler.js` | PointerLockControls | Remove/mock |
| `profiler.js` | lil-gui, DOM | Console output |
| `textureManager.js` | Image, Canvas | Node.js loader |
| `workers/` | Web Workers | Node.js worker_threads |

### Worker Thread Browser Dependency
**File:** `workers/chunkManager.js`
**Issue:** Uses `navigator.hardwareConcurrency` which doesn't exist in Node.js.
**Fix:** Add fallback: `globalThis.navigator?.hardwareConcurrency || 4`

---

## 📋 Recommended Priority Order

1. **Fix DENSITY terrain crash** - Prevents runtime errors
2. **Remove dead code** - Reduces confusion
3. **Fix DemoTerrain** - Makes demo mode functional
4. **Add DEBUG flag for console.log** - Cleaner output
5. **Consolidate WorldData/ChunkManager** - Simplify architecture
6. **Implement headless mode abstractions** - Enable CLI benchmarking
7. **Integrate BatchManager** - Performance improvement

---

## 🛠️ Utility Scripts

Run these to analyze the codebase:

```bash
# Analyze codebase for issues
node scripts/analyze-codebase.js

# Validate terrain generation
node scripts/validate-terrain.js

# Check imports/exports
node scripts/check-imports.js
```

---

*Last updated: 2026-01-12*