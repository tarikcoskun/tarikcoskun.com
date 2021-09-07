import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import windi from "vite-plugin-windicss";

export default defineConfig({
  plugins: [vue(), windi()],
});
