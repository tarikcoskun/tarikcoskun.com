<template>
  <a
    draggable="false"
    :href="url"
    target="_blank"
    class="flex items-center justify-center w-full text-white duration-75 transform rounded md:h-full sm:w-11 hover:no-underline hover:opacity-80 border-b-3"
    :style="{ background: color, 'border-color': colorDarker }"
  >
    <unicon :name="icon" fill="currentColor" width="22" height="22" />
  </a>
</template>

<script>
export default {
  props: ["color", "colorDarker", "title", "icon", "url"],
  fetchOnServer: false,
};
</script>