<template>
  <div
    class="
      py-4
      h-screen
      w-full
      md:grid
      md:py-8
      md:overflow-hidden
      grid-rows-[100%]
    "
    :class="[
      $route.path == '/'
        ? 'grid-cols-[17.5%,42.5%,40%]'
        : 'grid-cols-[17.5%,82.5%]',
    ]"
  >
    <Navbar class="md:hidden" />
    <Sidebar class="hidden md:flex" />
    <section class="header-container">
      <header>
        <h2>{{ this.$route.path.split("/").pop() || "Hello, it's" }}</h2>
        <h1>Tarık Coşkun</h1>
      </header>
      <Nuxt />
    </section>
    <section
      class="mt-8 border-l md:pb-4 md:mt-0 header-container"
      v-show="$route.path == '/'"
    >
      <header>
        <h2>Latest</h2>
        <h1>Articles</h1>
      </header>
      <div class="article-container">
        <Article
          title="Lorem ipsum, dolor sit amet!"
          date="05.07.2021"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ullam nisi?"
        />
        <Article
          title="Lorem ipsum, dolor sit amet!"
          date="05.07.2021"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ullam nisi?"
        />
      </div>
    </section>
  </div>
</template>

<script>
import DiscordIcon from "~/static/discord.svg?inline";
import TwitterIcon from "~/static/twitter.svg?inline";
import GitHubIcon from "~/static/github.svg?inline";
import MailIcon from "~/static/mail.svg?inline";

export default {
  components: { DiscordIcon, TwitterIcon, GitHubIcon, MailIcon },
  mounted() {
    this.animate();
  },
  methods: {
    animate() {
      const anime = this.$anime;

      anime({
        targets: ".header-container",
        translateX: [-100, 0],
        opacity: 1,
        easing: "spring(2, 50, 20, 0)",
        delay: anime.stagger(100),
      });
    },
  },
};
</script>