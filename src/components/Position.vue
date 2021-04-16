<template>
  <div
    class="flex flex-row space-x-3 border-gray-400 rounded-sm"
    :class="logo ? 'border-l-0' : 'border-l-4 pl-3'"
  >
    <img
      v-if="logo"
      :src="logo"
      class="w-16 h-16 rounded-lg"
      draggable="false"
    />
    <div>
      <h2
        class="-mt-1 text-gray-800 select-none line-clamp-1"
        :title="`${title} — ${position}`"
      >
        <a draggable="false" :href="url" target="_blank">{{ title }}</a>
        <span class="text-lg font-normal"> — {{ position }}</span>
      </h2>
      <p class="line-clamp-2" :title="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["logo", "title", "url", "position", "description"],
};
</script>