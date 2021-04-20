<template>
  <div class="flex flex-row pr-2 space-x-3">
    <img
      v-if="logo"
      :src="logo"
      class="w-16 h-16 rounded-lg"
      draggable="false"
    />
    <div>
      <h2
        class="-mt-1 text-gray-800 select-none line-clamp-1 2xl:text-xl"
        :title="`${title} — ${position}`"
      >
        <a draggable="false" :href="url" target="_blank">{{ title }} </a>
        <span class="font-normal"> — {{ position }}</span>
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