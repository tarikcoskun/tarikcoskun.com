<template>
  <section
    class="mt-6 border-l md:mt-0 md:h-[calc(100vh-4rem)] content-container"
  >
    <header>
      <h2>Latest</h2>
      <h1>Articles</h1>
    </header>
    <main class="-mt-2.5">
      <Article
        v-for="post in posts"
        :key="post.id"
        :to="`/blog/${post.slug}`"
        :title="post.title"
        :date="post.date"
        :description="post.description"
      />
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this.$content().limit(3).fetch();
  },
};
</script>