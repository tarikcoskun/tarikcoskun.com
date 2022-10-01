<script lang="ts" setup>
import { useRoute } from "vue-router"
import type { Video } from "~/types/Video"

const route = useRoute()

const video = await fetch(
  `https://spotify2youtube.tarikcoskun.workers.dev/${route.params.track}`
)

const data: Promise<Video> = video.json()
const id = (await data).items[0].id.videoId
location.href = `https://music.youtube.com/watch?v=${id}`
</script>

<template>
  <h1>im a ghost</h1>
</template>

<style>
h1 {
  display: none;
}
</style>
