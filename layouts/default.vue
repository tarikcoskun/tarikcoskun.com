<template>
  <div>
    <header
      class="
        sticky
        top-0
        z-10
        h-14
        md:h-[4.5rem]
        bg-gray-100
        dark:bg-gray-900
        bg-opacity-60
        dark:bg-opacity-60
        backdrop-filter backdrop-blur-md
      "
    >
      <div
        class="
          max-w-[52rem]
          md:mx-auto
          flex
          items-center
          justify-between
          h-full
          gap-4
          md:gap-0
        "
      >
        <h1 class="hidden text-4xl font-medium font-title md:block">
          Tarık Coşkun
        </h1>
        <div class="flex items-center gap-5 ml-4 md:ml-0">
          <NuxtLink to="/#home">Home</NuxtLink>
          <NuxtLink to="/#about">About</NuxtLink>
          <NuxtLink to="/#works">Works</NuxtLink>
        </div>
        <div class="flex items-center gap-2">
          <a
            class="hidden w-32 button md:block"
            href="mailto:tarikcskun@gmail.com"
            >Contact</a
          >
          <ThemeSwitch />
        </div>
      </div>
    </header>
    <Nuxt class="max-w-[52rem] px-4 md:px-0 mx-auto" />
    <footer class="pb-8 text-center">
      <p>Website by Tarık Coşkun</p>
      <p>
        This website is open-source on
        <a
          class="text-blue-700 border-b-2 border-transparent  hover:border-blue-800"
          href="https://github.com/tarikcoskun/website"
          >GitHub</a
        >
      </p>
    </footer>
    <img
      src="/img/github.svg"
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
        delay: anime.stagger(350, { start: 1000 }),
      });

      anime({
        targets: ".anime-intro",
        translateX: [-10, 0],
        opacity: 1,
        easing: "spring(0, 5, 20, 0)",
        delay: anime.stagger(75),
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