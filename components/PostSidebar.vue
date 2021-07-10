<template>
  <section class="h-full border-l">
    <div class="sticky flex flex-col gap-3 top-4">
      <div v-if="toc.length > 1">
        <h2>Başlıklar</h2>
        <div
          class="grid gap-1.5 mt-1"
          :class="{ 'grid-cols-2': toc.length > 8 }"
        >
          <NuxtLink
            class="
              px-2
              py-[0.2rem]
              text-[1.05rem] text-black
              truncate
              transition-colors
              ease-out
              bg-[#ececec]
              hover:bg-gray-200
              rounded
            "
            :title="link.text"
            v-for="link of toc"
            :key="link.id"
            :to="`#${link.id}`"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <h2>Paylaş</h2>
        ...
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["toc"],
};
</script>