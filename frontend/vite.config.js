import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Static hosts show 404.html for unknown paths: make it the app too, so reloading
// a page like /book/santoor-1 still opens the app (the router then shows the right screen)
const spaFallback = () => ({
  name: 'spa-404-fallback',
  closeBundle() {
    const dist = resolve(import.meta.dirname, 'dist')
    copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  build: {
    rollupOptions: {
      output: {
        // libraries change rarely: their own file stays cached across app updates
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
