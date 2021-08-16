<template>
  <div
    class="flex flex-col gap-2 p-4 bg-black  dark:bg-white bg-opacity-5 dark:bg-opacity-5 rounded-xl"
  >
    <div
      class="flex items-center justify-center w-16 h-16 rounded-lg"
      :style="{
        color: $colorMode.value === 'dark' ? darkColor : lightColor,
        backgroundColor: $colorMode.value === 'dark' ? darkBg : lightBg,
      }"
    >
      <Nuxt v-if="title === 'Nuxt'" />
      <Tailwind v-if="title === 'Tailwind'" />
      <Node v-if="title === 'Node'" />
      <Sass v-if="title === 'Sass'" />
    </div>
    <h1 class="mt-1 text-2xl">{{ title }}</h1>
    <p class="m-0">Since {{ since }}</p>
  </div>
</template>

<script>
import Nuxt from "~/static/img/nuxt.svg?inline";
import Tailwind from "~/static/img/tailwind.svg?inline";
import Node from "~/static/img/node.svg?inline";
import Sass from "~/static/img/sass.svg?inline";

export default {
  props: ["lightBg", "lightColor", "darkBg", "darkColor", "title", "since"],
  components: { Nuxt, Tailwind, Node, Sass },
};
</script>