import { resolve } from "path"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import SVG from "vite-svg-loader"

export default defineConfig({
  plugins: [Vue(), SVG()],
  base: "./",
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }]
  }
})