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
        'p-1.5': !role,
        'p-3': role && !description,
        'p-4': description,
      }"
    >
      <div
        v-if="!role"
        class="p-1.5 mx-1.5 rounded-full"
        :style="{ background: color }"
      ></div>
      <Skeleton
        v-else
        :img="`/${title.split(' ')[0]}.webp`"
        class="rounded-xl"
      />
      <div>
        <h2 class="line-clamp-1" v-html="title"></h2>
        <p v-if="role" v-html="role"></p>
      </div>
    </div>
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