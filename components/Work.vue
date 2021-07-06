<template>
  <article :href="url" target="_blank" rel="noreferrer" draggable="false">
    <div class="flex items-center gap-4">
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
        <h2 class="-mb-1 text-xl" v-html="title"></h2>
        <p v-html="role"></p>
      </div>
    </div>
    <p class="mt-2" v-html="description"></p>
  </article>
</template>

<script>
export default {
  props: ["url", "title", "role", "description", "img"],
};
</script>