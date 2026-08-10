import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
// For GitHub Pages deployment, set base to '/<repo-name>/' if deploying to a project page.
// When deploying to a custom domain or user page (username.github.io), keep base as '/'.
export default defineConfig({
 base: '/Portfolio1-Bolt/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
