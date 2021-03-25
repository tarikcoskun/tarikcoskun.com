<template>
  <div
    class="px-2.5 pb-1 mt-1 border-l-4 border-gray-300 bg-opacity-50"
    :style="{ 'border-left-color': color }"
  >
    <h2 class="truncate select-none" :title="title + ' — ' + position">
      <a draggable="false" :href="url" target="_blank">{{ title }}</a>
      <span class="text-lg font-normal"> — {{ position }}</span>
    </h2>
    <p
      class="text-base leading-5 line-clamp-2 md:line-clamp-1"
      :title="description"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["color", "title", "url", "position", "description"],
};
</script>