let description =
  "I'm Tarık, a young Front-End web developer from Turkey. I have been coding since 2018, when I started using Discord. I've always wondered how Discord bots work, so I started coding Discord bots. Since 2019, I'm creating websites using new technologies I learn."

export default {
  target: 'static',
  ssr: false,
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
