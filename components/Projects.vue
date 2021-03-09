<template>
  <div>
    <h1>Projects</h1>
    <div class="grid gap-3 lg:grid-cols-2">
      <a
        v-for="project in projects"
        :key="project"
        :href="project.link"
        target="_blank"
        class="select-none flex background rounded-md transform duration-300 hover:-translate-y-1.5 border-gray-200 border shadow-md hover:shadow-lg"
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
          link: "https://floweystimemachine.github.io",
          description:
            "Flowey's Time Machine is an UNDERTALE save editor that allows you to change everything about your save easily",
        },
        {
          color: "background: #7289da; width: 8px; margin: 0.5rem;",
          title: "My PreMiD Presences",
          link: "https://premid.app/users/474537652943847444",
          description:
            "PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status."
        }
      ],
    }
  },
}
</script>
