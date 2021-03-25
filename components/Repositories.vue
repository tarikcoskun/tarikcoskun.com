<template>
  <div class="mt-6">
    <div v-if="$fetchState.pending" class="grid gap-2 md:grid-cols-3">
      <div
        v-for="item in 3"
        class="p-4 bg-gray-200 border-b-4 border-gray-300 rounded-md"
      >
        <div class="flex space-x-4 animate-pulse">
          <div class="flex-1 py-1 space-y-5">
            <div class="w-2/4 h-4 bg-gray-400 rounded"></div>
            <div class="space-y-2">
              <div class="w-5/6 h-4 bg-gray-400 rounded"></div>
              <div class="w-2/5 h-4 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="$fetchState.error">
      <h2 class="flex mt-4 text-lg text-gray-700">
        <unicon
          name="exclamation-triangle"
          width="24"
          height="24"
          fill="currentColor"
          class="mt-px mr-1.5"
        />
        Cannot fetch repositories, please check your connection
      </h2>
    </div>

    <div v-else-if="repos.length > 0" class="grid gap-2 md:grid-cols-3">
      <div
        class="p-4 bg-gray-200 border-b-4 border-gray-300 rounded-md"
        v-for="repo in repos"
        :key="repo"
      >
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
          <p class="flex text-base focus:outline-none">
            <unicon
              name="star"
              width="20"
              height="20"
              fill="#ffac33"
              class="mr-1"
            />
            {{ repo.stargazers_count }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repos: [],
    };
  },
  fetchOnServer: false,
  async fetch() {
    const { data: repos } = await this.$axios.get(
      "https://api.github.com/users/tarikcoskun/repos"
    );
    const filter = ["tarikcoskun"];

    this.repos = repos
      ?.filter((repo) => repo.fork === false && !filter.includes(repo.name))
      ?.sort((a, b) => a?.created_at - b?.created_at);
  },
};
</script>