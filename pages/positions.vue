<template>
  <section
    class="grid gap-4 p-4 mb-2 md:grid-cols-2 col-span-full md:pb-12 md:px-40"
  >
    <NuxtLink
      to="#"
      class="p-3 bg-teal-600 border-2 border-teal-700 border-opacity-50 rounded-lg hover:bg-teal-700"
      v-for="item in positions"
      :key="item"
    >
      <h1 class="text-2xl text-white">
        {{ item.title }}
        <span class="block -mt-1 text-base text-teal-200">{{
          item.position
        }}</span>
      </h1>
      <p class="mt-px text-justify text-teal-100 line-clamp-3">
        {{ item.description }}
      </p>
    </NuxtLink>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Positions - Tarık Coşkun',
    }
  },
  data() {
    return {
      positions: [
        {
          title: 'Generations',
          position: 'Website Developer',
          description:
            'Generations is a survival game set in the stone-age. It contains fantasy elements, but it also has realistic aspects such as wild animals. Survival is the main importance. Do you have what it takes to survive?',
        },
        {
          title: 'Project Name',
          position: 'Position',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maiores sint obcaecati vel perspiciatis amet voluptas, consequatur nobis sequi qui enim facere non expedita, neque nemo tenetur magnam repellat officia dolore harum doloribus quod excepturi in hic? Quibusdam, neque sapiente voluptatibus pariatur sint numquam impedit iure laboriosam recusandae, vitae qui?',
        },
      ],
    }
  },
}
</script>
