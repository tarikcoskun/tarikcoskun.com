export default {
  target: "static",
  head: {
    title: "Tarık Coşkun",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#3a3a3a" },
      {
        name: "description",
        content: "My personal website, portfolio, playground!",
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
  modules: ["@nuxtjs/svg"],
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
