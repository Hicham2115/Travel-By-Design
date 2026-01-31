import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          framer: ["framer-motion"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-slot",
            "lucide-react",
          ],
          swiper: ["swiper"],
        },
      },
    },
    // Reduce chunk size warning threshold
    chunkSizeWarningLimit: 1000,
    // Enable compression
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  server: {
    // Enable compression in dev
    middlewareMode: false,
  },
});
