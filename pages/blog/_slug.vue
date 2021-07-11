<template>
  <section class="content-container">
    <header>
      <h2>{{ getDate(post.date) }}</h2>
      <h1>{{ post.title }}</h1>
    </header>
    <main>
      <nuxt-content :document="post" class="mt-2 prose-lg prose-lightBlue" />
    </main>
  </section>
</template>

<script>
export default {
  layout: "post",
  async asyncData({ $content, params }) {
    return {
      post: await $content(params.slug).fetch(),
    };
  },
  mounted() {
    this.$nextTick(() => this.$nuxt.$emit("toc", this.post.toc));
  },
  beforeDestroy() {
    this.$nuxt.$off("toc");
  },
};
</script>