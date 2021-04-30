<template>
  <XyzTransition :appear-visible="{ threshold: 0.5 }">
    <a
      :href="url"
      target="_blank"
      draggable="false"
      class="flex items-center space-x-2 text-gray-600 duration-75 ease-out transform dark:text-gray-400 dark:hover:text-gray-100 hover:text-gray-900"
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