<template>
  <section class="h-full">
    <div class="sticky top-0 flex flex-col py-4">
      <NuxtLink
        class="text-base text-left truncate hover:text-black mb-2"
        :title="link.text"
        v-for="link of toc"
        :key="link.id"
        :to="`#${link.id}`"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  props: ["toc"],
};
</script>