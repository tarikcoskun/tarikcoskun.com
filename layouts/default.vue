<template>
  <div>
    <header>
      <div class="container">
        <h1 class="hidden text-4xl font-medium font-title md:block">
          Tarık Coşkun
        </h1>
        <div class="flex items-center gap-5 ml-4 md:ml-0">
          <NuxtLink to="/#home">Home</NuxtLink>
          <NuxtLink to="/#about">About</NuxtLink>
          <NuxtLink to="/#works">Works</NuxtLink>
        </div>
        <div class="flex items-center gap-2">
          <NuxtLink class="hidden w-32 py-1.5 button md:block" to="#contact"
            >Contact</NuxtLink
          >
          <ThemeSwitch />
        </div>
      </div>
    </header>
    <Nuxt class="max-w-[52rem] px-4 mx-auto" />
    <img
      src="/github.svg"
      alt="*im a ghost*"
      @load="this.animate"
      class="hidden"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          url: "https://github.com/tarikcoskun",
          icon: "github",
        },
        {
          url: "https://twitter.com/tarikcoskn",
          icon: "twitter",
        },
      ],
    };
  },
  methods: {
    animate() {
      const anime = this.$anime;

      anime({
        targets: "#home",
        translateY: [25, 0],
        opacity: 1,
        easing: "spring(0, 5, 20, 0)",
      });

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