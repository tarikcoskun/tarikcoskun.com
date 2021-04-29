<template>
  <div
    class="bg-no-repeat"
    :class="{
      'animate-pulse': itemLoaded === false,
      'w-6 h-6 bg-contain bg-center': color,
      'w-16 h-16 bg-cover bg-left': !color,
      'w-44 h-44 bg-cover rounded-full': type === 'avatar',
    }"
    :style="{
      backgroundImage: itemLoaded === true ? `url('${img}')` : '',
      backgroundColor: color,
    }"
  >
    <img :src="img" class="invisible" @load="itemLoaded = true" />
  </div>
</template>

<script>
export default {
  props: ["img", "type", "color"],
  data() {
    return {
      itemLoaded: false,
    };
  },
};
</script>