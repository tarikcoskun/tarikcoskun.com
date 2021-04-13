<template>
  <div
    draggable="false"
    class="flex items-center space-x-2 text-gray-800 cursor-default select-none"
  >
    <img
      class="w-6 rounded-sm sm:hidden lg:block"
      :src="require(`~/assets/icons/${icon}.svg`)"
    />
    <h2 class="text-lg truncate" style="margin-top: 2px">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["color", "icon", "title"],
};
</script>
