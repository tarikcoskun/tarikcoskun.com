<template>
  <div
    class="flex items-center justify-center duration-150 rounded-lg cursor-pointer  button w-11 h-11 right-4 top-4"
    @click="
      $colorMode.value === 'dark'
        ? ($colorMode.preference = 'light')
        : ($colorMode.preference = 'dark')
    "
  >
    <Sun class="w-7" v-if="$colorMode.value === 'light'" />
    <Moon class="w-7" v-if="$colorMode.value === 'dark'" />
  </div>
</template>

<script>
import Sun from "~/static/img/sun.svg?inline";
import Moon from "~/static/img/moon.svg?inline";

export default {
  components: { Sun, Moon },
};
</script>