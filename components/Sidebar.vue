<template>
  <section class="sidebar">
    <div class="page-links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/works">Works</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
    </div>
    <div class="social-links">
      <a
        href="https://discord.com/users/474537652943847444"
        target="_blank"
        rel="noreferrer"
      >
        <DiscordIcon />
        <h2>Discord</h2>
      </a>
      <a
        href="https://twitter.com/itstarikcoskun"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon />
        <h2>Twitter</h2>
      </a>
      <a href="https://github.com/tarikcoskun" target="_blank" rel="noreferrer">
        <GitHubIcon />
        <h2>GitHub</h2>
      </a>
      <a href="mailto:imtarikcoskun@gmail.com" target="_blank" rel="noreferrer">
        <MailIcon />
        <h2>Mail</h2>
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
};
</script>