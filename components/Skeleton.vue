<template>
  <div
    class="
      w-[3.5rem]
      h-[3.5rem]
      border border-[#bebebe]
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