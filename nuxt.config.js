let description =
  "I'm Tarık, a Front-End web developer from Turkey. I started coding in 2018, with Node.js. Since 2019, I'm learning more and more about web development since 2019 and creating websites with my knowledge."

export default {
  head: {
    title: 'Tarık Coşkun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#111' },
      {
        name: 'og:site_name',
        hid: 'og:site_name',
        content: 'tarikcoskun.xyz',
      },
      {
        name: 'description',
        hid: 'description',
        content: description,
      },
      {
        name: 'og:description',
        hid: 'og:description',
        content: description,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap',
        media: 'all',
      },
    ],
  },
  loading: { color: '#4a5568' },
  css: [],
  components: true,
  plugins: [{ src: '~/plugins/vue-unicons', mode: 'client' }],
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios', 'v-wave/nuxt'],
  vWave: {
    color: 'black',
    duration: 0.2,
    finalOpacity: 0.2
  },
  build: {},
}
