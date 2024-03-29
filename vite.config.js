import { defineConfig } from "vite";
import { resolve } from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    ViteMinifyPlugin({}),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      }
    }
  },
});

