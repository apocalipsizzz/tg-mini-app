import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

const fullReloadAlways: PluginOption = {
  name: "full-reload-always",
  handleHotUpdate({ server }) {
    server.ws.send({ type: "full-reload" });
    return [];
  },
} as PluginOption;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
    fullReloadAlways,
  ],
  server: {
    port: 443,
    host: "0.0.0.0",
    hmr: {
      host: "localhost",
      port: 443,
    },
    https: {
      key: fs.readFileSync("./.cert/localhost-key.pem"),
      cert: fs.readFileSync("./.cert/localhost.pem"),
    },
    proxy: {
      "/bot": {
        target: "http://localhost:3000/bot",
      },
    },
    watch: {
      usePolling: true,
    },
  },
});
