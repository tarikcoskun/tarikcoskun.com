<template>
  <section class="content-container">
    <header>
      <h2>Hello, it's</h2>
      <h1>Tarık Coşkun</h1>
    </header>
    <main>
      <h2>About me</h2>
      <p>
        I'm Tarık, a Front-end developer from Turkey. I started coding in 2018,
        with Node.js. About a year later, I started learning web development
        stuff and since then, I'm trying to learn more and more about it. Also
        translating stuff voluntarily which you can see most of them
        <a
          href="https://crowdin.com/profile/tarikcoskun"
          target="_blank"
          rel="noreferrer"
          class="border-b-2 hover:border-gray-400"
          >here</a
        >.
      </p>
      <h2>What I use...</h2>
      <div class="grid grid-cols-2 gap-1.5 tech-container md:grid-cols-3">
        <h3
          class="flex items-center px-3 py-1.5 text-xl rounded bg-[#ececec]"
          v-for="tech in tech"
          :key="tech"
          translate="no"
        >
          {{ tech }}
        </h3>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  layout: "home",
  data() {
    return {
      tech: [
        "HTML",
        "SCSS",
        "JavaScript",
        "Node.js",
        "Nuxt.js",
        "Vue.js",
        "Tailwind",
        "Git",
      ],
    };
  },
};
</script>