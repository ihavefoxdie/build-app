import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    proxy:{
      '/api': {
        target: 'http://localhost:8800/',
        changeOrigin: true,
        secure: false,
        prependPath: true,
      }
    }
  }
})