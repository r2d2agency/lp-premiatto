import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Force bun preset for Docker compatibility
    nitro: {
      preset: "bun",
    },
  },
});
