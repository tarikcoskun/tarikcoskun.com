<template>
<div class="p-4 md:px-48 md:py-8">

  <NuxtLink to="/" class="inline-block p-3 ml-5 -my-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuNjcgMGwyLjgzIDIuODI5LTkuMzM5IDkuMTc1IDkuMzM5IDkuMTY3LTIuODMgMi44MjktMTIuMTctMTEuOTk2eiIvPjwvc3ZnPg=="></NuxtLink>

    <div class="grid gap-2 p-6">
    <div class="px-4 py-2 bg-gray-200 rounded-lg">
      <h1 class="text-2xl font-semibold text-gray-800">{{ article.title }}</h1>
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
    @apply font-semibold mt-2 text-3xl;
  }
  h2 {
    @apply font-semibold mt-2 text-2xl;
  }
  h3 {
    @apply font-semibold mt-2 text-xl;
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
  td, th {
    @apply px-2 py-1 border border-gray-400;
  }
  tr:nth-child(odd) {
    @apply bg-gray-100;
  }
  table {
    @apply mb-6;
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
