export default {
  mode: 'spa',
  head: {
    title: 'Tarık Coşkun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      }
    ],
  },
  loading: { color: '#111' },
  css: [],
  plugins: [],
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxt/content'],
  build: {},
};
