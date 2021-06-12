<template>
  <section class="md:w-2/3" id="about">
    <h1 class="opacity-0 anime-about">Tarık Coşkun</h1>
    <p class="text-lg leading-6 opacity-0 anime-about">
      Hello there, I'm Tarık, a front-end developer in the road of full-stack.
      Recently started using Nuxt and Tailwind.
    </p>
    <div class="flex flex-shrink-0 items-center mt-2 -ml-1.5 space-x-1">
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