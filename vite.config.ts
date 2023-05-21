/// <reference types="vitest" />
import { resolve } from 'node:path';

import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

const fileName = {
  es: "index.mjs",
  cjs: "index.cjs",
  iife: "index.iife.js",
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

export default defineConfig({
  base: "./",
  plugins: [
    dts({
      include: ['src/component/'],
    }),
    react(),
    tsConfigPaths()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "UiKitReact",
      formats,
      fileName: (format) => fileName[format],
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    },
  },
});
