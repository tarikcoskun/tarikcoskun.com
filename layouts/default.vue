<template>
  <div>
    <div class="m-4 lg:my-8 lg:px-56 sm:px-36">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="postcss">
html {
  font-family: 'Roboto', sans-serif;
}
body {
  @apply bg-gray-50 transform duration-75;
  min-height: 100vh;
}
section {
  @apply grid gap-4 md:gap-y-12;
}
h1 {
  @apply mb-2 text-3xl font-medium;
}
h2 {
  @apply mb-2 text-2xl font-medium;
}
p {
  @apply text-xl text-gray-700;
}
a {
  @apply text-gray-700;
}
.background {
  @apply bg-gray-200;
}
</style>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        class:
          'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400',
      },
    }
  },
}
</script>
