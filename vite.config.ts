import { defineConfig, mergeConfig } from "vite";
import { defineConfig as defineTanstackConfig } from "@lovable.dev/vite-tanstack-config";
import path from "path";

// Configurações do projeto
const baseConfig = defineTanstackConfig({
  tanstackStart: {
    server: { entry: "src/server.ts" },
  },
});

export default mergeConfig(baseConfig, {
  resolve: {
    alias: {
      "node:async_hooks": path.resolve(__dirname, "src/lib/async-hooks-mock.ts"),
    },
  },
  preview: {
    allowedHosts: ["whats-agente-premiatto.isyhhh.easypanel.host"],
  },
});
