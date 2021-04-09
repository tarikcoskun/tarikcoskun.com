<template>
  <section>
    <div
      class="absolute top-0 left-0 w-full h-2"
      style="background: #3b82f6"
    ></div>
    <div class="grid grid-cols-2 gap-12">
      <div>
        <h1>{{ project.title }}</h1>
        <p v-html="project.description"></p>
        <div class="flex mt-2 space-x-2">
          <a
            class="hover:no-underline flex gap-1.5 items-center justify-center px-2 py-1 text-lg bg-gray-100 rounded-md"
            style="background: #ededed"
            :href="project.source"
            target="_blank"
            v-wave
            ><unicon name="github" /> Source Code</a
          >
          <a
            class="hover:no-underline flex gap-1.5 items-center justify-center px-2 py-1 text-lg rounded-md"
            :href="project.visit"
            style="background: #ededed"
            target="_blank"
            v-wave
            ><unicon name="link" /> Visit Project</a
          >
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