<template>
  <a
    :href="url"
    :aria-label="icon"
    target="_blank"
    rel="noreferrer"
    draggable="false"
    class="
      flex
      items-center
      w-12
      h-12
      justify-center
      rounded-lg
      hover:bg-[#e5e5e5]
      dark:hover:bg-[#161616]
      transition-colors
      duration-200
    "
  >
    <DiscordIcon v-if="icon === 'discord'" />
    <TwitterIcon v-if="icon === 'twitter'" />
    <GitHubIcon v-if="icon === 'github'" />
    <CrowdinIcon v-if="icon === 'crowdin'" />
  </a>
</template>

<script>
import DiscordIcon from "~/assets/img/discord.svg?inline";
import TwitterIcon from "~/assets/img/twitter.svg?inline";
import GitHubIcon from "~/assets/img/github.svg?inline";
import CrowdinIcon from "~/assets/img/crowdin.svg?inline";

export default {
  props: ["icon", "url"],
  components: { DiscordIcon, TwitterIcon, GitHubIcon, CrowdinIcon },
};
</script>