<template>
  <div class="py-1 pl-3 border-l-4 md:w-80" :style="{ 'border-color': color }">
    <h2
      class="text-gray-800 select-none line-clamp-1"
      :title="title + ' — ' + position"
    >
      <a draggable="false" :href="url" target="_blank">{{ title }}</a>
      <span class="text-lg font-normal"> — {{ position }}</span>
    </h2>
    <p class="text-justify line-clamp-2" :title="description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["color", "title", "url", "position", "description"],
};
</script>