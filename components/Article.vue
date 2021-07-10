<template>
  <article class="p-4 px-0 border-b">
    <NuxtLink class="text-2xl font-medium" :to="to">
      {{ title }}
    </NuxtLink>
    <br />
    <span>{{ getDate(date) }}</span>
    <p class="mt-2">{{ description }}</p>
  </article>
</template>

<script>
export default {
  props: ["title", "description", "date", "to"],
};
</script>