import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Standalone build: bundles JS/CSS into a single index.html.
// Public assets (fonts, SVGs) are inlined as base64 afterward by
// scripts/inline-public-assets.mjs; the video stays external (see that script).
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'dist-single',
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    cssCodeSplit: false,
  },
})
