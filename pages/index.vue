<template>
  <div>
    <section id="home">
      <div class="container">
        <h1 class="mb-2 anime-text anime font-base">
          Hello<span class="text-[2.75rem] font-title">,</span>
          <span class="text-gray-700">it's</span>
        </h1>
        <h1 class="anime-text anime font-title">Tarık Coşkun</h1>
        <p class="mt-4 text-[1.325rem] leading-7 anime-text anime">
          I'm a student from Turkey who likes programming and translating
          projects into Turkish. Recently started learning game development.
        </p>
        <div class="flex items-center gap-3 my-4">
          <NuxtLink
            class="w-32 py-2 mt-2 mr-1 button anime-account anime"
            to="#contact"
            >Contact</NuxtLink
          >
          <Account
            v-for="(account, index) in accounts"
            :key="index"
            :url="account.url"
            :icon="account.icon"
            class="m-0 anime-account anime"
          />
        </div>
      </div>
    </section>
    <section id="about">
      <div>
        <h1 v-scroll-reveal>About Me</h1>
        <p class="mt-2 md:text-justify" v-scroll-reveal>
          I've been in web development since 2018. Since then, I've learned and
          keep learning more and more technologies. Lately started learning game
          development.
        </p>
        <p class="mt-4 md:text-justify" v-scroll-reveal>
          Here are some of the technologies I've been working with lately...
        </p>
        <div class="grid grid-cols-2 gap-2 mt-6">
          <li v-scroll-reveal><TypeScript /> TypeScript</li>
          <li v-scroll-reveal><React /> React</li>
          <li v-scroll-reveal><Svelte /> Svelte</li>
          <li v-scroll-reveal title="GameMaker Language"><GML /> GML</li>
        </div>
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
    <section id="works">
      <h1 class="text-center" v-scroll-reveal>Works</h1>
      <div class="grid mt-8">
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
import TypeScript from "~/static/img/typescript.svg?inline";
import React from "~/static/img/react.js.svg?inline";
import Svelte from "~/static/img/svelte.svg?inline";
import GML from "~/static/img/gml.svg?inline";

export default {
  components: { TypeScript, React, Svelte, GML },
  data() {
    return {
      accounts: [
        {
          url: "https://github.com/tarikcoskun",
          icon: "github",
        },
        {
          url: "https://twitter.com/tarikcoskn",
          icon: "twitter",
        },
      ],
      tech: [
        {
          title: "Nuxt",
          since: "2021",
          bg: "#9eeccb",
        },
        {
          title: "Tailwind",
          since: "2020",
          bg: "#9edfec",
        },
        {
          title: "Node",
          since: "2018",
          bg: "#9eecb3",
        },
        {
          title: "Sass",
          since: "2019",
          bg: "#ebaecd",
        },
      ],
      work: [
        {
          url: "https://discords.com/templates",
          img: "templates",
          title: "Discord Templates",
          role: "Moderator",
          description:
            "A template library that lets you create your own kingdom with a diverse range of templates",
        },
        {
          url: "https://premid.app",
          img: "premid",
          title: "PreMiD",
          role: "Translator",
          description:
            "A utility that allows you to show what you're doing on the web in your Discord status",
        },
        {
          url: "https://crumblingstatue.github.io/FloweysTimeMachine",
          img: "floweystimemachine",
          title: "Flowey's Time Machine",
          role: "Designer",
          description:
            "An editor tool for Undertale that allows you to change your save content with a friendly UI",
        },
        {
          url: "https://unicorns.software",
          img: "unicornssoftware",
          title: "Unicorn's Software",
          role: "Developer",
          description:
            "An editor tool for Will You Snail? that allows you to change your save content with a friendly UI",
        },
        {
          url: "https://store.steampowered.com/app/1115050/Will_You_Snail",
          img: "willyousnail",
          title: "Will You Snail?",
          role: "Translator & Tester",
          description:
            "A fast pace platformer where an evil AI tries to kill you by predicting your movement",
        },
      ],
    };
  },
};
</script>