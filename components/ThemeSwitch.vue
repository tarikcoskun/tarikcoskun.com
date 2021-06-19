<template>
  <div
    class="
      absolute
      z-10
      flex
      items-center
      justify-center
      w-11
      h-11
      duration-150
      rounded-lg
      cursor-pointer
      right-4
      top-4
      text-[#151515]
      hover:bg-[#dedede]
      dark:hover:bg-[#161616]
      dark:text-[#dedede]
    "
    @click="
      $colorMode.value === 'dark'
        ? ($colorMode.preference = 'light')
        : ($colorMode.preference = 'dark')
    "
  >
    <SunIcon v-if="$colorMode.value === 'light'" />
    <MoonIcon v-if="$colorMode.value === 'dark'" />
  </div>
</template>

<script>
import SunIcon from "~/assets/img/sun.svg?inline";
import MoonIcon from "~/assets/img/moon.svg?inline";

export default {
  components: { SunIcon, MoonIcon },
};
</script>