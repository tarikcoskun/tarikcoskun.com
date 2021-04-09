<template>
  <section>
    <TopBar color="#3b82f6" />
    <div class="grid gap-8 md:grid-cols-2">
      <div>
        <h1>{{ project.title }}</h1>
        <p v-html="project.description"></p>
        <div class="flex mt-2 space-x-2">
          <Button title="Source Code" icon="github" :url="project.source" />
          <Button title="Visit Project" icon="link" :url="project.visit" />
        </div>
      </div>
      <div>
        <h1>Related Articles</h1>
        <div class="grid gap-2">
          <Card
            :url="`/articles/${article.slug}`"
            :title="article.title"
            :description="article.description"
            v-for="article in related"
            :key="article.id"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "project",
  async asyncData({ $content, params }) {
    return {
      project: await $content("projects", params.slug).fetch(),
      related: await $content("articles")
        .where({ related: params.slug })
        .fetch(),
    };
  },
};
</script>