<template>
  <a
    draggable="false"
    :href="url"
    target="_blank"
    class="flex items-center space-x-2 text-gray-800"
  >
    <unicon :name="icon" :fill="color" width="28" height="28" />
    <h2 class="text-lg">{{ title }}</h2>
  </a>
</template>

<script>
export default {
  props: ["color", "title", "icon", "url"],
};
</script>