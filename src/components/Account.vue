<template>
  <XyzTransition :appear-visible="{ threshold: 0.5 }">
    <a
      :href="url"
      target="_blank"
      draggable="false"
      class="flex items-center p-1 space-x-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      <unicon :name="icon" fill="currentColor" width="36" height="36" />
    </a>
  </XyzTransition>
</template>

<script>
export default {
  props: ["icon", "url"],
};
</script>