export default {
  target: "static",
  head: {
    title: "Tarık Coşkun",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#30343b" },
      {
        name: "description",
        content:
          "Personal website of Tarık Coşkun, 15 years old Turkish front-end developer",
      },
    ],
  },
  pwa: {
    manifest: {
      name: "Tarık Coşkun",
      theme_color: "#30343b",
    },
  },
  css: ["~/assets/main.scss"],
  components: true,
  tailwindcss: {
    viewer: false,
    jit: true,
  },
  buildModules: [
    "@nuxtjs/pwa",
    "@nuxtjs/tailwindcss",
    "@nuxt/postcss8",
    "@nuxtjs/google-fonts",
    "nuxt-animejs",
  ],
  modules: ["v-wave/nuxt", "@nuxtjs/svg"],
  vWave: {
    duration: 0.2,
    finalOpacity: 0.1,
  },
  colorMode: {
    classSuffix: "",
  },
  googleFonts: {
    families: {
      "IBM Plex Sans": {
        wght: [600],
      },
      Poppins: {
        wght: [400, 500],
      },
    },
    display: "swap",
  },
};
