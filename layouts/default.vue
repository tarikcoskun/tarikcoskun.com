<template>
  <div>
    <div class="grid grid-cols-3 gap-2 md:gap-4">
      <div
        class="grid grid-cols-2 gap-2 p-4 pb-0 md:bg-gray-900 md:p-2 md:px-40 md:grid-cols-8 col-span-full"
      >
        <NuxtLink
          to="/"
          class="p-1 text-xl text-center text-white bg-gray-800 rounded-lg md:bg-opacity-25 md:p-px bg-gray-black md:bg-transparent md:text-left col-span-full md:col-span-1 hover:bg-gray-900 md:hover:underline"
          >Tarık Coşkun</NuxtLink
        >
        <NuxtLink
          to="/positions"
          class="p-1 text-xl text-center text-white bg-teal-600 rounded-md md:p-px md:col-span-1 md:col-start-7 hover:bg-teal-700"
          >Positions</NuxtLink
        >
        <NuxtLink
          to="/articles"
          class="p-1 text-xl text-center text-white bg-red-600 rounded-md md:p-px md:col-span-1 hover:bg-red-700"
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
