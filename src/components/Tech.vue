<template>
  <div class="bg-gray-300 rounded-lg cursor-default dark:bg-gray-700">
    <div class="flex items-center space-x-3 p-1.5">
      <div
        class="p-1.5 mx-1.5 rounded-full"
        :style="{ background: color }"
      ></div>
      <div>
        <h2 class="line-clamp-1" v-html="title"></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "color"],
};
</script>