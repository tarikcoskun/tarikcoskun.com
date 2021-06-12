<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer"
    class="
      grid
      w-full
      bg-[#ffffff15]
      rounded-lg
      blur
      duration-200
      ease-out
      transform
      hover:scale-[1.025]
    "
    draggable="false"
    v-wave
  >
    <div class="flex items-center p-3 space-x-3">
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
        <h2
          class="mb-[-0.15rem] line-clamp-1"
          v-html="title"
          :title="title"
        ></h2>
        <p v-if="role" v-html="role"></p>
      </div>
    </div>
    <hr
      v-if="description"
      class="mb-3 mt-1 rounded border-[1.5px] border-[#8b7af4] bg-[#8b7af4]"
    />
    <div class="p-3 pt-0" v-if="description">
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