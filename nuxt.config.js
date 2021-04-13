import { resolve } from "path";

export default {
  srcDir: "src",
  head: {
    title: "Tarık Coşkun",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#374151" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap",
        media: "all",
      },
    ],
  },
  pwa: {
    manifest: {
      name: "tarikcoskun.xyz",
      theme_color: "#374151",
    },
  },
  css: ["@/assets/css/main.scss"],
  components: true,
  tailwindcss: {
    configPath: resolve("./tailwind.config.js"),
    viewer: false,
  },
  plugins: [
    { src: "~/plugins/vue-unicons", mode: "client" },
    { src: "~/plugins/vue-typer", ssr: false },
  ],
  buildModules: ["@nuxtjs/pwa", "@nuxtjs/tailwindcss"],
  modules: ["v-wave/nuxt"],
  vWave: {
    color: "black",
    duration: 0.2,
    finalOpacity: 0.2,
  },
  build: {},
};
