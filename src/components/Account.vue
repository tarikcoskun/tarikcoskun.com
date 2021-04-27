<template>
  <a
    :href="url"
    target="_blank"
    draggable="false"
    class="flex items-center space-x-2 duration-500 ease-out transform hover:-translate-y-1"
  >
    <unicon :name="icon" fill="currentColor" width="36" height="36" />
  </a>
</template>

<script>
export default {
  props: ["color", "icon", "url"],
};
</script>