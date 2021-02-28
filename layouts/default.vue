<template>
  <div>
    <div class="m-4 -mb-8 lg:mt-8 lg:-mb-4 lg:px-56 sm:px-36">
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
.dark-mode body {
  background: #111;
}
.dark-mode h1,
.dark-mode h2 {
  @apply text-white;
}
.dark-mode p,
.dark-mode a {
  @apply text-gray-100;
}
.background {
  @apply bg-gray-100;
}
.dark-mode .background {
  background: #202020;
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
