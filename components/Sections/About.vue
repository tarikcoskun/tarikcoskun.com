<template>
  <section class="flex flex-col justify-center h-screen">
    <h1 class="leading-[3.5rem] opacity-0 text-5xl anime">
      Hello, <br />
      it's Tarık C.
    </h1>
    <p class="my-3 text-xl opacity-0 md:w-1/2 anime">
      I'm a Front-end developer with over 3 years of experience. Aside coding,
      translating stuff voluntarily.
    </p>
    <a
      class="
        anime
        opacity-0
        w-40
        text-center text-lg
        p-2
        rounded-lg
        transition-colors
        duration-200
        bg-[#232039]
        hover:bg-[#303047]
      "
      href="#contact"
      >Contact me</a
    >
    <!-- <div class="flex items-center flex-shrink-0 -ml-2">
      <Account
        v-for="(account, index) in accounts"
        :key="index"
        :url="account.url"
        :icon="account.icon"
        class="opacity-0 anime-accounts"
      />
    </div> -->
  </section>
</template>

<!--<script>
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
</script>-->