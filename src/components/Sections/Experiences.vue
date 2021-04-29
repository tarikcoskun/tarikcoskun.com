<template>
  <Section>
    <XyzTransition :appear-visible="{ threshold: 0.5 }">
      <h1 xyz="fade down duration-8 delay-5">Experiences</h1>
    </XyzTransition>
    <div
      class="grid gap-3 sm:grid-cols-3 xyz-nested"
      xyz="fade down stagger-6 delay-5 duration-15"
    >
      <XyzTransition
        :appear-visible="{ threshold: 0.5 }"
        :style="`--xyz-index: ${i};`"
        v-for="(e, i) in positions"
        :key="i"
      >
        <Card
          :url="e.url"
          :title="e.title"
          :role="e.role"
          :color="e.color"
          :description="e.description"
        />
      </XyzTransition>
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
          title: "Undertale Editor",
          role: "Designer",
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