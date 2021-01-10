<template>
  <section class="mt-2 col-span-full">
    <div class="p-3 bg-teal-500 border-2 border-teal-600 rounded-lg md:p-6">
      <h1 class="mb-2 text-3xl text-center text-white">Projects</h1>
      <div class="grid gap-2 md:gap-4 md:grid-cols-2">
        <div
          class="p-3 bg-teal-600 rounded-lg"
          v-for="item in projects"
          :key="item"
        >
          <div class="py-16 mb-2 bg-white rounded-md"></div>
          <h1 class="text-xl text-white">{{ item.title }}</h1>
          <p class="text-justify text-gray-100 line-clamp-2">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Projects - Tarık Coşkun',
    }
  },
  data() {
    return {
      projects: [
        {
          image: '',
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.',
        },
      ],
    }
  },
}
</script>
