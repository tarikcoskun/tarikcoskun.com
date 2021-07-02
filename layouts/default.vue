<template>
  <div>
    <div class="w-full h-2 bg-[#a991ab]"></div>
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
        targets: ".anime-text",
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
        delay: anime.stagger(200, { start: 1000 }),
        easing: "spring(1, 80, 15, 0)",
      });

      anime({
        targets: ".anime-cards",
        translateY: [25, 0],
        opacity: 1,
        delay: anime.stagger(200, { start: 1000 }),
        easing: "spring(1, 80, 10, 0)",
      });
    },
  },
};
</script>