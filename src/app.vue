<template>
  <main>
    <header>
      <section>
        <h1>Tarık Coşkun</h1>
        <aside class="links">
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="mailto:tarikcskun@gmail.com"
            class="button"
            target="_blank"
            rel="noreferrer noopener">Contact</a>
        </aside>
      </section>
    </header>

    <figure class="wrapper wrapper-hero">
      <section id="hero" xyz="fade left-4 duration-8 stagger-1">
        <Animated><h1>Tarık Coşkun</h1></Animated>
        <Animated><h2>Full stack developer</h2></Animated>
        <Animated><p>I'm a full stack developer with over {{ new Date().getFullYear() - 2018 }} years of experience<br />More interested in front end</p></Animated>

        <aside class="accounts" xyz="fade down-2 ease-out-back duration-20 delay-8 stagger-1">
          <Animated><a href="mailto:tarikcskun@gmail.com"
            class="button"
            rel="noreferrer noopener"
            target="_blank">Contact</a></Animated>
          <Animated><a href="https://github.com/tarikcoskun"
            rel="noreferrer noopener"
            target="_blank"><GitHub /></a></Animated>
          <Animated><a href="https://twitter.com/tarikcskun"
            rel="noreferrer noopener"
            target="_blank"><Twitter /></a></Animated>
        </aside>
      </section>
    </figure>

    <figure class="wrapper wrapper-white">
      <section id="about">
        <aside class="about-me" xyz="fade left-4 duration-8 stagger-0.5">
          <Animated><h1>About Me <About /></h1></Animated>
          <Animated><p>
            I've been playing with web development since 2018. Over the years, I've been learning more and more technologies.
            <br /><br />
              I mainly use Node based technologies. On the right, you can see a couple of my favourite techhnologies, which are also the ones I use in most of my projects.
          </p></Animated>
        </aside>

        <aside class="fav-techs" xyz="fade down-4 duration-8 stagger-0.5">
          <Animated v-for="tech in techs">
            <figure
              class="tech">
              <component :is="tech.icon" :fill="tech.color" :style="`background: ${tech.color}40;`" />
              <h1 class="title">{{ tech.name }}</h1>
              <h2 class="date">Since 20{{ tech.date }}</h2>
            </figure>
          </Animated>
        </aside>
      </section>
    </figure>

    <figure class="wrapper wrapper-colored">
      <section id="works">
        <h1>Works <Works /></h1>
        <div xyz="fade down-4 duration-8 stagger-0.5">
          <Animated v-for="work in works">
            <a :href="`https://${work.link}`" target="_blank" rel="noreferrer noopener" class="work">
              <img :src="`/projects/${work.name.toLowerCase().replace('\'', '').replace(/\s/g, '-')}.png`" :alt="work.name" class="icon" />

              <aside>
                <h1 class="name">{{ work.name }}</h1>
                <h2 class="role">{{ work.role }}</h2>
                <p class="desc">{{ work.desc }}</p>
              </aside>
            </a>
          </Animated>
        </div>
      </section>
    </figure>

    <figure class="wrapper wrapper-accent">
      <section id="footer">
        <p>Coded & designed by <span>Tarık Coşkun</span></p>
        <p>The source code is available on
          <a href="https://github.com/tarikcoskun/tarikcoskun.github.io"
          rel="noreferrer noopener"
          target="_blank">GitHub</a>
        </p>
      </section>
    </figure>
  </main>
</template>

<script lang="ts" setup>
import type { Component } from "vue"
import Animated from "@/components/Animated.vue"

import Vue from "@/icons/vue.svg?component"
import Sass from "@/icons/sass.svg?component"
import React from "@/icons/react.svg?component"
import About from "@/icons/about.svg?component"
import Works from "@/icons/works.svg?component"
import GitHub from "@/icons/github.svg?component"
import Twitter from "@/icons/twitter.svg?component"
import Tailwind from "@/icons/tailwind.svg?component"

interface Tech {
  color: string;
  name:  string;
  date:  number;
  icon:  Component;
}

interface Work {
  link: string
  name: string
  role: string
  desc: string
}

const techs: Tech[] = [
  {
    color: "#42b983",
    name:  "Vue",
    icon:  Vue,
    date:  20
  },
  {
    color: "#5ed3f3",
    name:  "React",
    icon:  React,
    date:  21
  },
  {
    color: "#38bdf8",
    name:  "Tailwind",
    icon:  Tailwind,
    date:  20
  },
  {
    color: "#c96097",
    name:  "Sass",
    icon:  Sass,
    date:  19
  }
]

const works: Work[] = [
  {
    link: "discordtemplates.com",
    name: "Discord Templates",
    role: "Moderator",
    desc: "A template library that helps you create your own kingdom with a diverse range of templates"
  },
  {
    link: "premid.app",
    name: "PreMiD",
    role: "Translator",
    desc: "A utility that allows you to show what you're doing on the web in your Discord status"
  },
  {
    link: "unicorns.software",
    name: "Unicorn's Software",
    role: "Developer",
    desc: "An editor tool for Will You Snail that allows you to change your save content with ease"
  },
  {
    link: "crumblingstatue.github.io/FloweysTimeMachine",
    name: "Flowey's Time Machine",
    role: "Contributor",
    desc: "An editor tool for Undertale that allows you to change your save content with ease"
  },
  {
    link: "tarikcoskun.github.io/youtube-concept",
    name: "YouTube Concept",
    role: "Developer",
    desc: "A design concept that was made into a website, original design by Avdan"
  },
  {
    link: "store.steampowered.com/app/1115050",
    name: "Will You Snail",
    role: "Translator & Tester",
    desc: "A fast paced platformer where an evil AI tries to kill you by predicting your movement"
  }
]
</script>
