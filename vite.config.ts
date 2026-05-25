import { defineConfig } from "vite";
import { defineConfig as defineTanstackConfig } from "@lovable.dev/vite-tanstack-config";

// Configurações do projeto
const config = defineTanstackConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});

export default {
  ...config,
  preview: {
    allowedHosts: ["whats-agente-premiatto.isyhhh.easypanel.host"],
  },
};
