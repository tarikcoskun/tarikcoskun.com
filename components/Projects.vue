<template>
  <div>
    <h2>Projects</h2>
    <div class="grid gap-4 lg:grid-cols-2">
      <a
        :href="project.link"
        target="_blank"
        v-for="project in projects"
        :key="project"
        class="flex flex-shrink"
      >
        <img
          :src="project.photo"
          draggable="false"
          class="rounded-lg"
          style="width: 100px; height: 100px"
        />
        <div class="pl-3">
          <h1 :title="project.title" class="project-title">
            {{ project.title }}
          </h1>
          <p class="text-base leading-6 text-left line-clamp-3">
            {{ project.description }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="postcss">
.project-title {
  @apply text-lg text-left truncate;
  margin-bottom: -0.05rem;
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
            'https://media.discordapp.net/attachments/705535550093787296/810121912276746241/Adsz.png',
          description:
            "Flowey's Time Machine is an UNDERTALE save editor that allows you to change everything about your save easily",
        },
      ],
    }
  },
}
</script>
