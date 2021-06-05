<template>
  <Section>
    <h1>Technologies I use</h1>
    <div
      class="grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-5"
      xyz="fade down stagger-2 duration-8"
    >
      <Tech
        v-for="(technology, index) in technologies"
        :key="index"
        :title="technology.title"
        :color="technology.color"
        class="mt-1"
      />
    </div>
  </Section>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        {
          title: "HTML",
          color: "#f4470b",
        },
        {
          title: "CSS",
          color: "#196eb3",
        },
        {
          title: "JavaScript",
          color: "#e4006e",
        },
        {
          title: "TypeScript",
          color: "#007acc",
        },
        {
          title: "Node.js",
          color: "#047857",
        },
        {
          title: "Nuxt.js",
          color: "#00c58e",
        },
        {
          title: "Vue.js",
          color: "#41b883",
        },
        {
          title: "Tailwind",
          color: "#44a8b3",
        },
        {
          title: "Sass",
          color: "#bf4080",
        },
        {
          title: "Git",
          color: "#f44d27",
        },
      ],
    };
  },
};
</script>