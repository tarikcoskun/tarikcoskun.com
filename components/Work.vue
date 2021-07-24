<template>
  <a
    :href="url"
    class="relative flex items-end m-0 transition duration-300 transform bg-center bg-cover cursor-pointer  rounded-xl h-60 group hover:scale-105"
    target="_blank"
    :style="{ backgroundImage: `url('/img/${img}.png')` }"
  >
    <div
      class="
        absolute
        bottom-0
        left-0
        w-full
        h-full
        transition
        duration-300
        opacity-0
        group-hover:opacity-100
        bg-gradient-to-b
        from-transparent
        via-[#0d0d0f90]
        to-[#0d0d0f]
        rounded-xl
      "
    ></div>
    <div
      class="z-10 p-8 transition duration-300 opacity-0 group-hover:opacity-100"
    >
      <h2 class="text-xl">{{ title }}</h2>
      <p class="mt-2 text-lg leading-6 line-clamp-2" :title="description">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["url", "img", "role", "title", "description"],
};
</script>