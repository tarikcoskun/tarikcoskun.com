<template>
  <div>
    <h1>Projects</h1>
    <div class="grid gap-3 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project"
        class="flex-col rounded-lg md:flex background"
      >
        <img
          :src="project.photo"
          draggable="false"
          class="w-full rounded-t-lg"
        />
        <div class="p-3">
          <h1 :title="project.title" class="text-lg text-left truncate">
            <a
              :href="project.link"
              target="_blank"
              class="hover:underline focus:outline-none"
            >
              {{ project.title }}
            </a>
          </h1>
          <p class="-mt-1 text-base leading-6 line-clamp-2">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.background {
  background: #f0f0f0;
}
.dark-mode .background {
  background: #202020;
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
            'https://media.discordapp.net/attachments/705535550093787296/810173445186387978/flowey.png',
          description:
            "Flowey's Time Machine is an UNDERTALE save editor that allows you to change everything about your save easily",
        },
      ],
    }
  },
}
</script>
