1:24pm monday

- Implemented texture atlas system that dynamically loads and packs textures into a single GPU-friendly sheet
- Set up basic FPS movement with PointerLockControls - WASD + Space/Shift for 6DOF navigation
- Added simple procedural voxel terrain generation with randomized heights and materials
- Got particle system working with basic physics (velocity, lifespan) and removal when expired
- Integrated Three.js post-processing pipeline with SSAO and bloom effects
- Configured proper lighting with ambient and directional light sources
- Established proper texture filtering (nearest neighbor for that crisp pixel look)
- Canvas-based HUD overlay positioned but not yet populated with data
- Input handling system working properly with keyboard events
- Set up proper animation loop with delta-time based movement for frame-rate independence

1:44pm monday
- added stats
- tweaked lighting
- performance so far: can render 10x10 world , death at 100x100

5:14pm monday
- eat 
- refactor (headache) 
  - good for learning tho
  - project can now expand

11:27am tuesday
- refactors, 
  - input handler
  - voxel world
- getting ready for optimizations

12:26pm tuesday
- refactor, render manager
- perf: culling unseen sides of the mesh
- perf: building one mesh based on generated geometry

2:35pm tuesday
- add water shader support
- start adding better texture management 

5:16pm tuesday
- shader support within world
- multi faced assets
- debug screen

5:25pm tuesday
- dev console, teleport command

5:28pm tuesday
- add big warnings to block registry

6:10pm tuesday
- filter down atlas, there's a bug when there's too many textures

6:51pm tuesday
- add CROSS blocks
- flowers :)) 
- lighting should be disabled for CROSS blocks perhaps
- need to refactor voxelworld

7:27pm tuesday
- refactor voxelworld into meshbuilder and world data classes

7:43pm tuesday
- fix the atlas debug overlay so its more readable
