<template>
  <div>
    <div class="m-4 -mb-8 md:mt-8 md:-mb-4 md:px-56">
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
  @apply mb-2 text-3xl font-medium text-center md:text-left;
}
h2 {
  @apply mb-2 text-2xl font-medium text-center md:text-left;
}
p {
  @apply text-xl text-gray-700;
}
.dark-mode body {
  @apply bg-gray-800;
}
.dark-mode h1,
.dark-mode h2 {
  @apply text-white;
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
