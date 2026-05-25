import { defineConfig, mergeConfig } from "vite";
import { defineConfig as defineTanstackConfig } from "@lovable.dev/vite-tanstack-config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações do projeto
const baseConfig = defineTanstackConfig({
  tanstackStart: {
    server: { entry: "src/server.ts" },
  },
});

export default defineConfig(async (env) => {
  const base = typeof baseConfig === "function" ? await baseConfig(env) : baseConfig;
  
  return mergeConfig(base, {
    resolve: {
      alias: {
        "node:async_hooks": path.resolve(__dirname, "src/lib/async-hooks-mock.ts"),
      },
    },
    preview: {
      allowedHosts: ["whats-agente-premiatto.isyhhh.easypanel.host"],
    },
  });
});
