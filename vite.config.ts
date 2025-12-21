import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  // ✅ MUST MATCH REPO NAME EXACTLY
  base: "/red-flag-app/",

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'build',
  },

  server: {
    port: 3000,
    open: true,
  },
})
