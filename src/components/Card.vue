<template>
  <a
    :href="url"
    target="_blank"
    class="card"
    :class="{
      'cursor-default rounded-lg': type === 'tech',
      'rounded-xl': type !== 'tech',
    }"
    draggable="false"
    v-wave
  >
    <div
      class="flex items-center space-x-3"
      :class="{ 'p-2': type === 'tech', 'p-4': type !== 'tech' }"
    >
      <div
        v-if="type === 'tech'"
        class="p-1.5 rounded-lg"
        :class="{ 'animate-pulse': itemLoaded === false }"
        :style="{ background: color }"
      >
        <Skeleton
          :image-url="require(`~/assets/img/${title.toLowerCase()}.svg`)"
          type="tech"
        />
      </div>
      <Skeleton
        v-else
        :image-url="require(`~/assets/img/${title.split(' ')[0]}.png`)"
        class="rounded-xl"
        :style="{ backgroundColor: color ? color : '#111' }"
      />
      <div>
        <h2 class="line-clamp-1" v-html="title"></h2>
        <p v-if="role" v-html="role"></p>
      </div>
    </div>
    <div class="p-4 pt-0" v-if="description">
      <h2>Description</h2>
      <p class="mt-1" v-html="description"></p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["url", "title", "role", "description", "color", "type"],
};
</script>