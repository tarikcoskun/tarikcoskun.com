<template>
  <div>
    <section
      class="flex items-center justify-center md:h-screen md:mt-[-4.5rem]"
      id="home"
    >
      <div
        class="flex flex-col w-full py-16 bg-gray-100  rounded-3xl dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-60"
      >
        <div class="flex gap-3">
          <AnimatedText
            text="Hello,"
            class="text-5xl text-gray-700 font-base dark:text-gray-300"
          />
          <AnimatedText
            text="it's"
            class="text-5xl text-gray-700 font-base dark:text-gray-300"
          />
        </div>
        <div class="flex gap-3 mt-3">
          <AnimatedText text="Tarık" class="text-5xl font-title" />
          <AnimatedText text="Coşkun" class="text-5xl font-title" />
        </div>
        <p class="my-5 opacity-0 md:w-2/3 anime-text">
          I'm a Full-stack web developer for over 3 years, from Turkey. I use
          TypeScript, Node, Vue and React
        </p>
        <div class="flex items-center gap-3">
          <a
            class="w-32 mt-2 mr-1 opacity-0 button anime-account"
            href="mailto:tarikcskun@gmail.com"
            >Contact</a
          >
          <Account
            v-for="(account, index) in accounts"
            :key="index"
            :url="account.url"
            :icon="account.icon"
            class="opacity-0 anime-account"
          />
        </div>
      </div>
    </section>

    <section
      class="grid items-center w-full gap-8 pt-20 -mt-20 md:grid-cols-2"
      id="about"
    >
      <div>
        <h1>About Me</h1>
        <p class="mt-2 md:text-justify">
          I've been in web development since 2018. Since then, I've been
          learning more and more technologies. On the right, you can see the
          ones I mainly use.
        </p>
        <p class="mt-4 md:text-justify">
          Here are some of the technologies I've been working with recently
        </p>
        <div class="grid grid-cols-2 gap-2 mt-6">
          <li><TypeScript /> TypeScript</li>
          <li><React /> React</li>
          <li><Svelte /> Svelte</li>
          <li title="GameMaker Language"><GML /> GML</li>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 md:gap-4">
        <Tech
          v-for="(tech, index) in tech"
          :key="index"
          :bg="tech.bg"
          :link="tech.link"
          :title="tech.title"
          :since="tech.since"
          :darkBg="tech.darkBg"
          :darkColor="tech.darkColor"
          :lightBg="tech.lightBg"
          :lightColor="tech.lightColor"
        />
      </div>
    </section>

    <section class="py-20" id="works">
      <h1 class="text-center">Works</h1>
      <div class="grid mt-8 md:mx-12">
        <Work
          v-for="(work, index) in work"
          :key="index"
          :url="work.url"
          :img="work.img"
          :role="work.role"
          :title="work.title"
          :description="work.description"
        />
      </div>
    </section>
  </div>
</template>

<script>
import TypeScript from "~/static/img/typescript.svg?inline";
import React from "~/static/img/react.svg?inline";
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
          url: "https://twitter.com/tarikcskun",
          icon: "twitter",
        },
      ],
      tech: [
        {
          link: "nuxtjs.org",
          title: "Nuxt",
          since: "2021",
          darkBg: "#0a432b",
          darkColor: "#00dc82",
          lightBg: "#9eeccb",
          lightColor: "#009a5b",
        },
        {
          link: "tailwindcss.com",
          title: "Tailwind",
          since: "2020",
          darkBg: "#0a3a43",
          darkColor: "#06b6d4",
          lightBg: "#9edfec",
          lightColor: "#0497b0",
        },
        {
          link: "nodejs.org",
          title: "Node",
          since: "2018",
          darkBg: "#0a4311",
          darkColor: "#4bc864",
          lightBg: "#9eecb3",
          lightColor: "#028700",
        },
        {
          link: "sass-lang.com",
          title: "Sass",
          since: "2019",
          darkBg: "#590d33",
          darkColor: "#cf649a",
          lightBg: "#ebaecd",
          lightColor: "#ad266a",
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
            "A fast paced platformer where an evil AI tries to kill you by predicting your movement",
        },
      ],
    };
  },
};
</script>
