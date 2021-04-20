<template>
  <h2 class="flex items-center space-x-2 text-gray-800">
    <unicon :name="icon" :fill="color" width="28" height="28" />
    <a
      draggable="false"
      :href="url"
      target="_blank"
      class="text-lg 2xl:text-xl"
      >{{ title }}</a
    >
  </h2>
</template>

<script>
export default {
  props: ["color", "title", "icon", "url"],
};
</script>