<template>
  <div>
    <ThemeSwitch />
    <Nuxt />
    <img class="hidden" src="/icon.png" alt="*ghost*" @load="animate" />
  </div>
</template>

<script>
export default {
  methods: {
    animate() {
      const anime = this.$anime;

      anime({
        targets: ".anime",
        translateX: [-35, 0],
        opacity: 1,
        duration: 1500,
        delay: anime.stagger(350),
        easing: "spring(1, 80, 25, 0)",
      });

      anime({
        targets: ".anime-accounts",
        translateY: [15, 0],
        opacity: 1,
        duration: 1000,
        delay: anime.stagger(250, { start: 1000 }),
        easing: "spring(1, 80, 15, 0)",
      });

      anime({
        targets: ".anime-experiences",
        translateY: [25, 0],
        opacity: 1,
        delay: anime.stagger(250, { start: 1000 }),
        easing: "spring(1, 80, 10, 0)",
      });
    },
  },
};
</script>