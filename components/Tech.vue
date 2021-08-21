<template>
  <a
    :href="`https://${link}`"
    target="_blank"
    class="relative flex flex-col gap-2 p-4 bg-black  group dark:bg-white bg-opacity-5 dark:bg-opacity-5 rounded-xl"
  >
    <div
      class="flex items-center justify-center w-16 h-16 rounded-lg"
      :style="{
        color: $colorMode.value === 'dark' ? darkColor : lightColor,
        backgroundColor: $colorMode.value === 'dark' ? darkBg : lightBg,
      }"
    >
      <ArrowRight
        class="absolute text-gray-400 transition-opacity opacity-0  group-hover:opacity-100 dark:text-gray-500 right-4 top-4"
      />
      <Nuxt v-if="title === 'Nuxt'" />
      <Tailwind v-if="title === 'Tailwind'" />
      <Node v-if="title === 'Node'" />
      <Sass v-if="title === 'Sass'" />
    </div>
    <h1 class="mt-1 text-2xl font-medium font-base">{{ title }}</h1>
    <p>Since {{ since }}</p>
  </a>
</template>

<script>
import Nuxt from "~/static/img/nuxt.svg?inline";
import Tailwind from "~/static/img/tailwind.svg?inline";
import Node from "~/static/img/node.svg?inline";
import Sass from "~/static/img/sass.svg?inline";
import ArrowRight from "~/static/img/arrow-right.svg?inline";

export default {
  props: [
    "link",
    "title",
    "since",
    "darkBg",
    "darkColor",
    "lightBg",
    "lightColor",
  ],
  components: { Nuxt, Tailwind, Node, Sass, ArrowRight },
};
</script>