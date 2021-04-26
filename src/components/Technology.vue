<template>
  <div class="rounded-lg cursor-default card">
    <div class="flex items-center p-2 space-x-3">
      <div
        class="p-1.5 rounded-lg"
        :class="{ 'animate-pulse': itemLoaded === false }"
        :style="{ background: color }"
      >
        <Skeleton
          :image-url="require(`~/assets/img/${title.toLowerCase()}.svg`)"
          type="tech"
          :color="color"
        />
        <img
          :src="require(`~/assets/img/${title.toLowerCase()}.svg`)"
          class="hidden"
          @load="itemLoaded = true"
        />
      </div>
      <h2 class="line-clamp-1">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "url", "role", "color", "description", "color"],
  data() {
    return {
      itemLoaded: false,
    };
  },
};
</script>