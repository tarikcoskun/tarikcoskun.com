<template>
  <a
    :href="url"
    target="_blank"
    draggable="false"
    class="flex items-center space-x-2"
    style="color: var(--text-color)"
  >
    <unicon :name="icon" fill="currentColor" width="36" height="36" />
  </a>
</template>

<script>
export default {
  props: ["color", "icon", "url"],
};
</script>