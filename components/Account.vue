<template>
  <a
    draggable="false"
    :href="url"
    target="_blank"
    class="p-1.5 lg:px-2 px-3 text-white rounded flex align-center lg:space-x-2 hover:no-underline hover:opacity-80 transform duration-75"
    :style="{ background: color }"
  >
    <unicon
      class="hidden lg:block"
      :name="icon"
      fill="currentColor"
      width="22"
      height="22"
    />
    <h2 class="text-base">{{ title }}</h2>
  </a>
</template>

<script>
export default {
  props: ["color", "title", "icon", "url"],
};
</script>