<template>
  <Section>
    <h1>Experiences</h1>
    <div
      class="grid flex-grow-0 gap-3 sm:grid-cols-3"
      xyz="fade down stagger-3 duration-10"
    >
      <Card
        v-for="(position, index) in positions"
        :key="index"
        :url="position.url"
        :title="position.title"
        :role="position.role"
        :color="position.color"
        :description="position.description"
        c
        class="mt-1"
      />
    </div>
  </Section>
</template>

<script>
export default {
  data() {
    return {
      positions: [
        {
          url: "https://temp.gg",
          title: "Templates",
          role: "Moderator",
          description:
            "A service for Discord that allows you to share server templates and use them easily!",
        },
        {
          url: "https://premid.app",
          title: "PreMiD",
          role: "Translator",
          description:
            "A utility that allows you to show what you're doing on the web in your Discord status",
        },
        {
          url: "https://floweystimemachine.github.io",
          title: "Flowey's Time Machine",
          role: "Lead Designer",
          description:
            "An editor tool for Undertale that allows you to change everything in your save easily!",
        },
        {
          url: "https://dogehouse.tv",
          title: "DogeHouse",
          role: "Translator",
          color: "#efe7dc",
        },
        {
          url: "https://store.steampowered.com/app/1115050/Will_You_Snail",
          title: "Will You Snail?",
          role: "Translator",
          color: "#c42277",
        },
      ],
    };
  },
};
</script>