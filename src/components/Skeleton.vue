<template>
  <div
    class="bg-center bg-no-repeat bg-contain focus:outline-none"
    :class="{
      'animate-pulse': itemLoaded === false,
    }"
    :style="{
      backgroundImage: itemLoaded === true ? `url('${imageUrl}')` : '',
      backgroundColor: '#18181c',
    }"
  >
    <img
      :src="imageUrl"
      class="invisible w-16 h-16"
      draggable="false"
      alt="Logo"
      @load="itemLoaded = true"
    />
  </div>
</template>

<script>
export default {
  props: ["image-url"],
  data() {
    return {
      itemLoaded: false,
    };
  },
};
</script>