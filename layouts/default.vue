<template>
  <div>
    <div class="grid grid-cols-3 gap-2 md:gap-4">
      <div
        class="grid grid-cols-2 gap-2 p-4 bg-gray-900 md:p-2 md:px-24 md:grid-cols-8 col-span-full"
      >
        <NuxtLink
          to="/"
          class="text-xl text-center text-white bg-black bg-opacity-25 rounded-lg bg-gray-black md:bg-transparent md:text-left col-span-full md:col-span-1 hover:underline"
          >Tarık Coşkun</NuxtLink
        >
        <NuxtLink
          to="/projects"
          class="text-xl text-center text-white bg-teal-600 rounded-md md:col-span-1 md:col-start-7 hover:bg-teal-700"
          >Projects</NuxtLink
        >
        <NuxtLink
          to="/blog"
          class="text-xl text-center text-white bg-red-600 rounded-md md:col-span-1 hover:bg-red-700"
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
