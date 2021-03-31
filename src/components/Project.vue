<template>
  <a
    draggable="false"
    :href="url"
    class="px-3 py-1.5 bg-gray-200 border-gray-400 rounded border-b-3 transform hover:-translate-y-1 duration-150 hover:no-underline cursor-pointer"
    v-wave
  >
    <h2>{{ title }}</h2>
    <p class="-mt-1 line-clamp-2" :title="description">
      {{ description }}
    </p>
  </a>
</template>

<script>
export default {
  props: ["title", "description", "url"],
};
</script>