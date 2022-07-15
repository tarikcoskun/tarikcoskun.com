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
  color: string
  name: string
  date: number
  icon: Component
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
    name: "Vue",
    icon: Vue,
    date: 20
  },
  {
    color: "#5ed3f3",
    name: "React",
    icon: React,
    date: 21
  },
  {
    color: "#38bdf8",
    name: "Tailwind",
    icon: Tailwind,
    date: 20
  },
  {
    color: "#c96097",
    name: "Sass",
    icon: Sass,
    date: 19
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
    link: "tarikcoskun.github.io/youtube-concept",
    name: "YouTube Concept",
    role: "Developer",
    desc: "A YouTube design concept that fits well with other Google applications"
  },
  {
    link: "crumblingstatue.github.io/FloweysTimeMachine",
    name: "Flowey's Time Machine",
    role: "Contributor",
    desc: "An editor tool for Undertale that allows you to change your save content with ease"
  },
  {
    link: "store.steampowered.com/app/1115050",
    name: "Will You Snail",
    role: "Translator & Tester",
    desc: "A fast paced platformer where an evil AI tries to kill you by predicting your movement"
  },
  {
    link: "unicorns.software",
    name: "Unicorn's Software",
    role: "Developer",
    desc: "(Discontinued) An editor tool for Will You Snail that allows you to change your save content with ease"
  }
]
</script>

<template>
  <main>
    <header>
      <section>
        <h1>Tarık Coşkun</h1>
        <aside class="links">
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a
            href="mailto:me@tarikcoskun.xyz"
            class="button"
            target="_blank"
            rel="noreferrer noopener"
            >Contact</a
          >
        </aside>
      </section>
    </header>

    <figure class="wrapper wrapper-hero">
      <section id="hero" xyz="fade left-4 duration-8 stagger-1">
        <Animated><h1>Tarık Coşkun</h1></Animated>
        <Animated><h2>Full stack developer</h2></Animated>
        <Animated
          ><p>
            I'm a full stack developer with over
            {{ new Date().getFullYear() - 2018 }} years of experience<br />More
            interested in front end
          </p></Animated
        >

        <aside
          class="accounts"
          xyz="fade down-2 ease-out-back duration-20 delay-8 stagger-1">
          <Animated
            ><a
              href="mailto:me@tarikcoskun.xyz"
              class="button"
              rel="noreferrer noopener"
              target="_blank"
              >Contact</a
            ></Animated
          >
          <Animated
            ><a
              href="https://github.com/tarikcoskun"
              rel="noreferrer noopener"
              target="_blank"
              ><GitHub /></a
          ></Animated>
          <Animated
            ><a
              href="https://twitter.com/tarikcskun"
              rel="noreferrer noopener"
              target="_blank"
              ><Twitter /></a
          ></Animated>
        </aside>
      </section>
    </figure>

    <figure class="wrapper wrapper-bg">
      <section id="about">
        <aside class="about" xyz="fade left-4 duration-8 stagger-0.5">
          <Animated
            ><h1>About Me <About /></h1
          ></Animated>
          <Animated
            ><p>
              I've been playing with web development since 2018. Over the years,
              I've been learning more and more technologies.
              <br /><br />
              I mainly use Node based technologies. On the right, you can see a
              couple of my favourite techhnologies, which are also the ones I
              use in most of my projects.
            </p></Animated
          >
        </aside>

        <aside class="techs" xyz="fade down-4 duration-8 stagger-0.5">
          <Animated v-for="tech in techs">
            <figure class="tech">
              <component
                :is="tech.icon"
                :fill="tech.color"
                :style="`background: ${tech.color}40;`" />
              <h1 class="title">{{ tech.name }}</h1>
              <h2 class="date">Since 20{{ tech.date }}</h2>
            </figure>
          </Animated>
        </aside>
      </section>
    </figure>

    <figure class="wrapper wrapper-accent">
      <section id="works">
        <h1>Works <Works /></h1>
        <div xyz="fade down-4 duration-8 stagger-0.5">
          <Animated v-for="work in works">
            <a
              :href="`https://${work.link}`"
              target="_blank"
              rel="noreferrer noopener"
              class="work">
              <img
                :src="`/projects/${work.name
                  .toLowerCase()
                  .replace('\'', '')
                  .replace(/\s/g, '-')}.png`"
                :alt="work.name"
                class="icon"
                width="192"
                height="192" />

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

    <figure class="wrapper wrapper-bg">
      <section id="footer">
        <p>Coded & designed by <span>Tarık Coşkun</span></p>
        <p>
          The source code is available on
          <a
            href="https://github.com/tarikcoskun/website"
            rel="noreferrer noopener"
            target="_blank"
            >GitHub</a
          >
        </p>
      </section>
    </figure>
  </main>
</template>

<style lang="scss">
@import "@/styles/mixins.scss";

header {
  z-index: 10;
  padding: 16px 0;
  max-height: 72px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  @include mobile {
    padding: 16px;
  }

  section {
    @include flex(center, space-between);

    h1 {
      color: var(--title-solid);
      font-size: 24px;
      font-weight: 600;
    }
    aside.links {
      @include flex(center, $gap: 24px);

      a {
        cursor: pointer;
        transition-duration: 0.15s;
        font-size: 18px;
        font-weight: 500;
        transition-property: opacity, color;

        &.button {
          @include mobile {
            display: none;
          }
        }
      }
    }
  }
}

figure.wrapper {
  &.wrapper-hero {
    background: linear-gradient(var(--bg), var(--accent));
  }
  &.wrapper-accent {
    background: var(--accent);
  }
  &.wrapper-bg {
    background: var(--about-bg);
  }
  @include mobile {
    padding: 0 16px;
  }
}

section {
  &#hero {
    padding: 96px 0;
    @include mobile {
      padding: 72px 0 96px 0;
    }

    p {
      margin: 18px 0;
    }
    h1 {
      font-size: 48px;
      font-weight: 700;
    }
    h2 {
      color: var(--title-profession);
      font-size: 24px;
      font-weight: 600;
    }

    aside.accounts {
      padding-top: 12px;
      @include flex(center, $gap: 12px);

      a {
        transition: 0.15s opacity;
        &:hover {
          opacity: 0.75 !important;
        }
      }
    }
  }

  &#about {
    padding: 72px 0;
    @include grid(2, 32px, center, 1);
    @include mobile {
      padding: 64px 0;
    }

    aside {
      &.about {
        h1 {
          font-size: 30px;
          font-weight: 600;
          @include flex(center, $gap: 12px);
        }

        p {
          margin-top: 16px;
          @include pc {
            text-align: justify;
          }
        }
      }

      &.techs {
        @include grid(2, 16px);

        figure.tech {
          padding: 16px;
          border-radius: 12px;
          background: var(--tech-bg);

          svg {
            path {
              fill: inherit;
            }
            border-radius: 8px;
            width: 56px;
            height: 56px;
            padding: 8px;
          }

          h1.title {
            margin: 16px 0 4px 0;
            font-size: 24px;
            font-weight: 600;
          }
        }
      }
    }
  }

  &#works {
    padding: 72px 0;
    @include mobile {
      padding: 64px 0;
    }

    h1 {
      font-size: 30px;
      font-weight: 600;
    }

    > h1 {
      @include flex(center, center, $gap: 12px);
    }
    > div {
      display: grid;
      margin-top: 32px;
      @include mobile {
        margin-top: 16px;
        gap: 12px;
      }

      a.work {
        padding: 20px;
        cursor: pointer;
        border-radius: 8px;
        transition: background 0.25s;
        @include flex(center, $gap: 16px 20px);
        @include mobile {
          align-items: unset;
          flex-direction: column;
        }

        &:hover {
          background: var(--tech-bg);
        }

        img.icon {
          object-fit: cover;
          border-radius: 6px;
          background: #111113;
          @include pc {
            width: 192px;
            height: 128px;
          }
          @include mobile {
            width: 100%;
            height: 192px;
          }
        }

        aside {
          h1.name {
            font-size: 24px;
          }

          p {
            &.desc {
              margin-top: 8px;
            }
            &.role {
              font-size: 18px;
              margin-top: 2px;
            }
          }
        }
      }
    }
  }

  &#footer {
    padding: 16px 0;
    @include flex(unset, space-between);
    @include mobile {
      @include flex(center, unset, $dir: column);
    }

    span {
      color: var(--title-solid);
      font-size: 16px;
    }
    p {
      font-size: 16px;
    }
    a {
      border-bottom: 1px dashed transparent;
      color: var(--title-solid);
      font-size: 16px;
      &:hover {
        border-color: var(--title-solid);
      }
    }
  }
}

@supports not (backdrop-filter: blur(16px)) {
  header {
    background: var(--bg);
  }
}
</style>
