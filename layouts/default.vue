<template>
  <div>
    <header>
      <div class="container">
        <h1 class="hidden text-4xl font-medium font-title md:block">
          Tarık C.
        </h1>
        <div class="flex gap-6">
          <NuxtLink to="/#home">Home</NuxtLink>
          <NuxtLink to="/#about">About</NuxtLink>
          <NuxtLink to="/#work">Work</NuxtLink>
        </div>
        <NuxtLink class="w-32 py-2 button" to="#contact">Contact</NuxtLink>
      </div>
    </header>
    <Nuxt class="max-w-4xl px-4 mx-auto" />
    <img
      src="/discord.svg"
      alt="*im a ghost*"
      @load="this.animate"
      class="hidden"
    />
  </div>
</template>

<script>
export default {
  methods: {
    animate() {
      const anime = this.$anime;

      anime({
        targets: ".anime-text",
        translateX: [-50, 0],
        opacity: 1,
        easing: "spring(0, 5, 20, 0)",
        delay: anime.stagger(350),
      });

      anime({
        targets: ".anime-account",
        translateY: [15, 0],
        opacity: 1,
        easing: "spring(0, 7, 20, 0)",
        delay: anime.stagger(250, { start: 1250 }),
      });
    },
  },
};
</script>