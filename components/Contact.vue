<template>
  <div class="px-3">
    <h2>Contact Me</h2>
    <p class="-mt-1 text-center">You can find me on</p>
    <div class="flex flex-wrap justify-center mt-2">
      <a
        v-for="account in accounts"
        :key="account"
        :href="account.link"
        target="_blank"
      >
        <unicon
          :name="account.name"
          :fill="account.color"
          width="48"
          height="48"
          class="account"
      /></a>
    </div>
  </div>
</template>

<style lang="postcss">
.account {
  @apply mx-1 hover:opacity-75;
}
.dark-mode .account {
  @apply text-gray-200;
}
</style>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          name: 'discord',
          color: '#7289da',
          link: 'https://discord.com/users/474537652943847444',
        },
        {
          name: 'twitter',
          color: '#1da1f2',
          link: 'https://twitter.com/itstarikcoskun',
        },
        {
          name: 'github',
          color: 'currentColor',
          link: 'https://github.com/tarikcoskun',
        },
        {
          name: 'at',
          color: '#d34b3f',
          link: 'mailto:imtarikcoskun@gmail.com',
        },
      ],
    }
  },
}
</script>
