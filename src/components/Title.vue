<template>
  <XyzTransition :appear-visible="{ threshold: 0.5 }">
    <h1 xyz="fade down duration-8 delay-3" v-html="title"></h1>
  </XyzTransition>
</template>

<script>
export default {
  props: ["title"],
};
</script>