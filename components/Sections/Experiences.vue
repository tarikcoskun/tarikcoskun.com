<template>
  <section class="md:mx-24">
    <h2 class="opacity-0 anime-text">Experiences</h2>
    <div class="grid mt-1 sm:grid-cols-3 sm:-ml-3">
      <Card
        v-for="(position, index) in positions"
        :key="index"
        :img="true"
        :url="position.url"
        :title="position.title"
        :role="position.role"
        :color="position.color"
        :description="position.description"
        class="opacity-0 anime-cards"
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
            "A service for Discord that lets you share server templates",
        },
        {
          url: "https://premid.app",
          title: "PreMiD",
          role: "Translator",
          description:
            "A utility that lets you show what you're doing in your Discord status",
        },
        {
          url: "https://crumblingstatue.github.io/FloweysTimeMachine",
          title: "Flowey's Time Machine",
          role: "Lead Designer",
          description:
            "An editor tool for Undertale that lets you change everything in your save",
        },
        {
          url: "https://store.steampowered.com/app/1115050/Will_You_Snail",
          title: "Will You Snail?",
          role: "Translator, Tester",
          description:
            "An action platformer where an evil AI tries to kill you with predictions",
        },
        {
          url: "https://dogehouse.tv",
          title: "DogeHouse",
          role: "Translator",
          description:
            "Taking voice conversations to the moon, but it's cancelled",
        },
        {
          title: "Trigon Bot",
          role: "Creator, Developer",
          description:
            "Trigon was a Discord bot I made, my main source of learning Node.js",
        },
      ],
    };
  },
};
</script>