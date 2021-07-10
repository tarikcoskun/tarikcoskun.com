<template>
  <article class="p-4 px-0 border-b">
    <div class="flex gap-3">
      <Skeleton
        :img="
          title
            .toLowerCase()
            .match(/[^\'\?]+/g)
            .join('')
            .split(' ')
            .join('')
        "
      />
      <div>
        <a class="text-xl font-medium" :href="to" target="_blank">
          {{ title }}
        </a>
        <p>{{ role }}</p>
      </div>
    </div>
    <p class="mt-2" v-html="description"></p>
  </article>
</template>

<script>
export default {
  props: ["to", "title", "role", "description"],
};
</script>