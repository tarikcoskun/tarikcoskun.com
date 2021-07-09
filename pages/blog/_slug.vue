<template>
  <main>
    <nuxt-content :document="post" class="mt-4" />
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
    this.$nuxt.$emit("header", {
      title: this.post.title,
      upper: this.getDate(this.post.date),
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("header");
  },
};
</script>