<template>
  <article class="p-4 px-0 border-b border-gray-300">
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
        <a class="-mb-1 text-xl" v-html="title"></a>
        <p v-html="role"></p>
      </div>
    </div>
    <p class="mt-2" v-html="description"></p>
  </article>
</template>

<script>
export default {
  props: ["url", "title", "role", "description"],
};
</script>