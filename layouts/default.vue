<template>
  <div
    class="py-4 w-full md:grid md:py-8 grid-rows-[100%]"
    :class="[
      $route.name == 'index'
        ? 'grid-cols-[17.5%,42.5%,40%]'
        : $route.name == 'blog-slug'
        ? 'grid-cols-[17.5%,52.5%,30%] '
        : 'grid-cols-[17.5%,82.5%]',
    ]"
  >
    <Navbar class="md:hidden" />
    <Sidebar class="hidden md:block" />
    <Nuxt />
    <LatestArticles v-if="$route.name == 'index'" />
    <PostSidebar :toc="toc" v-if="$route.name == 'blog-slug'" />
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
  created() {
    this.$nuxt.$on("toc", (data) => {
      this.toc = data;
    });
  },
  data() {
    return {
      posts: [],
      toc: "",
    };
  },
  async fetch() {
    this.posts = await this.$content().limit(3).fetch();
  },
  methods: {
    animate() {
      const anime = this.$anime;

      anime({
        targets: ".content-container",
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: "spring(2, 50, 20, 0)",
        delay: anime.stagger(100),
      });
    },
  },
};
</script>