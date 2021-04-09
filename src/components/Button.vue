<template>
  <a
    class="hover:no-underline flex gap-1.5 items-center justify-center px-2 py-1 text-lg rounded-md"
    :href="url"
    style="background: #ededed"
    target="_blank"
    draggable="false"
    v-wave
    ><unicon v-if="icon" :name="icon" /> {{ title }}</a
  >
</template>

<script>
export default {
  props: ["title", "icon", "url"],
};
</script>