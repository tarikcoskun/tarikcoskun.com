<template>
  <div
    class="fixed z-10 flex items-center justify-center w-10 h-10 text-gray-700 duration-150 bg-gray-300 rounded-full cursor-pointer right-4 top-4 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-300 hover:bg-gray-700 dark:hover:text-gray-700 hover:text-gray-300"
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