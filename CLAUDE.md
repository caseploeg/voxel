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