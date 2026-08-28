import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 用相对路径，部署到 GitHub Pages 任意子目录都不会 404
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  build: {
    emptyOutDir: false
  }
})
