import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages deployment needs the repository name as base path
  base: process.env.NODE_ENV === 'production' ? '/voxel/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three']
        }
      }
    }
  },
  server: {
    port: 3000
  }
});
