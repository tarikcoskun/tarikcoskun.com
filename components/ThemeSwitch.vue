<template>
  <div class="theme-switch" @click="switchTheme">
    <unicon
      :name="$colorMode.value === 'dark' ? 'moon' : 'brightness'"
      width="28"
      height="28"
      fill="currentColor"
      class="text-gray-800 theme-icon"
    />
  </div>
</template>

<style lang="postcss">
.theme-switch {
  @apply sticky float-right mr-8 bottom-8 p-2.5 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300;
}
.dark-mode .theme-switch {
  @apply bg-gray-700 hover:bg-gray-600;
}
.dark-mode .theme-icon {
  @apply text-gray-300;
}
</style>

<script>
export default {
  methods: {
    switchTheme() {
      if (this.$colorMode.value === 'dark')
        return (this.$colorMode.value = 'light')
      else return (this.$colorMode.value = 'dark')
    },
  },
}
</script>
