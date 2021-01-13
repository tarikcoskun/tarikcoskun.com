<template>
  <section
    class="grid gap-2 p-4 col-span-full md:gap-4 md:grid-cols-2 md:px-40"
  >
    <div class="grid gap-2 col-span-full">
      <div>
        <h1 class="text-4xl text-gray-700">{{ article.title }}</h1>
        <p
          class="text-lg text-justify text-gray-600"
          v-html="article.description"
        ></p>
      </div>
      <hr />
      <nuxt-content
        :document="article"
        class="text-lg text-justify text-gray-800"
      />
    </div>
  </section>
</template>

<style lang="postcss">
.nuxt-content {
  @apply leading-relaxed;
}

.nuxt-content h1 {
  @apply mt-2 text-3xl font-bold;
}
.nuxt-content h2 {
  @apply mt-2 text-2xl font-bold;
}
.nuxt-content h3 {
  @apply mt-2 text-xl font-bold;
}
.nuxt-content a {
  @apply text-blue-600 hover:text-blue-700 hover:underline;
}
.nuxt-content ol {
  @apply list-decimal ml-5;
}
ul {
  @apply list-disc ml-5;
}
.nuxt-content hr {
  @apply my-2;
}
</style>

<script>
export default {
  async asyncData({ $content, params }) {
    return {
      article: await $content('articles', params.slug).fetch(),
    }
  },
}
</script>
