<template>
  <div
    class="
      w-[3.5rem]
      h-[3.5rem]
      border-2
      dark:border-[#202020]
      bg-left bg-no-repeat bg-cover bg-[#111111]
    "
    :style="{
      backgroundImage: `url('/assets/${img}.webp')`,
    }"
  ></div>
</template>

<script>
export default {
  props: ["img"],
  data() {
    return {
      itemLoaded: false,
    };
  },
};
</script>