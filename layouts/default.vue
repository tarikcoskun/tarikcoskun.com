<template>
  <div>
    <div class="grid grid-cols-3 gap-2 md:gap-4">
      <div
        class="grid grid-cols-2 gap-2 p-4 bg-gray-800 md:py-2 md:px-24 md:grid-cols-6 col-span-full"
      >
        <NuxtLink
          to="/"
          class="p-1 text-xl text-center text-white bg-gray-900 rounded-lg col-span-full md:col-span-1"
          >Tarık Coşkun</NuxtLink
        >
        <NuxtLink
          to="/projects"
          class="p-1 text-xl text-center text-white bg-teal-500 rounded-lg md:col-span-1 md:col-start-5 hover:bg-teal-600"
          >Projects</NuxtLink
        >
        <NuxtLink
          to="/blog"
          class="p-1 text-xl text-center text-white bg-red-500 rounded-lg md:col-span-1 hover:bg-red-600"
          >Blog</NuxtLink
        >
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Roboto', sans-serif;
}
</style>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        class:
          'scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-gray-700',
      },
    }
  },
}
</script>
