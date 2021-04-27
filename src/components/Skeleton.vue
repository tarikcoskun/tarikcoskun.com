<template>
  <div
    class="bg-no-repeat"
    :class="{
      'animate-pulse': itemLoaded === false,
      'w-6 h-6 bg-contain bg-center': type === 'tech',
      'w-48 h-48 rounded-full': type === 'avatar',
      'w-16 h-16 bg-cover bg-left': type !== 'tech',
    }"
    :style="{
      backgroundImage: itemLoaded === true ? `url('${imageUrl}')` : '',
      backgroundColor: color,
    }"
  >
    <img
      :src="imageUrl"
      :class="{ hidden: type !== 'tech' }"
      @load="itemLoaded = true"
    />
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