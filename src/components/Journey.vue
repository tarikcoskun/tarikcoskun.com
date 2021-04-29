<template>
  <div class="flex md:contents journey">
    <div
      v-if="!position"
      class="col-start-1 col-end-5 p-4 my-6 mr-auto rounded-lg md:mr-0 md:ml-auto"
      style="background: var(--gray)"
    >
      <span class="font-mono" v-html="date"></span>
      <h2 v-html="title"></h2>
      <p v-if="description" v-html="description"></p>
    </div>
    <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
      <div class="flex items-center justify-center w-6 h-full">
        <div class="w-1 h-full" style="background: var(--another-gray)"></div>
      </div>
      <div
        class="absolute w-4 h-4 ml-1 -mt-3 rounded-full top-1/2"
        style="background: var(--gray-secondary)"
      ></div>
    </div>
    <div
      v-if="position"
      class="col-start-6 col-end-10 p-4 my-6 mr-auto rounded-lg"
      style="background: var(--gray)"
    >
      <span class="font-mono" v-html="date"></span>
      <h2 v-html="title"></h2>
      <p v-if="description" v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["date", "title", "description", "position"],
};
</script>