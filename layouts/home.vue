<template>
  <main style="grid-template-columns: 17.5% 42.5% 40%">
    <Navbar class="md:hidden" />
    <Sidebar class="hidden md:flex" />
    <section class="header-container">
      <div class="header">
        <h1 class="header-upper">Hello, it's</h1>
        <h1>Tarık Coşkun</h1>
      </div>
      <Nuxt />
    </section>
    <section class="header-container featured-content">
      <div class="header">
        <h1 class="header-upper">Latest</h1>
        <h1>Articles</h1>
      </div>
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
  </main>
</template>

<script>
import DiscordIcon from "~/assets/img/discord.svg?inline";
import TwitterIcon from "~/assets/img/twitter.svg?inline";
import GitHubIcon from "~/assets/img/github.svg?inline";
import MailIcon from "~/assets/img/mail.svg?inline";

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