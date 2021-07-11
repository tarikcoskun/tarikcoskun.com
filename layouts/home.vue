<template>
  <div
    class="
      py-4
      w-full
      md:grid
      md:py-8
      grid-rows-[100%] grid-cols-[17.5%,42.5%,40%]
    "
  >
    <Navbar class="md:hidden" />
    <Sidebar class="hidden md:block" />
    <Nuxt />
    <LatestArticles />
  </div>
</template>

<script>
export default {
  mounted() {
    this.animate();
  },
  methods: {
    animate() {
      const anime = this.$anime;
      anime({
        targets: ".content-container",
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: "spring(2, 50, 20, 0)",
        delay: anime.stagger(100),
      });
    },
  },
};
</script>