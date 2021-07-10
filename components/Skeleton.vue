<template>
  <div
    class="w-14 h-14 bg-left bg-no-repeat bg-cover bg-[#111111] rounded-md"
    :style="{
      backgroundImage: `url('/${img}.webp')`,
    }"
  ></div>
</template>

<script>
export default {
  props: ["img"],
};
</script>