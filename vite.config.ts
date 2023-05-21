/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';


export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    react(),
    tsConfigPaths()
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'UiKitReact',
      fileName: 'index'
    }
  }
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, "src/index.ts"),
  //     name: "UiKitReact",
  //     formats: ['es', 'umd'],
  //     fileName: (format) => `index.${format}.js`,
  //   },
  //   rollupOptions: {
  //     external: ["react", "react-dom"]
  //   },
  // },
});
