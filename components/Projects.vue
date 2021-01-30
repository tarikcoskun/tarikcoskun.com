<template>
  <div>
    <h1>Projects</h1>
    <div class="grid gap-4 md:grid-cols-2">
      <a
        :href="project.link"
        v-for="project in projects"
        :key="project"
        target="_blank"
        class="project"
      >
        <img
          class="block w-full h-auto"
          :src="project.photo"
          draggable="false"
        />
        <header class="project-header">
          <h1 :title="project.title" class="project-title">
            {{ project.title }}
          </h1>
          <span class="project-badge">{{ project.badge }}</span>
        </header>
      </a>
    </div>
  </div>
</template>

<style lang="postcss">
.project {
  @apply overflow-hidden bg-gray-200 rounded-md hover:bg-gray-300;
}
.project-header {
  @apply items-center justify-between py-1.5 px-2 md:px-4 md:flex md:py-3;
}
.project-title {
  @apply text-xl text-center text-gray-800 truncate;
  margin-bottom: -0.05rem;
}
.project-badge {
  @apply uppercase hidden ml-1 text-gray-700 bg-gray-300 rounded-full font-bold md:block;
  padding: 0.2rem 0.6rem 0.1rem 0.6rem;
}
.dark-mode .project {
  @apply bg-gray-700 hover:bg-gray-600;
}
.dark-mode .project-title {
  @apply text-gray-200 font-normal;
}
.dark-mode .project-badge {
  @apply bg-gray-600 text-gray-300 font-normal;
}
</style>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Flowey's Time Machine Rework",
          link: 'http://crumblingstatue.github.io/FloweysTimeMachine',
          badge: 'Designer',
          photo:
            'https://media.discordapp.net/attachments/601880078514651166/803930368716832778/unknown.png',
        },
        {
          title: 'tarikcoskun.xyz',
          link: 'https://tarikcoskun.xyz',
          badge: 'Developer',
          photo:
            'https://media.discordapp.net/attachments/705535550093787296/805075022623277056/unknown.png',
        },
      ],
    }
  },
}
</script>
