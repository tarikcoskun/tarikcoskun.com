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
        <XyzTransition appear-visible><h1>Tarık Coşkun</h1></XyzTransition>
        <XyzTransition appear-visible><h2>Full stack developer</h2></XyzTransition>
        <XyzTransition appear-visible><p>I'm a full stack developer with over {{ new Date().getFullYear() - 2018 }} years of experience
        <br />More interested in front end</p></XyzTransition>

        <aside xyz="fade down-2 ease-out-back duration-20 delay-8 stagger-1" class="accounts"><XyzTransition appear-visible>
          <a
            href="mailto:tarikcskun@gmail.com"
            class="button"
            rel="noreferrer noopener"
            target="_blank">Contact</a></XyzTransition><XyzTransition appear-visible>
          <a
            href="https://github.com/tarikcoskun"
            rel="noreferrer noopener"
            target="_blank"><GitHub /></a></XyzTransition><XyzTransition appear-visible>
          <a
            href="https://twitter.com/tarikcskun"
            rel="noreferrer noopener"
            target="_blank"><Twitter /></a></XyzTransition>
        </aside>
      </section>
    </figure>

    <figure class="wrapper wrapper-white">
      <section id="about">
        <aside class="about-me" xyz="fade left-4 duration-8 stagger-0.5">
          <XyzTransition appear-visible><h1>About Me <About /></h1></XyzTransition><XyzTransition appear-visible>
          <p>
            I've been playing with web development since 2018. Over the years, I've been learning more and more technologies.
          </p></XyzTransition><XyzTransition appear-visible><p class="techs">
            I mainly use Node based technologies. On the right, you can see a couple of my favourite techhnologies, which are also the ones I use in most of my projects.
          </p></XyzTransition>
        </aside>

        <aside class="fav-techs" xyz="fade down-4 duration-8 stagger-0.5">
          <XyzTransition v-for="tech in techs" appear-visible>
            <figure
              class="tech">
              <component :is="tech.icon" :fill="tech.color" :style="`background: ${tech.color}40;`" />
              <h1 class="title">{{ tech.name }}</h1>
              <h2 class="date">Since 20{{ tech.date }}</h2>
            </figure>
          </XyzTransition>
        </aside>
      </section>
    </figure>

    <figure class="wrapper wrapper-colored">
      <section id="works">
        <h1>Works <Works /></h1>
        <div xyz="fade down-4 duration-8 stagger-0.5">
          <XyzTransition v-for="work in works" appear-visible>
            <a
            :href="`https://${work.link}`"
              rel="noreferrer noopener"
              target="_blank"
              class="work">
                <img
                  :src="`/projects/${work.name.toLowerCase().replace('\'', '').replace(/\s/g, '-')}.png`"
                  :alt="work.name"
                  class="icon" />
                <aside>
                  <h1 class="name">{{ work.name }}</h1>
                  <h2 class="role">{{ work.role }}</h2>
                  <p class="desc">{{ work.desc }}</p>
                </aside>
            </a>
          </XyzTransition>
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

import About from "@/icons/about.svg?component"
import Works from "@/icons/works.svg?component"
import GitHub from "@/icons/github.svg?component"
import Twitter from "@/icons/twitter.svg?component"

import Vue from "@/icons/tech/vue.svg?component"
import Sass from "@/icons/tech/sass.svg?component"
import Vite from "@/icons/tech/vite.svg?component"
import React from "@/icons/tech/react.svg?component"

interface ITech {
  color: string;
  name:  string;
  date:  number;
  icon:  Component;
}

interface IWork {
  link: string
  name: string
  role: string
  desc: string
}

const techs: ITech[] = [
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
    icon:  Vite,
    date:  20
  },
  {
    color: "#c96097",
    name:  "Sass",
    icon:  Sass,
    date:  19
  }
]

const works: IWork[] = [
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
    role: "Translator",
    desc: "An editor tool for Will You Snail that allows you to change your save content with ease"
  },
  {
    link: "crumblingstatue.github.io/FloweysTimeMachine",
    name: "Flowey's Time Machine",
    role: "Designer",
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
