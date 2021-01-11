<template>
  <div>
    <div class="grid grid-cols-3">
      <div
        class="hidden grid-cols-6 gap-2 p-2 px-40 bg-gray-900 md:grid col-span-full"
      >
        <NuxtLink
          to="/"
          class="col-span-2 p-px text-xl text-left text-white rounded-lg hover:underline"
          >Tarık Coşkun</NuxtLink
        >
        <NuxtLink
          to="/positions"
          class="col-start-5 p-px text-xl text-center text-white bg-teal-600 rounded-md hover:bg-teal-700"
          >Positions</NuxtLink
        >
        <NuxtLink
          to="/articles"
          class="p-px text-xl text-center text-white bg-red-600 rounded-md hover:bg-red-700"
          >Articles</NuxtLink
        >
      </div>
      <div class="grid grid-cols-3 p-2 bg-gray-900 md:hidden col-span-full">
        <NuxtLink
          to="/positions"
          class="ml-3 text-xl text-gray-100 hover:underline"
          >Positions</NuxtLink
        >
        <NuxtLink
          to="/"
          class="text-xl font-bold text-center text-gray-100 hover:underline"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/articles"
          class="mr-3 text-xl text-right text-gray-100 hover:underline"
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
