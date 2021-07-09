<template>
  <div
    class="py-4 w-full md:grid md:py-8 grid-rows-[100%]"
    :class="[
      $route.name == 'index'
        ? 'grid-cols-[20%,40%,40%]'
        : $route.name == 'blog-slug'
        ? 'grid-cols-[20%,57.5%,22.5%] '
        : 'grid-cols-[20%,80%]',
    ]"
  >
    <Navbar class="md:hidden" />
    <Sidebar class="hidden md:block" />
    <section class="h-full header-container">
      <header>
        <h2>
          {{
            $route.name != "blog-slug"
              ? $route.name == "index"
                ? "Hello, it's"
                : $route.name
              : getDate(post.date)
          }}
        </h2>
        <h1>
          {{ $route.name != "blog-slug" ? "Tarık Coşkun" : post.title }}
        </h1>
      </header>
      <Nuxt />
    </section>
    <section
      class="mt-8 border-l md:pb-4 md:mt-0 header-container"
      v-show="$route.name == 'index'"
    >
      <header>
        <h2>Latest</h2>
        <h1>Articles</h1>
      </header>
      <div>
        <Article
          v-for="post in posts"
          :key="post.id"
          :to="`/blog/${post.slug}`"
          :title="post.title"
          :date="post.date"
          :description="post.description"
        />
      </div>
    </section>
    <PostHeads :toc="post.toc" v-show="$route.name == 'blog-slug'" />
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
    this.$nuxt.$on("post", (data) => {
      this.post = data;
    });
  },
  data() {
    return {
      posts: [],
      pages: ["/", "/works", "/blog"],
      post: "",
    };
  },
  async fetch() {
    this.posts = await this.$content().limit(3).fetch();
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