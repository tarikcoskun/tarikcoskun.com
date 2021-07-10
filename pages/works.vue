<template>
  <section class="content-container">
    <header>
      <h2>Works</h2>
      <h1>Tarık Coşkun</h1>
    </header>
    <main>
      <div class="grid md:grid-cols-2">
        <Work
          v-for="(work, index) in works"
          :key="index"
          :to="work.url"
          :role="work.role"
          :title="work.title"
          :description="work.description"
          :class="[
            index % 2 == 1 ? 'pr-0 md:pl-4' : 'md:border-r pl-0 md:pr-4',
          ]"
        />
      </div>
    </main>
  </section>
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