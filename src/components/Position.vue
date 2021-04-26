<template>
  <a
    :href="url"
    target="_blank"
    class="card rounded-xl"
    draggable="false"
    v-wave
  >
    <div class="flex items-center p-4 space-x-3">
      <Skeleton
        :image-url="require(`~/assets/img/${title.split(' ')[0]}.png`)"
        class="rounded-xl"
      />
      <div>
        <h2 class="line-clamp-1">
          {{ title }}
        </h2>
        <p>{{ role }}</p>
      </div>
    </div>
    <hr />
    <div class="p-4">
      <h2>Description</h2>
      <p class="mt-1">{{ description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["title", "url", "role", "description"],
};
</script>