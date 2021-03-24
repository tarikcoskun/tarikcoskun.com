<template>
  <div
    draggable="false"
    :href="url"
    class="flex flex-row p-1.5 px-3 text-white duration-75 transform rounded cursor-default select-none lg:p-2 lg:space-x-2 align-center hover:opacity-80 lg:h-9"
    :style="{ background: color }"
  >
    <img
      class="hidden w-5 h-5 rounded fill-current lg:block"
      :src="'http://tarikcoskun.xyz/icons/' + icon + '.svg'"
    />
    <h2 class="text-base">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["color", "icon", "title"],
};
</script>
