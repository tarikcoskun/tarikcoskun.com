<template>
<div class="p-4 md:px-48 md:py-8">

  <div class="grid gap-2">
    <div class="p-3 bg-gray-100 rounded-lg">
      <h1 class="text-2xl text-gray-700">{{ article.title }}</h1>
      <p class="text-justify text-gray-700">{{ article.description }}</p>
    </div>
    <nuxt-content :document="article" class="text-lg text-justify text-gray-800" />
  </div>

</div>
</template>

<style lang="scss">
.nuxt-content {
  @apply leading-relaxed;
  h1 {
    @apply mt-2 text-3xl;
  }
  h2 {
    @apply mt-2 text-2xl;
  }
  h3 {
    @apply mt-2 text-xl;
  }
  a {
    @apply text-blue-600 hover:text-blue-800 hover:underline;
  }
  code {
    @apply bg-gray-800 text-gray-400 px-1 rounded py-px;
  }
  blockquote {
    @apply py-1 px-4  bg-gray-100 mb-4 border-l-4 border-gray-400;
    & > blockquote {
      @apply bg-gray-200;
    }
  }
  pre {
    @apply bg-gray-800 rounded-md;
  }
  ol {
    @apply list-decimal ml-8;
  }
  ul {
    @apply list-disc ml-8;
  }
  hr {
    @apply my-2;
  }
}
</style>

<script>
export default {
  async asyncData ({ $content, params }) {

    return {
      article: await $content('articles', params.slug).fetch()
    }
  }
}
</script>
