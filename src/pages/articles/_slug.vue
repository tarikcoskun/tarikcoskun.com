<template>
  <section class="md:mx-36">
    <div
      class="absolute top-0 left-0 w-full h-2"
      style="background: #3b82f6"
    ></div>
    <div class="my-8">
      <h1 class="text-2xl">{{ article.title }}</h1>
      <p class="text-lg" v-html="article.description"></p>
    </div>
    <nuxt-content :document="article" />
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    return {
      article: await $content("articles", params.slug).fetch(),
    };
  },
};
</script>
