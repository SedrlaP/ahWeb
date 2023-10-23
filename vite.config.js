import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ahWeb/",
  build: {
    rollupOptions: {
      external: ["./assets/pneuservis.png", "./assets/autoservis.png", "./assets/lakovna.png", "./assets/pojstneudalosti.png"]
    }
  }
})
