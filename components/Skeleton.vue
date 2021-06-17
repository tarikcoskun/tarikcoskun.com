<template>
  <div
    class="
      w-[3.5rem]
      h-[3.5rem]
      border-2 border-[#202020]
      bg-left bg-no-repeat bg-cover
    "
    :class="{
      'animate-pulse': itemLoaded === false,
    }"
    :style="{
      backgroundImage: itemLoaded === true ? `url('${img}')` : '',
      backgroundColor: color || '#111111',
    }"
  >
    <img
      :src="img"
      :alt="img"
      class="hidden w-16 h-16 bg-left bg-cover"
      @load="itemLoaded = true"
    />
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