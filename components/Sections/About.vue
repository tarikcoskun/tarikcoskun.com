<template>
  <section id="about">
    <h1 class="text-3xl opacity-0 anime">Tarık Coşkun</h1>
    <p class="mt-2 text-lg opacity-0 anime">
      Hello there, I'm Tarık, a front-end developer in the road of full-stack.
      Love playing the piano and interested in games like Undertale, Geometry
      Dash and Will You Snail?
    </p>
    <div class="flex items-center flex-shrink-0 mt-2 -ml-2">
      <Account
        v-for="(account, index) in accounts"
        :key="index"
        :url="account.url"
        :icon="account.icon"
        class="opacity-0 anime-accounts"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          url: "https://discord.com/users/474537652943847444",
          icon: "discord",
        },
        {
          url: "https://twitter.com/itstarikcoskun",
          icon: "twitter",
        },
        {
          url: "https://github.com/tarikcoskun",
          icon: "github",
        },
        {
          url: "https://crowdin.com/profile/tarikcoskun",
          icon: "crowdin",
        },
      ],
    };
  },
};
</script>