<template>
  <article>
    <NuxtLink to="/blog/post" v-html="title"></NuxtLink>
    <br />
    <span v-html="date"></span>
    <p v-html="description"></p>
  </article>
</template>

<script>
export default {
  props: ["title", "description", "date"],
};
</script>