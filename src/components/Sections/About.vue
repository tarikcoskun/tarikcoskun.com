<template>
  <Section>
    <div class="md:w-2/3">
      <h1>Tarık Coşkun</h1>
        <p class="text-lg leading-6" >
          Hello there, I'm Tarık, a (mostly) front-end developer from Turkey. Recently started using Nuxt and Tailiwnd and this is my portfolio and playground!
        </p>
      <div
        class="flex items-center mt-2 -ml-1.5 space-x-1"
        xyz="fade down stagger-2 duration-8"
      >
        <Account
          v-for="(account, index) in accounts"
          :key="index"
          :url="account.url"
          :icon="account.icon"
        />
        </XyzTransition>
      </div>
    </div>
  </Section>
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