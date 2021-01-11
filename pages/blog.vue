<template>
  <section
    class="grid gap-2 p-4 mb-2 col-span-full md:gap-4 md:grid-cols-2 md:pb-12 md:px-40"
  >
    <nuxt-link
      :to="`/articles/${article.slug}`"
      class="p-3 bg-gray-800 border-2 border-gray-900 rounded-lg hover:bg-gray-900"
      v-for="article in articles"
      :key="article.id"
    >
      <h1 class="text-2xl text-white">{{ article.title }}</h1>
      <p class="-mt-1 text-gray-100 line-clamp-2">
        {{ article.description }}
      </p>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Blog - Tarık Coşkun',
    }
  },
  async asyncData({ $content, params }) {
    return {
      articles: await $content('articles', params.slug).fetch(),
    }
  },
}
</script>
