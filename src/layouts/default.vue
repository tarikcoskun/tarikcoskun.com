<template>
  <div>
    <div
      class="absolute top-0 left-0 w-full h-2"
      :style="
        $colorMode.value === 'dark'
          ? 'background: #1b2330'
          : 'background: #accef7'
      "
    ></div>
    <ThemeSwitch />
    <Nuxt />
  </div>
</template>
