<template>
  <div>
    <section id="home">
      <div class="container">
        <h1 class="mb-0">Hello,</h1>
        <h1>it's <span class="font-title">Tarık C.</span></h1>
        <p class="mt-4 text-2xl">
          Front-end developer with over 3 years of experience.
        </p>
        <div class="flex items-center gap-3 -ml-0.5 my-4">
          <Account
            v-for="(account, index) in accounts"
            :key="index"
            :url="account.url"
            :icon="account.icon"
            class="m-0"
          />
        </div>
        <NuxtLink class="w-32 py-2 button" to="#contact">Contact</NuxtLink>
      </div>
    </section>
    <section id="about">
      <div>
        <h1>About Me</h1>
        <p>
          Hello there, my name is Tarık. I'm a student from Turkey who loves
          making websites for fun.
        </p>
        <p>
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
        />
      </div>
    </section>
    <section id="contact">
      <h1 class="text-center">Contact</h1>
      <form name="Contact" method="POST" @submit.prevent="handleSubmit" netlify>
        <input type="hidden" name="form-name" value="Contact" />
        <input type="text" name="mail" placeholder="your@mail.com" required />
        <input type="text" name="name" placeholder="Your name" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your message..."
          required
        ></textarea>
        <button class="w-52 py-2.5 mx-auto button" id="button" type="submit">
          Send Message
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";

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
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios
        .post(
          "/",
          this.encode({
            "form-name": "Contact",
            ...this.form,
          }),
          axiosConfig
        )
        .then(
          () => (this.$el.querySelector("#button").innerHTML = "Message Sent!")
        )
        .catch(
          () =>
            (this.$el.querySelector("#button").innerHTML = "Submission Failed")
        );
    },
  },
};
</script>