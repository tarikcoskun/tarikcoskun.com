<template>
  <a
    :href="url"
    target="_blank"
    draggable="false"
    class="px-3 py-2 duration-150 transform rounded-md cursor-pointer hover:-translate-y-1 hover:no-underline"
    style="background: #ececec"
    v-wave
  >
    <h2>{{ title }}</h2>
    <p class="line-clamp-2" :title="description">
      {{ description }}
    </p>
  </a>
</template>

<script>
export default {
  props: ["title", "description", "url"],
};
</script>