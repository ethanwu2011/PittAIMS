import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// Custom plugin to handle missing directories
const handleMissingDirectories = () => {
  return {
    name: 'handle-missing-directories',
    buildStart() {
      // Create the aimmedico-connect-images directory if it doesn't exist
      const dirPath = path.resolve(__dirname, 'public/aimmedico-connect-images');
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log('Created missing directory: public/aimmedico-connect-images');
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    handleMissingDirectories()
  ],
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  publicDir: 'public',
}));
