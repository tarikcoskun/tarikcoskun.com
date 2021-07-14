<template>
  <div>
    <section id="home" v-scroll-reveal>
      <div class="container">
        <h1 class="mb-0 anime-text anime">Hello,</h1>
        <h1 class="anime-text anime">
          it's <span class="font-title">Tarık C.</span>
        </h1>
        <p class="mt-4 text-2xl anime-text anime">
          Front-end developer with over 3 years of experience.
        </p>
        <div class="flex items-center gap-3 -ml-0.5 my-4">
          <Account
            v-for="(account, index) in accounts"
            :key="index"
            :url="account.url"
            :icon="account.icon"
            class="m-0 anime-account anime"
          />
        </div>
        <NuxtLink class="w-32 py-2 button anime-account anime" to="#contact"
          >Contact</NuxtLink
        >
      </div>
    </section>
    <section id="about">
      <div>
        <h1 v-scroll-reveal>About Me</h1>
        <p v-scroll-reveal>
          Hello there, my name is Tarık. I'm a student from Turkey who loves
          making websites for fun.
        </p>
        <p v-scroll-reveal>
          I first started coding in 2018, with Node.js. About a year later, I
          started learning web development stuff and I'm learning more and more
          about it.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-2 md:gap-4">
        <MainTech
          v-for="(tech, index) in tech"
          :key="index"
          :bg="tech.bg"
          :title="tech.title"
          :since="tech.since"
          v-scroll-reveal
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
          class="w-52 py-2.5 mx-auto button"
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
          url: "https://discord.com/users/474537652943847444",
          icon: "discord",
        },
        {
          url: "https://twitter.com/itstarikcoskun",
          icon: "twitter",
        },
        {
          url: "https://github.com/tarikcoskun",
          icon: "github",
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
    };
  },
};
</script>