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
      p-[0.325rem]
      space-x-2
      rounded-full
      hover:bg-[#ffffff15]
      blur
    "
  >
    <DiscordIcon v-if="icon === 'discord'" />
    <TwitterIcon v-if="icon === 'twitter'" />
    <GitHubIcon v-if="icon === 'github'" />
    <CrowdinIcon v-if="icon === 'crowdin'" />
  </a>
</template>

<script>
import DiscordIcon from "~/assets/discord.svg?inline";
import TwitterIcon from "~/assets/twitter.svg?inline";
import GitHubIcon from "~/assets/github.svg?inline";
import CrowdinIcon from "~/assets/crowdin.svg?inline";

export default {
  props: ["icon", "url"],
  components: { DiscordIcon, TwitterIcon, GitHubIcon, CrowdinIcon },
};
</script>