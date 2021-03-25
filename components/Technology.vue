<template>
  <div
    draggable="false"
    :href="url"
    class="flex flex-row items-center p-2 px-3 space-x-2 text-white duration-75 transform rounded cursor-default select-none sm:p-1.5 lg:p-2 lg:space-x-2 sm:space-x-0 hover:opacity-80 lg:h-9"
    :style="{ background: color }"
  >
    <img
      class="w-5 h-5 rounded-sm fill-current sm:hidden lg:block"
      :src="'http://tarikcoskun.xyz/icons/' + icon + '.svg'"
    />
    <h2 class="text-sm truncate" style="margin-top: 2px">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["color", "icon", "title"],
};
</script>
