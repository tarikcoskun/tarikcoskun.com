<script setup lang="ts">
import GitHub from "./components/github.vue";
import Discord from "./components/discord.vue";
import Twitter from "./components/twitter.vue";
import At from "./components/at.vue";
import Work from "./components/work.vue";

import Vue from "./components/vuejs.vue";
import React from "./components/reactjs.vue";
import Tailwind from "./components/tailwind.vue";
import Sass from "./components/sass.vue";
</script>

<template>
  <header>
    <section
      class="relative flex items-center justify-center px-4  md:justify-between md:px-0"
    >
      <h1 class="hidden text-2xl font-semibold text-white md:block">
        Tarık Coşkun
      </h1>
      <div class="flex items-center gap-8 text-lg font-medium md:gap-8">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#contact" class="md:button">Contact</a>
      </div>
    </section>
  </header>

  <main>
    <div
      class="absolute hidden md:block gradient-thingy -z-10 -top-36 -right-64"
    ></div>
    <section class="pt-8 pb-16 md:py-24">
      <h1 class="text-5xl font-bold text-white">Tarık Coşkun</h1>
      <h1 class="my-2 text-2xl text-gray-400">Full-stack Developer</h1>
      <p class="mt-4 mb-8 text-xl">
        My name is Tarık and I'm a full-stack web developer from Turkey.
        <br />
        I like working on front-end side more
      </p>

      <div class="flex items-center gap-4">
        <a
          href="mailto:tarikcskun@gmail.com"
          target="_blank"
          class="text-xl font-medium button"
        >
          Contact
        </a>
        <a
          href="https://github.com/tarikcoskun"
          target="_blank"
          class="transition hover:text-white"
        >
          <GitHub />
        </a>
        <a
          href="https://twitter.com/tarikcskun"
          target="_blank"
          class="transition hover:text-white"
        >
          <Twitter />
        </a>
      </div>
    </section>

    <section class="grid items-center gap-8 md:grid-cols-2" id="about">
      <div class="flex flex-col gap-3">
        <h1 class="text-3xl font-semibold text-white">About Me</h1>
        <p class="text-xl text-justify">
          I've been in web development since 2018. Since then, I've been
          learning more and more technologies. I mainly use Node.js based
          technologies.
        </p>
        <p class="text-xl text-justify">
          Recently, I've been working with TypeScript, Vue, React, Svelte,
          Tailwind and more. On the right, you can see the technologies I mainly
          use.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="p-4 bg-white bg-opacity-5 rounded-xl">
          <Vue class="bg-[#41b88320] p-2 rounded-lg w-16 h-16" />
          <h1 class="mt-4 text-2xl font-semibold text-white">Vue</h1>
          <p class="mt-1 text-xl">Since 2021</p>
        </div>
        <div class="p-4 bg-white bg-opacity-5 rounded-xl">
          <React class="bg-[#50BBD720] p-2 rounded-lg w-16 h-16" />
          <h1 class="mt-4 text-2xl font-semibold text-white">React</h1>
          <p class="mt-1 text-xl">Since 2021</p>
        </div>
        <div class="p-4 bg-white bg-opacity-5 rounded-xl">
          <Tailwind class="bg-[#44a8b320] rounded-lg w-16 h-16" />
          <h1 class="mt-4 text-2xl font-semibold text-white">Tailwind</h1>
          <p class="mt-1 text-xl">Since 2020</p>
        </div>
        <div class="p-4 bg-white bg-opacity-5 rounded-xl">
          <Sass class="bg-[#cf649a20] rounded-lg w-16 h-16" />
          <h1 class="mt-4 text-2xl font-semibold text-white">Sass</h1>
          <p class="mt-1 text-xl">Since 2018</p>
        </div>
      </div>
    </section>

    <section class="py-20" id="works">
      <h1 class="text-3xl font-semibold text-center text-white">Works</h1>
      <div class="grid mt-8 md:px-8">
        <Work
          url="https://discords.com/templates"
          img="templates"
          title="Discord Templates"
          role="Moderator"
          description="A template library that lets you create your own kingdom with a diverse range of templates"
        />
        <Work
          url="https://premid.app"
          img="premid"
          title="PreMiD"
          role="Translator"
          description="A utility that allows you to show what you're doing on the web in your Discord status"
        />
        <Work
          url="https://crumblingstatue.github.io/FloweysTimeMachine"
          img="floweystimemachine"
          title="Flowey's Time Machine"
          role="Designer"
          description="An editor tool for Undertale that allows you to change your save content with a friendly UI"
        />
        <Work
          url="https://unicorns.software"
          img="unicornssoftware"
          title="Unicorn's Software"
          role="Lead Developer"
          description="An editor tool for Will You Snail? that allows you to change your save content with a friendly UI"
        />
        <Work
          url="https://crumblingstatue.github.io/FloweysTimeMachine"
          img="willyousnail"
          title="Will You Snail?"
          role="Translator & Tester"
          description="A fast paced platformer where an evil AI tries to kill you by predicting your movement"
        />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

body {
  @apply bg-gray-900 text-[#B2B7CC] overflow-x-hidden;
  font-family: "Inter", sans-serif;
}
header {
  @apply py-4 md:py-5 backdrop-filter backdrop-blur-lg sticky top-0 z-10;
}
main {
  @apply px-4 md:px-0;
}
section {
  @apply mx-auto max-w-[52rem];
}
</style>