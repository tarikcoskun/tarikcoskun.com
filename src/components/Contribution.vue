<template>
  <a :href="url" target="_blank" class="card rounded-xl" draggable="false">
    <div class="flex items-center p-3 space-x-3">
      <Skeleton
        :image-url="require(`~/assets/img/${title.split(' ')[0]}.png`)"
        class="rounded-xl"
        :color="color"
      />
      <div>
        <h2 class="line-clamp-1">
          {{ title }}
        </h2>
        <p>{{ role }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["title", "url", "role", "color"],
};
</script>