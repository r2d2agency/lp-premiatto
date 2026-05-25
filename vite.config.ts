import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  preview: {
    allowedHosts: ["whats-agente-premiatto.isyhhh.easypanel.host"],
  },
});
