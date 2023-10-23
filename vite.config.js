import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ahWeb/",
  build: {
    rollupOptions: {
      external: ["pneuservis.png", "autoservis.png", "lakovna.png", "pojstneudalosti.png"]
    }
  }
})
