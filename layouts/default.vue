<template>
  <div>
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
        delay: anime.stagger(500),
        easing: "spring(1, 80, 25, 0)",
      });

      anime({
        targets: ".anime-accounts",
        translateY: [15, 0],
        opacity: 1,
        duration: 1000,
        delay: anime.stagger(300, { start: 1500 }),
        easing: "spring(1, 80, 10, 0)",
      });

      anime({
        targets: ".anime-experiences",
        translateY: [25, 0],
        opacity: 1,
        delay: anime.stagger(200, { start: 2500 }),
        easing: "spring(1, 80, 25, 0)",
      });
    },
  },
};
</script>