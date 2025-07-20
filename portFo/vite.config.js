import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Bio/', // <-- replace this with your actual repo name
  plugins: [
    react(),
    tailwindcss(),
  ],
})
