<template>
  <article class="relative py-2">
    <NuxtLink class="text-2xl font-medium" :to="to">
      {{ title }}
    </NuxtLink>
    <br />
    <span>{{ getDate(date) }}</span>
    <p class="mt-1">{{ description }}</p>
  </article>
</template>

<script>
export default {
  props: ["title", "description", "date", "to"],
};
</script>