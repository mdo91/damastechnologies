import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
  plugins: [react()],
  // Serve from root for custom-domain GitHub Pages deployment.
  base: "/",
}));
