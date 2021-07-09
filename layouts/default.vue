<template>
  <div
    class="py-4 h-screen w-full md:grid md:py-8 grid-rows-[100%]"
    :class="[
      $route.path == '/'
        ? 'grid-cols-[17.5%,42.5%,40%]'
        : 'grid-cols-[17.5%,82.5%]',
    ]"
  >
    <Navbar class="md:hidden" />
    <Sidebar class="hidden md:block" />
    <section class="h-full header-container">
      <header>
        <h2>
          {{
            (
              $route.path != "/" && $route.path.endsWith("/")
                ? pages.includes(
                    $route.path
                      .slice(0, -1)
                      .substring($route.path.slice(0, -1).lastIndexOf("/"))
                  )
                : pages.includes(
                    $route.path.substring($route.path.lastIndexOf("/"))
                  )
            )
              ? $route.path == "/"
                ? "Hello, it's"
                : $route.path.split("/").pop()
              : header.upper
          }}
        </h2>
        <h1>
          {{
            pages.includes($route.path.substring($route.path.lastIndexOf("/")))
              ? "Tarık Coşkun"
              : header.title
          }}
        </h1>
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
    this.$nuxt.$on("header", (data) => {
      this.header = data;
    });
  },
  data() {
    return {
      posts: [],
      pages: ["/", "/works", "/blog"],
      header: "",
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