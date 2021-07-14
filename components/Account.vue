<template>
  <a
    :href="url"
    :aria-label="icon"
    target="_blank"
    rel="noreferrer"
    draggable="false"
    class="text-white transition-colors duration-200 hover:text-gray-300"
  >
    <DiscordIcon v-if="icon === 'discord'" />
    <TwitterIcon v-if="icon === 'twitter'" />
    <GitHubIcon v-if="icon === 'github'" />
  </a>
</template>

<script>
import DiscordIcon from "~/static/discord.svg?inline";
import TwitterIcon from "~/static/twitter.svg?inline";
import GitHubIcon from "~/static/github.svg?inline";

export default {
  props: ["icon", "url"],
  components: { DiscordIcon, TwitterIcon, GitHubIcon },
};
</script>