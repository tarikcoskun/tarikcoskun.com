<template>
  <section class="z-10 border-r sidebar">
    <div class="fixed flex flex-col gap-2 top-8 page-links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/works">Works</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
    </div>
    <div class="fixed flex flex-col gap-2 bottom-8">
      <a
        v-for="account in accounts"
        :key="account"
        :href="account.link"
        target="_blank"
        rel="noreferrer"
        class="flex items-center gap-3 text-xl"
      >
        <DiscordIcon v-if="account.name == 'Discord'" />
        <TwitterIcon v-if="account.name == 'Twitter'" />
        <GitHubIcon v-if="account.name == 'GitHub'" />
        <MailIcon v-if="account.name == 'Mail'" />
        <h3>{{ account.name }}</h3>
      </a>
    </div>
  </section>
</template>

<script>
import DiscordIcon from "~/static/discord.svg?inline";
import TwitterIcon from "~/static/twitter.svg?inline";
import GitHubIcon from "~/static/github.svg?inline";
import MailIcon from "~/static/mail.svg?inline";

export default {
  components: { DiscordIcon, TwitterIcon, GitHubIcon, MailIcon },
  data() {
    return {
      accounts: [
        {
          link: "https://discord.com/users/474537652943847444",
          name: "Discord",
        },
        {
          link: "https://twitter.com/itstarikcoskun",
          name: "Twitter",
        },
        {
          link: "https://github.com/tarikcoskun",
          name: "GitHub",
        },
        {
          link: "mailto:imtarikcoskun@gmail.com",
          name: "Mail",
        },
      ],
    };
  },
};
</script>