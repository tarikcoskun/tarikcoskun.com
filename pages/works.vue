<template>
  <div class="main-content">
    <div class="works-container">
      <Work
        v-for="(work, index) in works"
        :key="index"
        :url="work.url"
        :img="work.img"
        :role="work.role"
        :title="work.title"
        :description="work.description"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          url: "https://discords.com/templates",
          title: "Discord Templates",
          role: "Moderator",
          description:
            "A service for Discord that allows users to share and use server templates",
        },
        {
          url: "https://premid.app",
          title: "PreMiD",
          role: "Translator",
          description:
            "A utility that allows you to show what you're doing on web in your Discord status",
        },
        {
          url: "https://crumblingstatue.github.io/FloweysTimeMachine",
          title: "Flowey's Time Machine",
          role: "Lead Designer",
          description:
            "An editor tool for Undertale that allows you to change everything in your save file with a friendly UI",
        },
        {
          url: "https://store.steampowered.com/app/1115050/Will_You_Snail",
          title: "Will You Snail?",
          role: "Translator, Tester",
          description:
            "A fast paced action platformer where an evil AI tries to kill you by predicting your movement",
        },
      ],
    };
  },
};
</script>