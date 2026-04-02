import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    minify: 'terser',
    cssMinify: true,
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
