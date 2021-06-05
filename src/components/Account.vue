<template>
  <XyzTransition :appear-visible="{ threshold: 0.5 }">
    <a
      :href="url"
      :aria-label="icon"
      target="_blank"
      rel="noreferrer"
      draggable="false"
      class="flex flex-initial items-center p-1 hover:p-1.5 hover:text-gray-700 dark:hover:text-gray-400 space-x-2 rounded-full transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      <unicon
        :name="icon"
        fill="currentColor"
        :width="icon === 'crowdin' ? 26 : 32"
        :height="icon === 'crowdin' ? 26 : 32"
      />
    </a>
  </XyzTransition>
</template>

<script>
export default {
  props: ["icon", "url"],
};
</script>