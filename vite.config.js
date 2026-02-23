import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para GitHub Pages: si el repo es "usuario.github.io" usa base: '/'
  base: '/catalogo/',
})
