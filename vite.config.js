import { defineConfig } from 'vite';

export default defineConfig({
  // Remove base path for Netlify deployment
  // base: '/voxel/',
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
