<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer"
    class="grid w-full bg-gray-300 dark:bg-gray-700"
    :class="{
      'cursor-default rounded-lg': !role && !description,
      'rounded-xl duration-200 ease-out transform hover:scale-[1.025]': role,
    }"
    draggable="false"
    v-wave
  >
    <div
      class="flex items-center space-x-3"
      :class="{
        'p-3': role && !description,
        'p-4': description,
      }"
    >
      <Skeleton :img="`/${title.split(' ')[0]}.webp`" class="rounded-xl" />
      <div>
        <h2 class="-mb-1 line-clamp-1" v-html="title"></h2>
        <p v-if="role" v-html="role"></p>
      </div>
    </div>
    <hr v-if="description" class="mb-4 border-gray-400 dark:border-gray-600" />
    <div class="p-4 pt-0" v-if="description">
      <h2>Description</h2>
      <p class="mt-1" v-html="description"></p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["url", "title", "role", "description", "color"],
};
</script>