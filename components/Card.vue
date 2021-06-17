<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer"
    class="
      grid
      w-full
      hover:bg-[#dedede]
      dark:hover:bg-[#161616]
      rounded-lg
      duration-200
    "
    draggable="false"
    v-wave
  >
    <div class="flex items-center p-2 space-x-4 sm:p-3">
      <Skeleton
        :img="`/${title
          .toLowerCase()
          .match(/[^\'\?]+/g)
          .join('')
          .split(' ')
          .join('')}.webp`"
        :color="color"
        class="rounded-lg"
      />
      <div>
        <h2 class="mb-[-0.15rem] line-clamp-1" v-html="title"></h2>
        <p v-if="role" v-html="role"></p>
      </div>
    </div>
    <p
      class="w-[97.5%] p-2 sm:p-3 pt-0 sm:pt-0"
      v-if="description"
      v-html="description"
    ></p>
  </a>
</template>

<script>
export default {
  props: ["url", "title", "role", "description", "color"],
};
</script>