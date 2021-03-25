<template>
  <a
    draggable="false"
    :href="url"
    target="_blank"
    class="flex items-center justify-center h-full text-white duration-75 transform rounded w-11 hover:no-underline hover:opacity-80"
    :style="{ background: color }"
  >
    <unicon :name="icon" fill="currentColor" width="22" height="22" />
  </a>
</template>

<script>
export default {
  props: ["color", "title", "icon", "url"],
  fetchOnServer: false,
};
</script>