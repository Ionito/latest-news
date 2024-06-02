/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  test: {
    globals: true,
    testTimeout: 10000,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    exclude: ['**/node_modules/**'],
    coverage: {
      include: ['src/**'],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      public: '/public',
    },
  },
});
