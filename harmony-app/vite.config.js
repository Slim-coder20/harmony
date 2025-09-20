import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(new URL(".", import.meta.url).pathname, "src"),
    },
  },
  server: {
    host: "0.0.0.0", // Important pour Docker
    port: 5173,
    watch: {
      usePolling: true, // Pour le hot reload dans Docker
    },
  },
});
