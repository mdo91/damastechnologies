import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoBase = "/damastechnologies/";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use repo subpath on production (GitHub Pages), root path in local dev.
  base: mode === "production" ? repoBase : "/",
}));
