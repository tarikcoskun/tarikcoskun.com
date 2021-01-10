<template>
  <section
    class="grid gap-2 p-4 mb-2 col-span-full md:gap-4 md:grid-cols-2 md:mt-2 md:pb-12 md:pt-6 md:px-24"
  >
    <NuxtLink
      to="#"
      class="p-3 bg-teal-500 border-2 border-teal-600 rounded-lg"
      v-for="item in projects"
      :key="item"
    >
      <div class="py-16 mb-2 bg-teal-600 rounded-md"></div>
      <h1 class="text-xl text-white">{{ item.title }}</h1>
      <p class="text-justify text-gray-100 line-clamp-2">
        {{ item.description }}
      </p>
    </NuxtLink>
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
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maiores sint obcaecati vel perspiciatis amet voluptas, consequatur nobis sequi qui enim facere non expedita, neque nemo tenetur magnam repellat officia dolore harum doloribus quod excepturi in hic? Quibusdam, neque sapiente voluptatibus pariatur sint numquam impedit iure laboriosam recusandae, vitae qui?',
        },
        {
          image: '',
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maiores sint obcaecati vel perspiciatis amet voluptas, consequatur nobis sequi qui enim facere non expedita, neque nemo tenetur magnam repellat officia dolore harum doloribus quod excepturi in hic? Quibusdam, neque sapiente voluptatibus pariatur sint numquam impedit iure laboriosam recusandae, vitae qui?',
        },
      ],
    }
  },
}
</script>
