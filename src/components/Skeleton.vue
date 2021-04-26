<template>
  <div
    class="bg-no-repeat"
    :class="{
      'animate-pulse': itemLoaded === false,
      'w-6 h-6 bg-contain bg-center': type === 'tech',
      'w-16 h-16 bg-cover bg-left': type !== 'tech',
    }"
    :style="{
      backgroundImage: itemLoaded === true ? `url('${imageUrl}')` : '',
      backgroundColor: color ? color : '#111',
    }"
  >
    <img :src="imageUrl" class="hidden" @load="itemLoaded = true" />
  </div>
</template>

<script>
export default {
  props: ["image-url", "type", "color"],
  data() {
    return {
      itemLoaded: false,
    };
  },
};
</script>