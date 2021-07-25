<template>
  <div>
    <section class="anime" id="home">
      <div class="container">
        <h1 class="mb-0 anime-text anime font-base">Hello,</h1>
        <h1 class="anime-text anime font-base">
          it's <span class="font-title">Tarık C.</span>
        </h1>
        <p class="mt-4 text-2xl anime-text anime">
          Full-stack developer with over 3 years of experience.
        </p>
        <div class="flex gap-3 my-4">
          <Account
            v-for="(account, index) in accounts"
            :key="index"
            :url="account.url"
            :icon="account.icon"
            class="m-0 anime-account anime"
          />
        </div>
        <NuxtLink
          class="w-32 py-2 mt-2 button anime-account anime"
          to="#contact"
          >Contact</NuxtLink
        >
      </div>
    </section>
    <section id="about">
      <div>
        <h1 v-scroll-reveal>About Me</h1>
        <p class="text-justify" v-scroll-reveal>
          Hello there, my name is Tarık. I'm a full-stack developer from Turkey,
          but I mostly focus on front-end stuff
        </p>
        <p class="text-justify" v-scroll-reveal>
          I first started coding in 2018, with Node.js. About a year later, I
          started learning web development stuff and currently I'm trying to
          learn new languages and stuff related to game development.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-3 md:gap-4">
        <Tech
          v-for="(tech, index) in tech"
          :key="index"
          :bg="tech.bg"
          :title="tech.title"
          :since="tech.since"
          v-scroll-reveal="{ delay: index * 50 }"
        />
      </div>
    </section>
    <section id="work">
      <h1 class="text-center" v-scroll-reveal>Work</h1>
      <div class="grid gap-6 mt-8 md:grid-cols-2">
        <Work
          v-for="(work, index) in work"
          :key="index"
          :url="work.url"
          :img="work.img"
          :role="work.role"
          :title="work.title"
          :description="work.description"
          v-scroll-reveal="{ delay: index * 50 }"
        />
      </div>
    </section>
    <section id="contact">
      <h1 class="text-center" v-scroll-reveal>Contact</h1>
      <p class="text-center" v-scroll-reveal>
        You can send me a message directly from here and I'll get back to you as
        soon as possible.
      </p>
      <form
        name="Contact"
        method="POST"
        action="/thanks"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Contact" />
        <input
          type="email"
          name="email"
          placeholder="your@mail.com"
          required
          v-scroll-reveal
        />
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          v-scroll-reveal
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your message..."
          required
          v-scroll-reveal
        ></textarea>
        <button
          type="submit"
          class="py-2.5 mx-auto mb-4 w-52 button"
          v-scroll-reveal
        >
          Send Message
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          url: "https://github.com/tarikcoskun",
          icon: "github",
        },
        {
          url: "https://twitter.com/itstarikcoskun",
          icon: "twitter",
        },
      ],
      tech: [
        {
          title: "Nuxt.js",
          since: "2021",
          bg: "#0a432b",
        },
        {
          title: "Tailwind",
          since: "2020",
          bg: "#0a3a43",
        },
        {
          title: "Node.js",
          since: "2018",
          bg: "#27430a",
        },
        {
          title: "Sass",
          since: "2019",
          bg: "#590d33",
        },
      ],
      work: [
        /*{
          title: "Squid's Brain — Developer",
          description:
            "An editor tool for Will You Snail? that allows you to change your save content with a friendly UI",
        },*/
        {
          url: "https://discords.com/templates",
          img: "templates",
          title: "Discord Templates — Moderator",
          description:
            "A template library that lets you create your own kingdom with a diverse range of templates",
        },
        {
          url: "https://premid.app",
          img: "premid",
          title: "PreMiD — Translator",
          description:
            "A utility that allows you to show what you're doing on the web in your Discord status",
        },
        {
          url: "https://crumblingstatue.github.io/FloweysTimeMachine",
          img: "floweystimemachine",
          title: "Flowey's Time Machine — Designer",
          description:
            "An editor tool for Undertale that allows you to change your save content with a friendly UI",
        },
        {
          url: "https://store.steampowered.com/app/1115050/Will_You_Snail",
          img: "willyousnail",
          title: "Will You Snail? — Translator & Tester",
          description:
            "A fast pace platformer where an evil AI tries to kill you by predicting your movement",
        },
      ],
    };
  },
};
</script>