import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
   resolve: {
    alias: {      
      "~/": path.resolve(__dirname, "./src/"),
      "-/": path.resolve(__dirname, "./src/"),
    },
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true
  },
  optimizeDeps: {
    include: ["react-router-dom"]
  },
  css: {
    postcss: './postcss.config.js',
  },
});