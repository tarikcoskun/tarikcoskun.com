<template>
  <section class="max-w-3xl mx-auto">
    <h1 class="ml-2 opacity-0 sm:ml-3 anime">Experiences</h1>
    <div class="grid gap-2 mt-2 sm:grid-cols-2">
      <Card
        v-for="(position, index) in positions"
        :key="index"
        :url="position.url"
        :title="position.title"
        :role="position.role"
        :color="position.color"
        :description="position.description"
        class="opacity-0 anime-experiences"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      positions: [
        {
          url: "https://discords.com/templates",
          title: "Discord Templates",
          role: "Moderator",
          description:
            "A service for Discord that allows you to share server templates",
        },
        {
          url: "https://premid.app",
          title: "PreMiD",
          role: "Translator",
          description:
            "A utility that allows you to show what you're doing in your Discord status",
        },
        {
          url: "https://crumblingstatue.github.io/FloweysTimeMachine",
          title: "Flowey's Time Machine",
          role: "Lead Designer",
          description:
            "An editor tool for Undertale that allows you to change everything in your save file",
        },
        {
          url: "https://store.steampowered.com/app/1115050/Will_You_Snail",
          title: "Will You Snail?",
          role: "Translator",
          description:
            "A fast paced action platformer where an evil AI tries to kill you with predictions",
        },
      ],
    };
  },
};
</script>