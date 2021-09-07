<template>
  <a
    :href="url"
    class="relative flex flex-col p-5 transition transform bg-white bg-opacity-0 bg-center bg-cover rounded-lg cursor-pointer  md:items-center md:flex-row hover:bg-opacity-5"
    target="_blank"
  >
    <img
      class="object-cover h-40 rounded-md md:w-48 md:h-full bg-[#151517]"
      :src="`/img/${img}.png`"
      alt="logo"
    />
    <div class="mt-4 md:pl-6 md:mt-0">
      <h1 class="text-2xl font-semibold text-white">{{ title }}</h1>
      <p class="text-lg text-gray-400">{{ role }}</p>
      <p class="mt-2 text-xl leading-6 line-clamp-2">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script lang="ts">
export default {
  props: ["url", "img", "role", "title", "description"],
};
</script>