<template>
  <a
    :href="url"
    :aria-label="icon"
    target="_blank"
    rel="noreferrer"
    draggable="false"
    class="-mb-1 text-gray-300 transition-colors duration-200 hover:text-white"
  >
    <TwitterIcon v-if="icon === 'twitter'" />
    <GitHubIcon v-if="icon === 'github'" />
  </a>
</template>

<script>
import TwitterIcon from "~/static/twitter.svg?inline";
import GitHubIcon from "~/static/github.svg?inline";

export default {
  props: ["url", "icon"],
  components: { TwitterIcon, GitHubIcon },
};
</script>