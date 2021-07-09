<template>
  <section class="z-10 -ml-4">
    <div
      class="fixed z-[-10] h-[calc(100vh-4rem)] border-l w-[calc(20%-1rem)]"
    ></div>
    <div class="z-20 flex flex-col gap-3 ml-4 top-8 table-of-content">
      <NuxtLink
        class="text-base text-left truncate"
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