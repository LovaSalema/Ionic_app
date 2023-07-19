import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()],
  server: {
    proxy: {
      "/api": {
        target: "https://pmdice.com",
        changeOrigin: true,
        rewrite : (path)=>path.replace(/^\/api/, ""),
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
