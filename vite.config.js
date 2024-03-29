import { defineConfig } from "vite";
import { resolve } from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

export default defineConfig({
  plugins: [
    ViteMinifyPlugin({}),
    pluginPurgeCss(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      }
    }
  },
});

