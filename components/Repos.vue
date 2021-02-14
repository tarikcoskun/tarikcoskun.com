<template>
  <div>
    <h1>GitHub Repositories</h1>
    <div v-if="$fetchState.pending" class="grid gap-2 lg:grid-cols-2">
      <div v-for="item in 2" class="repo">
        <div class="flex space-x-4 animate-pulse">
          <div class="flex-1 py-1 space-y-5">
            <div class="w-2/4 skeleton"></div>
            <div class="space-y-2">
              <div class="w-5/6 skeleton"></div>
              <div class="w-2/5 skeleton"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="$fetchState.error">
      <h2 class="error-message">
        <unicon
          name="exclamation-triangle"
          width="24"
          height="24"
          fill="currentColor"
          class="mt-px mr-1.5"
        />
        An error occured while fetching repositories
      </h2>
    </div>

    <div v-else-if="repos.length > 0" class="grid gap-2 lg:grid-cols-2">
      <div class="repo" v-for="repo in repos" :key="repo">
        <h1 class="text-lg hover:underline focus:outline-none focus:underline">
          <a
            :href="repo.html_url"
            target="_blank"
            class="hover:underline focus:outline-none"
            >{{ repo.name }}</a
          >
        </h1>
        <p class="-mt-1 text-base truncate" :title="repo.description">
          {{ repo.description }}
        </p>
        <div class="flex flex-wrap mt-1 space-x-4">
          <p class="text-base">{{ repo.language }}</p>
          <a
            :href="`https://github.com/tarikcoskun/${repo.name}/stargazers`"
            target="_blank"
            class="flex text-base focus:outline-none"
          >
            <unicon
              name="star"
              width="20"
              height="20"
              fill="#ffac33"
              class="mr-1"
            />
            {{ repo.stargazers_count }}
          </a>
        </div>
      </div>
      <div class="repo" v-for="repo in ftm" :key="repo">
        <h1 class="text-lg hover:underline focus:outline-none focus:underline">
          <a
            :href="repo.html_url"
            target="_blank"
            class="hover:underline focus:outline-none"
            >{{ repo.name }}</a
          >
        </h1>
        <p class="-mt-1 text-base truncate" :title="repo.description">
          {{ repo.description }}
        </p>
        <div class="flex flex-wrap mt-1 space-x-4">
          <p class="text-base">{{ repo.language }}</p>
          <a
            :href="`https://github.com/floweystimemachine/${repo.name}/stargazers`"
            target="_blank"
            class="flex text-base focus:outline-none"
          >
            <unicon
              name="star"
              width="20"
              height="20"
              fill="#ffac33"
              class="mr-1"
            />
            {{ repo.stargazers_count }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.repo {
  @apply p-4 rounded-lg;
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
      repos: [],
      ftm: [],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const { data: repos } = await this.$axios.get(
      'https://api.github.com/users/tarikcoskun/repos'
    )
    const { data: ftm } = await this.$axios.get(
      'https://api.github.com/users/floweystimemachine/repos'
    )
    const filter = ['tarikcoskun']
    this.repos = repos
      ?.filter((repo) => !filter.includes(repo.name))
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count)
    this.ftm = ftm
  },
}
</script>
