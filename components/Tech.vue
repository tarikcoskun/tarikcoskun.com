<template>
  <div class="flex flex-col gap-2 p-4 bg-white bg-opacity-5 rounded-xl">
    <div
      class="flex items-center justify-center w-16 h-16 rounded-lg"
      :style="{ backgroundColor: bg }"
    >
      <Nuxt v-if="title === 'Nuxt.js'" />
      <Tailwind v-if="title === 'Tailwind'" />
      <Node v-if="title === 'Node.js'" />
      <Sass v-if="title === 'Sass'" />
    </div>
    <h1 class="mt-1 text-2xl">{{ title }}</h1>
    <p class="m-0">Since {{ since }}</p>
  </div>
</template>

<script>
import Nuxt from "~/static/img/nuxt.js.svg?inline";
import Tailwind from "~/static/img/tailwind.svg?inline";
import Node from "~/static/img/node.js.svg?inline";
import Sass from "~/static/img/sass.svg?inline";

export default {
  props: ["bg", "title", "since"],
  components: { Nuxt, Tailwind, Node, Sass },
};
</script>