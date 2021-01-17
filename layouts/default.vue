<template>
  <div>
    <div class="grid grid-cols-3">
      <div
        class="flex-wrap items-center justify-center hidden p-2 bg-gray-900 md:flex col-span-full"
      >
        <NuxtLink
          to="/positions"
          class="px-4 ml-3 text-xl text-white md:flex-col md:hover:underline"
          >Positions</NuxtLink
        >
        <NuxtLink
          to="/"
          class="px-4 text-xl font-bold text-white md:flex-col md:hover:underline"
          >Tarık Coşkun</NuxtLink
        >
        <NuxtLink
          to="/articles"
          class="px-4 mr-3 text-xl text-white md:flex-col md:hover:underline"
          >Articles</NuxtLink
        >
      </div>
      <div class="grid grid-cols-3 p-2 bg-gray-900 md:hidden col-span-full">
        <NuxtLink to="/positions" class="ml-3 text-xl text-gray-100"
          >Positions</NuxtLink
        >
        <NuxtLink to="/" class="text-xl font-bold text-center text-gray-100"
          >Home</NuxtLink
        >
        <NuxtLink to="/articles" class="mr-3 text-xl text-right text-gray-100"
          >Articles</NuxtLink
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
