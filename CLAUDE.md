# CLAUDE.md - Voxel Project Guide

## Build Commands
- `npm run dev` - Start development server with Vite

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
