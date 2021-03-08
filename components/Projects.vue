<template>
  <div>
    <h1>Projects</h1>
    <div class="grid gap-3 lg:grid-cols-2">
      <a
        v-for="project in projects"
        :key="project"
        :href="project.link"
        target="_blank"
        class="select-none flex background rounded-md transform duration-300 hover:-translate-y-1.5"
        v-wave
      >
        <div class="rounded-full" :style="project.color"></div>
        <div class="flex justify-center align-center flex-col" style="padding: 0.5rem 0.3rem;">
          <h1 :title="project.title" class="text-lg text-black text-left truncate">
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
          color: "background: #d6212a; width: 8px; margin: 0.5rem;",
          title: "Flowey's Time Machine Rework",
          link: 'https://floweystimemachine.github.io',
          badge: 'Designer',
          photo: 'https://tarikcoskun.xyz/flowey.png',
          description:
            "Flowey's Time Machine is an UNDERTALE save editor that allows you to change everything about your save easily",
        },
      ],
    }
  },
}
</script>
