<template>
  <div
    class="absolute p-2 duration-75 rounded-md opacity-50 cursor-pointer right-4 top-6 hover:opacity-80"
    :style="
      $colorMode.value === 'dark'
        ? 'background: #161b22'
        : 'background: #e8e8eb'
    "
    @click="
      $colorMode.value === 'dark'
        ? ($colorMode.preference = 'light')
        : ($colorMode.preference = 'dark')
    "
  >
    <unicon
      :name="$colorMode.value === 'dark' ? 'moon' : 'brightness'"
      :fill="$colorMode.value === 'dark' ? '#fff' : '#0d0d0d'"
      width="28"
      height="28"
    />
  </div>
</template>