export default {
  head: {
    title: 'Tarık Coşkun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#1a202c' },
      {
        name: 'description',
        content: 'Howdy! I\'m Tarık, a young Front-End developer from Turkey. I spend most of my time playing games, coding and chatting. I have been coding since 2018, when I started using Discord. I\'ve always wondered how Discord bots work, so I started coding Discord bots. In 2019, I started creating Discord bot dashboards and since then, I\'m trying to create websites using new technologies I learn. In late 2020, I started learning Nuxt.js and Tailwind CSS and this website is only example for now.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        media: 'all',
      }
    ],
  },
  loading: { color: '#2d3748' },
  css: [],
  plugins: [
    { src: '~/plugins/Unicons', mode: 'client' }
  ],
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxt/content', '@nuxtjs/pwa'],
  build: {},
};
