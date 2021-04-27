<template>
  <div class="grid gap-16">
    <section class="flex flex-col items-center justify-center space-y-3">
      <Skeleton
        :image-url="require('~/assets/img/avatar.png')"
        type="avatar"
        color="var(--gray)"
      />
      <div class="text-center">
        <h1 class="-mb-px">Tarık Coşkun</h1>
        <Typer class="" />
        <div class="flex items-center justify-center mt-2 space-x-2">
          <Account
            v-for="acc in accounts"
            v-bind:key="acc"
            :url="acc.url"
            :icon="acc.icon"
            class="account"
          />
        </div>
      </div>
    </section>
    <section>
      <h1>About me</h1>
      <p class="text-lg">
        Hello there, visitor! I'm Tarık, a front-end developer from Turkey. I'm
        currently working at Discord Templates as a Moderator and also
        translating many projects which you can find from my
        <a
          class="text-lg"
          href="https://crowdin.com/profile/tarikcoskun"
          draggable="false"
          >Crowdin profile</a
        >. Aside coding, I love playing games like Minecraft, Terraria,
        Half-Life and Undertale.
      </p>
    </section>
    <section>
      <h1>Current positions</h1>
      <div class="grid gap-3 sm:grid-cols-3">
        <Card
          v-for="pos in positions"
          v-bind:key="pos"
          :url="pos.url"
          :title="pos.title"
          :color="pos.color"
          :role="pos.role"
          :description="pos.description"
        />
      </div>
    </section>
    <section>
      <h1>Also contributed to</h1>
      <div class="grid gap-3 sm:grid-cols-3 md:grid-cols-3">
        <Card
          v-for="contrib in contributions"
          v-bind:key="contrib"
          :url="contrib.url"
          :title="contrib.title"
          :color="contrib.color"
          :role="contrib.role"
        />
      </div>
    </section>
    <section>
      <h1>Technologies I use</h1>
      <div class="grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-5">
        <Card
          v-for="tech in technologies"
          v-bind:key="tech"
          :title="tech.title"
          :color="tech.color"
          type="tech"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: require("~/assets/data/accounts.json"),
      positions: require("~/assets/data/positions.json"),
      contributions: require("~/assets/data/contributions.json"),
      technologies: require("~/assets/data/technologies.json"),
    };
  },
};
</script>