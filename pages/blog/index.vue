<template>
  <section class="content-container">
    <header>
      <h2>Blog</h2>
      <h1>Tarık Coşkun</h1>
    </header>
    <main>
      <div class="grid md:grid-cols-2">
        <Article
          v-for="(post, index) in posts"
          :key="index"
          :date="post.date"
          :title="post.title"
          :to="`/blog/${post.slug}`"
          :description="post.description"
          :class="[
            index % 2 == 1 ? 'pr-0 md:pl-4' : 'md:border-r pl-0 md:pr-4',
          ]"
        />
      </div>
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
    this.posts = await this.$content().fetch();
  },
};
</script>