<template>
  <nuxt-link
    :to="url"
    draggable="false"
    class="px-3 py-1.5 rounded-md transform hover:-translate-y-1 duration-150 hover:no-underline cursor-pointer"
    style="background: #ededed"
    v-wave
  >
    <h2>{{ title }}</h2>
    <p class="-mt-1 line-clamp-2" :title="description">
      {{ description }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title", "description", "url"],
};
</script>