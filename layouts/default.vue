<template>
  <div>
    <header>
      <div class="container">
        <h1 class="hidden text-4xl font-medium font-title md:block">
          Tarık Coşkun
        </h1>
        <div class="flex items-center gap-6">
          <NuxtLink class="hidden md:block" to="/#home">Home</NuxtLink>
          <NuxtLink to="/#about">About</NuxtLink>
          <NuxtLink class="font-bold md:hidden" to="/#home"
            >Tarık Coşkun</NuxtLink
          >
          <NuxtLink to="/#works">Works</NuxtLink>
        </div>
        <NuxtLink class="hidden w-32 py-2 button md:block" to="#contact"
          >Contact</NuxtLink
        >
      </div>
    </header>
    <Nuxt class="max-w-4xl px-4 mx-auto" />
    <footer
      class="flex items-center justify-between max-w-4xl px-4 mx-auto mt-8"
    >
      <a
        class="m-0 hover:underline"
        href="https://github.com/tarikcoskun/website"
        >Source on GitHub</a
      >
      <div class="flex gap-3">
        <Account
          v-for="(account, index) in accounts"
          :key="index"
          :url="account.url"
          :icon="account.icon"
          class="m-0"
        />
      </div>
    </footer>
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