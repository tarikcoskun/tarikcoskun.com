<template>
  <main style="grid-template-columns: 17.5% 82.5%">
    <Navbar class="md:hidden" />
    <Sidebar class="hidden md:flex" />
    <section class="header-container">
      <div class="header">
        <h1 class="header-upper" v-if="this.$route.path != '/'">
          {{ this.$route.path.split("/").pop() }}
        </h1>
        <h1>Tarık Coşkun</h1>
      </div>
      <Nuxt />
      <div class="background-pattern"></div>
    </section>
  </main>
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