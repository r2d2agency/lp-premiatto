import { defineConfig } from "vite";
import { defineConfig as defineTanstackConfig } from "@lovable.dev/vite-tanstack-config";

// Configurações do projeto
const config = defineTanstackConfig({
  tanstackStart: {
    server: { entry: "src/server.ts" },
  },
});

export default {
  ...config,
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
  preview: {
    allowedHosts: ["whats-agente-premiatto.isyhhh.easypanel.host"],
  },
};
