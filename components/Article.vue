<template>
  <article class="relative py-2">
    <NuxtLink class="text-2xl font-medium" to="/blog/post">
      {{ title }}
    </NuxtLink>
    <br />
    <span>{{ date }}</span>
    <p class="mt-1">{{ description }}</p>
  </article>
</template>

<script>
export default {
  props: ["title", "description", "date"],
};
</script>