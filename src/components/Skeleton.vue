<template>
  <div
    class="w-16 h-16 bg-gray-300 bg-left bg-no-repeat bg-cover dark:bg-gray-700"
    :class="{
      'animate-pulse': itemLoaded === false,
    }"
    :style="{
      backgroundImage: itemLoaded === true ? `url('${img}.webp')` : '',
    }"
  >
    <picture>
      <source type="image/webp" :srcset="`${img}.webp`" />
      <source type="image/png" :srcset="`${img}.png`" />
      <img
        :src="`${img}.png`"
        class="invisible w-16 h-16 bg-left bg-cover"
        @load="itemLoaded = true"
      />
    </picture>
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