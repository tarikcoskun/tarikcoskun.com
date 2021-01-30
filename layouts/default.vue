<template>
  <div>
    <div class="m-4 md:px-64 md:mt-12">
      <Nuxt />
    </div>
    <ThemeSwitch />
  </div>
</template>

<style lang="postcss">
html {
  font-family: 'Roboto', sans-serif;
}
body {
  @apply bg-gray-50 transform duration-75;
}
section {
  @apply grid gap-4 md:gap-y-12;
}
h1 {
  @apply mb-2 text-3xl font-bold text-center text-gray-800 md:text-left;
}
h2 {
  @apply text-2xl font-bold text-center text-gray-800;
}
p {
  @apply text-xl text-justify text-gray-700;
}
.dark-mode body {
  @apply bg-gray-800;
}
.dark-mode h1,
.dark-mode h2 {
  @apply text-gray-100 font-normal;
}
.dark-mode p {
  @apply text-gray-300;
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
