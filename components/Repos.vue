<template>
  <div>
    <h1>GitHub Repositories</h1>
    <div class="grid gap-3 lg:grid-cols-2">
      <div class="repo" v-for="repo in repos" :key="repo">
        <h1 class="flex text-lg">
          <a
            :href="`https://github.com/${repo.author}/${repo.name}`"
            target="_blank"
            class="hover:underline focus:outline-none"
            >{{ repo.name }}</a
          >
          <img
            :src="repo.icon"
            width="22px"
            class="ml-2"
            :title="repo.language"
          />
        </h1>
        <p class="-mt-1 text-base truncate" :title="repo.description">
          {{ repo.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.repo {
  @apply p-4 rounded-md;
  background: #f0f0f0;
}
.skeleton {
  @apply h-4 rounded;
  background: #bebebe;
}
.error-message {
  @apply text-lg flex mt-4 text-gray-700;
}
.dark-mode .repo {
  background: #202020;
}
.dark-mode .skeleton {
  background: #505050;
}
.dark-mode .error-message {
  @apply text-gray-300;
}
</style>

<script>
export default {
  data() {
    return {
      repos: [
        {
          author: 'tarikcoskun',
          name: 'tarikcoskun.xyz',
          description: '✨ Source code of my personal website!',
          language: 'Vue',
          icon: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
        },
        {
          author: 'floweystimemachine',
          name: 'FloweysTimeMachine',
          description: '❤️ UNDERTALE save editor',
          language: 'JavaScript',
          icon:
            'https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg',
        },
      ],
    }
  },
  fetchOnServer: false,
}
</script>
