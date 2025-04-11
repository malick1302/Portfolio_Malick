import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ],
})


module.exports = {
  content: [
    // Ajoute ici les chemins de tes fichiers
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
