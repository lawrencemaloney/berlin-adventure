import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
  // plugins: [react()],

// })

// CODE BELOW allows Public Folder contents to be served but not included in DIST 

export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      src: "./src",
    },
  },
  publicDir: command === "serve" ? "public" : false,
}));
