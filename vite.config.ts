import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    minify: "esbuild",
    esbuildOptions: {
      drop: ["console", "debugger"],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "three-stdlib"],
          r3f: ["@react-three/fiber", "@react-three/drei", "@react-three/postprocessing", "@react-three/rapier"],
          gsap: ["gsap", "@gsap/react"],
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
