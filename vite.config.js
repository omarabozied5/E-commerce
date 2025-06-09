import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    define: {
      "process.env": JSON.stringify(process.env),
    },
    plugins: [react()],
    // Add these configurations for proper static asset handling
    base: "/", // Ensures correct base path for Vercel
    publicDir: "public", // Explicitly set public directory
    build: {
      outDir: "dist",
      assetsDir: "assets",
      copyPublicDir: true, // Ensures public folder contents are copied to build
      rollupOptions: {
        output: {
          // Ensure static assets maintain their structure
          assetFileNames: (assetInfo) => {
            // Keep images in their original structure
            if (
              assetInfo.name &&
              assetInfo.name.match(/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i)
            ) {
              return "assets/img/[name][extname]";
            }
            return "assets/[name][extname]";
          },
        },
      },
    },
    // Ensure proper asset handling during development
    server: {
      fs: {
        strict: false,
      },
    },
  });
};
