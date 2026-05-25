import { defineConfig } from "vite";
import { defineConfig as defineTanstackConfig } from "@lovable.dev/vite-tanstack-config";

// Combine the Lovable/TanStack config with standard Vite preview settings
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
