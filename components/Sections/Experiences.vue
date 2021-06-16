<template>
  <section>
    <h1 class="opacity-0 anime">Experiences</h1>
    <div class="grid -ml-2 sm:-ml-3 sm:grid-cols-2">
      <Card
        v-for="(position, index) in positions"
        :key="index"
        :url="position.url"
        :title="position.title"
        :role="position.role"
        :color="position.color"
        :description="position.description"
        class="mt-1 opacity-0 anime-experiences"
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
          title: "Templates",
          role: "Moderator",
          description:
            "A service for Discord that allows you to share server templates",
        },
        {
          url: "https://premid.app",
          title: "PreMiD",
          role: "Translator",
          description:
            "A utility that allows you to show what you're doing on the web in your Discord status",
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
          color: "#c42277",
          description:
            "A fast paced action platformer where an evil AI tries to kill you with predictions",
        },
        /*{
          url: "https://dogehouse.tv",
          title: "DogeHouse",
          role: "Translator",
          color: "#efe7dc",
          description:
            "DogeHouse is taking voice conversations to the moon (cancelled)",
        },*/
      ],
    };
  },
};
</script>