<template>
  <a
    :href="url"
    class="relative flex flex-col p-4 m-0 transition duration-300 transform bg-center bg-cover rounded-lg cursor-pointer  md:items-center md:flex-row hover:bg-black hover:bg-opacity-5"
    target="_blank"
  >
    <img
      class="object-cover h-40 rounded-md md:w-48 md:h-full"
      :src="`/img/${img}.png`"
      alt="logo"
    />
    <div class="mt-4 md:pl-6 md:mt-0">
      <h2 class="text-2xl">{{ title }}</h2>
      <p class="m-0">{{ role }}</p>
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