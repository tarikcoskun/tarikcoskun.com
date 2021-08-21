<template>
  <div class="flex">
    <h1
      v-for="character in text.split('')"
      class="opacity-0 anime-intro text-inherit font-inherit"
    >
      {{ character }}
    </h1>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>