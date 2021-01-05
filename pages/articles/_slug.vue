<template>
<div class="p-4 md:px-48 md:py-8">

  <div class="grid gap-2">
    <div class="p-3 bg-gray-200 rounded-lg">
      <h1 class="text-2xl font-semibold text-gray-800">{{ article.title }}</h1>
      <p class="text-justify text-gray-700">{{ article.description }}</p>
    </div>
    <nuxt-content :document="article" class="text-lg text-justify text-gray-800" />
  </div>

</div>
</template>

<style lang="postcss">
.nuxt-content {
  @apply leading-relaxed;
}
.nuxt-content h1 {
  @apply font-semibold mt-2 text-3xl;
}
.nuxt-content h2 {
  @apply font-semibold mt-2 text-2xl;
}
.nuxt-content h3 {
  @apply font-semibold mt-2 text-xl;
}
.nuxt-content a {
  @apply text-blue-600 hover:text-blue-800 hover:underline;
}
.nuxt-content code {
  @apply bg-gray-800 text-gray-400 px-1 rounded py-px;
}
.nuxt-content blockquote {
  @apply py-1 px-4  bg-gray-100 mb-4 border-l-4 border-gray-400;
}
.nuxt-content blockquote > blockquote {
   @apply bg-gray-200;
 }
.nuxt-content pre {
  @apply bg-gray-800 rounded-md;
}
.nuxt-content ol {
  @apply list-decimal ml-8;
}
.nuxt-content ul {
  @apply list-disc ml-8;
}
.nuxt-content hr {
  @apply my-2;
}
.nuxt-content td, th {
  @apply px-2 py-1 border border-gray-400;
}
.nuxt-content tr:nth-child(odd) {
  @apply bg-gray-100;
}
.nuxt-content table {
  @apply mb-6;
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
