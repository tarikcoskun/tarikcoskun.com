<template>
  <div class="m-4 md:px-64 md:my-12">
    <Nuxt />
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
