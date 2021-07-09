<template>
  <main>
    <div class="grid md:grid-cols-2">
      <Article
        v-for="post in posts"
        :key="post.id"
        :to="`/blog/${post.slug}`"
        :title="post.title"
        :date="post.date"
        :description="post.description"
      />
    </div>
  </main>
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