<template>
  <div
    class="
      w-[3.75rem]
      h-[3.75rem]
      border border-[#a09e9c]
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
};
</script>