<template>
  <div>
    <h1>Projects</h1>
    <div class="grid gap-3 lg:grid-cols-2">
      <a
        v-for="project in projects"
        :key="project"
        :href="project.link"
        target="_blank"
        class="flex background rounded-lg"
      >
        <img
          :src="project.photo"
          draggable="false"
          class="md:rounded-l-lg md:block hidden w-24 h-24"
        />
        <div class="px-2.5 flex justify-center align-center flex-col">
          <h1 :title="project.title" class="text-lg text-left truncate">
            {{ project.title }}
          </h1>
          <p class="-mt-2 text-base leading-6 line-clamp-2" :title="project.description">
            {{ project.description }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Flowey's Time Machine Rework",
          link: 'https://floweystimemachine.github.io',
          badge: 'Designer',
          photo:
            'http://localhost:3000/flowey.png',
          description:
            "Flowey's Time Machine is an UNDERTALE save editor that allows you to change everything about your save easily",
        },
      ],
    }
  },
}
</script>
