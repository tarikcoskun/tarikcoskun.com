<template>
  <div
    class="fixed p-2 duration-75 rounded-full opacity-50 cursor-pointer right-4 top-4 hover:opacity-80"
    style="background: var(--gray)"
    @click="
      $colorMode.value === 'dark'
        ? ($colorMode.preference = 'light')
        : ($colorMode.preference = 'dark')
    "
  >
    <unicon
      :name="$colorMode.value === 'dark' ? 'moon' : 'brightness'"
      style="color: var(--text-color)"
      fill="currentColor"
      width="24"
      height="24"
    />
  </div>
</template>