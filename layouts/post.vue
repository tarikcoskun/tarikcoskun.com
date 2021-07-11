<template>
  <div
    class="
      py-4
      w-full
      md:grid
      md:py-8
      grid-rows-[100%] grid-cols-[17.5%,52.5%,30%]
    "
  >
    <Navbar class="md:hidden" />
    <Sidebar class="hidden md:block" />
    <Nuxt />
    <PostSidebar class="hidden md:block" :toc="toc" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.animate();
  },
  created() {
    this.$nuxt.$on("toc", (data) => {
      this.toc = data;
    });
  },
  data() {
    return {
      toc: "",
    };
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