<template>
  <div
    class="m-4 lg:transform lg:mb-0 lg:mx-24 lg:-translate-y-1/2 lg:absolute lg:top-1/2"
  >
    <Nuxt />
  </div>
</template>

<style lang="postcss">
html {
  font-family: "Roboto", sans-serif;
}
body {
  @apply bg-gray-100 transform duration-75;
  min-height: 100vh;
}
section {
  @apply grid gap-4 md:gap-y-12;
}
h1 {
  @apply mb-1 text-xl font-medium;
}
h2 {
  @apply text-lg font-medium;
}
p {
  @apply text-base text-gray-800 leading-6;
}
svg,
img {
  @apply select-none;
}
a {
  @apply text-gray-800 hover:underline select-none;
}
.background {
  background: #f2f2f2;
}
</style>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        class:
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400",
      },
    };
  },
};
</script>
