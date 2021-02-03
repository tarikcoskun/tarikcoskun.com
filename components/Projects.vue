<template>
  <div>
    <h1>Projects</h1>
    <div class="grid">
      <a
        :href="project.link"
        target="_blank"
        v-for="project in projects"
        :key="project"
        class="project"
      >
        <img :src="project.photo" draggable="false" class="w-auto h-auto md:w-80 md:rounded-l-lg md:rounded-t-none rounded-t-md" />
        <div class="p-2 space-y-2 md:p-6">
          <h1 :title="project.title" class="project-title">{{ project.title }}</h1>
          <p class="hidden text-lg leading-6 md:block">{{ project.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="postcss">
.project {
  @apply md:flex bg-gray-200 rounded-md md:rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400;
}
.project-title {
  @apply text-xl md:text-2xl text-center md:text-left text-gray-800 truncate;
  margin-bottom: -0.05rem;
}
.dark-mode .project {
  @apply bg-gray-700 hover:bg-gray-600 focus:ring-gray-500;
}
.dark-mode .project-title {
  @apply text-gray-200 font-normal;
}
</style>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Flowey\'s Time Machine Rework',
          link: 'http://crumblingstatue.github.io/FloweysTimeMachine',
          badge: 'Designer',
          photo: 'https://cdn.discordapp.com/attachments/801123953187749918/804766073697075240/Screen_Shot_2021-01-29_at_23.02.56.png',
          description :'Flowey\'s Time Machine is an UNDERTALE save editor that allows you to change everything about your save easily',
        },
      ],
    }
  },
}
</script>
