import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "federation_consumer",
      remotes: {
        federation_provider:
          "federation_provider@http://localhost:3000/mf-manifest.json",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  source: {
    entry: {
      index: "./src/index.tsx",
    },
  },
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
  },
  tools: {
    rspack: {
      watchOptions: {
        ignored: "**/src-tauri/**",
      },
    },
  },
});
