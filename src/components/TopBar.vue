<template>
  <div
    class="absolute top-0 left-0 w-full h-2"
    :style="{ background: color }"
  ></div>
</template>

<script>
export default {
  props: ["color"],
};
</script>