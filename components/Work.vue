<template>
  <a
    :href="url"
    class="relative flex flex-col p-5 transition transform bg-center bg-cover rounded-lg cursor-pointer  md:items-center md:flex-row hover:bg-black dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-5"
    target="_blank"
  >
    <img
      class="
        object-cover
        h-40
        rounded-md
        md:w-48
        md:h-full
        bg-[#151516]
        dark:bg-[#121214]
      "
      :src="`/projects/${img}.png`"
      alt="logo"
    />
    <div class="mt-4 md:pl-6 md:mt-0">
      <h1 class="text-2xl font-medium font-base">{{ title }}</h1>
      <p>{{ role }}</p>
      <p class="mt-2 text-xl leading-6 text-gray-800 line-clamp-2">
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