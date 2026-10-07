import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
// import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // svgr(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
