<template>
  <div
    class="
      fixed
      z-10
      flex
      items-center
      justify-center
      w-10
      h-10
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
    <unicon
      :name="$colorMode.value === 'dark' ? 'moon' : 'brightness'"
      fill="currentColor"
      width="24"
      height="24"
    />
  </div>
</template>