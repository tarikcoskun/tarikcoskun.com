<template>
  <Section>
    <div class="flex flex-col md:w-2/3">
      <XyzTransition :appear-visible="{ threshold: 0.5 }">
        <h1 class="text-2xl" xyz="fade up duration-8">Tarık Coşkun</h1>
      </XyzTransition>
      <XyzTransition :appear-visible="{ threshold: 0.5 }">
        <p class="text-[1.05rem]" xyz="fade delay-5 up duration-8">
          Hello there, visitor! I'm Tarık, a front-end developer from Turkey.
          I'm currently working at Discord Templates as a Moderator and also
          translating many projects which you can find from my
          <a
            class="duration-75 transform border-b-2 border-blue-800 dark:border-gray-400"
            href="https://crowdin.com/profile/tarikcoskun"
            draggable="false"
            >Crowdin profile</a
          >.
        </p>
      </XyzTransition>
      <div
        class="flex items-center mt-3 space-x-2 xyz-nested"
        xyz="fade down delay-8 stagger-2 duration-8"
      >
        <XyzTransition
          :appear-visible="{ threshold: 0.5 }"
          :style="`--xyz-index: ${i};`"
          v-for="(e, i) in accounts"
          :key="i"
        >
          <Account :url="e.url" :icon="e.icon" />
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
          url: "mailto:imtarikcoskun@gmail.com",
          icon: "at",
        },
      ],
    };
  },
};
</script>