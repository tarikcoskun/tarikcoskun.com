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
      w-11
      h-11
      justify-center
      rounded-lg
      hover:bg-[#cecece]
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