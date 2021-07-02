<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer"
    class="
      grid
      place-items-start
      w-full
      hover:bg-[#cecece]
      rounded-lg
      duration-200
      cursor-pointer
    "
    draggable="false"
    v-wave
  >
    <div class="flex items-center p-2 space-x-4 sm:p-3">
      <Skeleton
        :img="
          title
            .toLowerCase()
            .match(/[^\'\?]+/g)
            .join('')
            .split(' ')
            .join('')
        "
        class="rounded-lg"
      />
      <div>
        <h2 class="-mb-1 text-lg" v-html="title"></h2>
        <p v-if="role" v-html="role"></p>
      </div>
    </div>
    <p
      class="p-2 pt-0 leading-6 sm:p-3 sm:pt-0"
      v-if="description"
      v-html="description"
    ></p>
  </a>
</template>

<script>
export default {
  props: ["url", "title", "role", "description"],
};
</script>