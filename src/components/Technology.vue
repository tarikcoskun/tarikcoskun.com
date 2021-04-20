<template>
  <div
    draggable="false"
    class="flex items-center space-x-2 text-gray-800 cursor-default select-none"
  >
    <img
      :src="require(`~/assets/icons/${icon}.svg`)"
      class="w-6 rounded 2xl:w-8 sm:hidden lg:block"
      draggable="false"
    />
    <h2 class="truncate">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["icon", "title"],
};
</script>
