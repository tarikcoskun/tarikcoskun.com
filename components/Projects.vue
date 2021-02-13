<template>
  <div>
    <h1>Projects</h1>
    <div class="grid gap-4 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project"
        class="flex-col rounded-lg md:flex"
        style="
          background-image: linear-gradient(to bottom right, #121212, #000);
        "
      >
        <img
          :src="project.photo"
          draggable="false"
          class="w-full rounded-t-lg"
          style="background-color: rgba(0, 0, 0, 0.5)"
        />
        <div class="p-3">
          <h1 :title="project.title" class="text-lg text-left truncate">
            <a
              :href="project.link"
              target="_blank"
              class="text-white hover:underline focus:outline-none focus:underline"
            >
              {{ project.title }}
            </a>
          </h1>
          <p class="-mt-1 text-base leading-6 text-gray-100 line-clamp-2">
            {{ project.description }}
          </p>
        </div>
      </div>
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
          link: 'http://crumblingstatue.github.io/FloweysTimeMachine',
          badge: 'Designer',
          photo:
            'https://media.discordapp.net/attachments/705535550093787296/810173997253787658/flowey.png',
          description:
            "Flowey's Time Machine is an UNDERTALE save editor that allows you to change everything about your save easily",
        },
      ],
    }
  },
}
</script>
