// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://pscchcit-001-site1.atempurl.com', // Your API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
  }
});
