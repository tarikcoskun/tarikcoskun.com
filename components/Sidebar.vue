<template>
  <section class="sidebar">
    <div class="page-links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/works">Works</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
    </div>
    <div class="social-links">
      <a href="https://discord.com/users/474537652943847444" target="_blank">
        <DiscordIcon />
        <h2>Discord</h2>
      </a>
      <a href="https://twitter.com/itstarikcoskun" target="_blank">
        <TwitterIcon />
        <h2>Twitter</h2>
      </a>
      <a href="https://github.com/tarikcoskun" target="_blank">
        <GitHubIcon />
        <h2>GitHub</h2>
      </a>
      <a href="mailto:imtarikcoskun@gmail.com" target="_blank">
        <MailIcon />
        <h2>Mail</h2>
      </a>
      <a href="https://github.com/tarikcoskun/website" target="_blank">
        <SourceIcon />
        <h2>Source</h2>
      </a>
    </div>
  </section>
</template>

<script>
import DiscordIcon from "~/assets/img/discord.svg?inline";
import TwitterIcon from "~/assets/img/twitter.svg?inline";
import GitHubIcon from "~/assets/img/github.svg?inline";
import MailIcon from "~/assets/img/mail.svg?inline";
import SourceIcon from "~/assets/img/source.svg?inline";

export default {
  components: { DiscordIcon, TwitterIcon, GitHubIcon, MailIcon, SourceIcon },
};
</script>