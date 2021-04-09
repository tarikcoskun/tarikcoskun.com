<template>
  <div>
    <TopBar color="#4da7a6" />
    <section>
      <div class="flex w-full h-48 space-x-2">
        <img src="~/assets/icons/avatar.png" class="object-cover rounded-md" />
        <div class="w-full md:w-auto grid grid-rows-4 gap-1.5">
          <Account
            color="#7289da"
            icon="discord"
            url="https://discord.com/users/474537652943847444"
          />
          <Account
            color="#1da1f2"
            icon="twitter"
            url="https://twitter.com/itstarikcoskun"
          />
          <Account
            color="#374151"
            icon="github"
            url="https://github.com/tarikcoskun"
          />
          <Account
            color="#ef4444"
            icon="at"
            url="mailto:imtarikcoskun@gmail.com"
          />
        </div>
        <div class="flex-col justify-between hidden pl-4 -mt-1 md:flex">
          <div>
            <h1>About me</h1>
            <p class="text-justify md:line-clamp-4">
              I'm Tarık, a Front-End developer from Turkey. I started coding in
              2018, with Node.js. About a year later, I started learning web
              development stuff and since then, I'm learning more and more about
              it and creating websites using technologies below.
            </p>
          </div>
          <div class="pt-2">
            <div class="grid grid-cols-4 gap-1">
              <Technology color="#f4470b" title="HTML" icon="html" />
              <Technology color="#196eb3" title="CSS" icon="css" />
              <Technology color="#ec008c" title="JavaScript" icon="js" />
              <Technology color="#047857" title="Node.js" icon="nodejs" />
              <Technology color="#00c58e" title="Nuxt.js" icon="nuxtjs" />
              <Technology color="#44a8b3" title="Tailwind" icon="tailwind" />
              <Technology color="#bf4080" title="Sass" icon="sass" />
              <Technology color="#f44d27" title="Git" icon="git" />
            </div>
          </div>
        </div>
        <div class="hidden pl-4 -mt-1 lg:block">
          <h1>Positions</h1>
          <div>
            <Position
              color="#d6212a"
              url="https://floweystimemachine.github.io"
              title="Flowey's Time Machine"
              position="Designer"
              description="An editor tool for UNDERTALE that allows you to change everything in your save, made the re-design with Arda"
            />
            <hr />
            <Position
              color="#047857"
              url="http://zyapimstudios.com"
              title="Zyapim Studios"
              position="Web Developer"
              description="A development studio based in Turkey that creates games, custom projects etc."
            />
            <hr />
            <Position
              color="#7289da"
              url="https://premid.app"
              title="PreMiD"
              position="Translator"
              description="A utility that allows you to show what you're doing on the web in your Discord status"
            />
          </div>
        </div>
      </div>
    </section>
    <MobileStuff />
    <section class="grid gap-2 mt-4 md:grid-cols-2 projects-container">
      <Card
        :url="`/projects/${project.slug}`"
        :title="project.title"
        :description="project.description"
        v-for="project in projects"
        :key="project.id"
      />
    </section>
    <!-- <section class="mt-4 md:mt-8">
      <h1 class="text-center">Articles & Devlog</h1>
      <p class="mb-4 -mt-1 text-center">
        My articles and devlogs of the projects I'm working on
      </p>
      <div class="md:mx-24">
        <div class="grid gap-2 md:grid-cols-2">
          <Card
            :url="`/articles/${article.slug}`"
            :title="article.title"
            :description="article.description"
            v-for="article in articles"
            :key="article.id"
          />
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    return {
      articles: await $content("articles", params.slug).limit(2).fetch(),
      projects: await $content("projects", params.slug).limit(2).fetch(),
    };
  },
};
</script>