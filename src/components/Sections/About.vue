<template>
  <Section>
    <div class="md:w-2/3">
      <h1>Tarık Coşkun</h1>
      <XyzTransition :appear-visible="{ threshold: 0.5 }">
        <p class="text-lg leading-6" xyz="fade down delay-1 duration-8">
          Hello there, visitor! I'm Tarık, a front-end developer from Turkey.
          I'm currently working at Discord Templates as a Moderator and also
          translating many projects which you can find from my
          <a
            class="text-lg bg-gray-300 dark:bg-gray-700 dark:hover:border-gray-100 hover:border-b-2 hover:border-gray-700"
            href="https://crowdin.com/profile/tarikcoskun"
            target="_blank"
            rel="noreferrer"
            draggable="false"
            >Crowdin profile</a
          >.
        </p>
      </XyzTransition>
      <div
        class="flex items-center mt-2 space-x-1"
        xyz="fade down stagger-2 duration-8"
      >
        <Account
          v-for="(account, index) in accounts"
          :key="index"
          :url="account.url"
          :icon="account.icon"
        />
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
          url: "mailto:imtarikcoskun@gmail.com",
          icon: "at",
        },
      ],
    };
  },
};
</script>