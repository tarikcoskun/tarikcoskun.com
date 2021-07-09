<template>
  <main>
    <nuxt-content :document="post" class="mt-2 prose-lg prose-blue" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    return {
      post: await $content(params.slug).fetch(),
    };
  },
  mounted() {
    this.$nuxt.$emit("post", this.post);
  },
  beforeDestroy() {
    this.$nuxt.$off("post");
  },
};
</script>