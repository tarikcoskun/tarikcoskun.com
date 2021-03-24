<template>
  <div
    class="pl-2.5 py-1 border-l-4 border-gray-300"
    :style="{ 'border-left-color': color }"
  >
    <h2 class="select-none">
      <a draggable="false" :href="url" target="_blank">{{ title }}</a>
      <span class="text-lg font-normal"> — {{ position }}</span>
    </h2>
    <p class="text-base leading-5 lg:mr-32">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["color", "title", "url", "position", "description"],
};
</script>