<template>
  <section>
    <h1 class="mb-4 text-center">My Journey</h1>
    <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="flex cursor-default md:contents"
        :class="{ 'flex-row-reverse': index % 2 === 0 }"
      >
        <div
          v-if="index % 2 !== 0"
          class="relative col-start-5 col-end-6 mr-7 md:mx-auto"
        >
          <div class="flex items-center justify-center w-6 h-full">
            <div
              class="w-1 h-full"
              :class="{
                'rounded-t-full bg-gradient-to-b': index === 0,
                'rounded-b-full bg-gradient-to-t': index === events.length - 1,
                'from-[#0c0d0f] via-[#191b1f] to-[#191b1f]':
                  index === 0 || index === events.length - 1,
                'bg-[#191b1f] ': index !== 0 || index !== events.length - 1,
              }"
            ></div>
          </div>
          <div
            class="
              absolute
              w-6
              h-6
              -mt-3
              bg-[#8b7af4]
              border-4 border-[#0c0d0f]
              rounded-full
              top-1/2
            "
          ></div>
        </div>
        <div
          class="
            relative
            p-3
            my-6
            transition-transform
            transform
            bg-[#ffffff15]
            blur
            rounded-lg
            opacity-0
            anime-journey
          "
          :class="
            index % 2 === 0
              ? 'col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'
              : 'col-start-6 col-end-10 mr-auto'
          "
        >
          <h2 v-html="event.title"></h2>
          <p v-if="event.details" v-html="event.details"></p>
          <span
            class="
              absolute
              text-gray-500
              top-[-1.6rem]
              left-0
              whitespace-nowrap
              dark:text-gray-400
            "
            v-html="event.date"
          ></span>
        </div>
        <div
          v-if="index % 2 === 0"
          class="relative col-start-5 col-end-6 mr-7 md:mx-auto"
        >
          <div class="flex items-center justify-center w-6 h-full">
            <div
              class="w-1 h-full bg-[#191b1f]"
              :class="{
                'rounded-t-full bg-gradient-to-b': index === 0,
                'rounded-b-full bg-gradient-to-t': index === events.length - 1,
                'from-[#0c0d0f] via-[#191b1f] to-[#191b1f]':
                  index === 0 || index === events.length - 1,
                'bg-[#191b1f]': index !== 0 || index !== events.length - 1,
              }"
            ></div>
          </div>
          <div
            class="
              absolute
              w-6
              h-6
              -mt-3
              bg-[#8b7af4]
              border-4 border-[#0c0d0f]
              rounded-full
              top-1/2
            "
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          date: "August 2018",
          title: "I discovered Discord",
          details:
            "I saw many YouTube channels with a Discord server and wanted to join, so I started using it",
        },
        {
          date: "October 2018",
          title: "I created my first ever Discord bot",
          details: "I was amazed by Discord bots and wanted to make my own one",
        },
        {
          date: "January 2019",
          title: "I started learning JavaScript",
          details:
            "I decided to create my bot using JavaScript because I liked the syntax and there was only discord.js tutorials in Turkish I could find",
        },
        {
          date: "April 2019",
          title: "I started learning web development",
          details:
            "I wanted to make a website for my Discord bot so, I started learning web development",
        },
        {
          date: "May 2019",
          title: "I discovered CSS frameworks",
          details:
            "I loved how CSS frameworks made web development so easy but I only used Bootstrap which most of the tutorials used",
        },
        {
          date: "July 2019",
          title: "I made my own website",
          details:
            "I made my own website using Express, Handlebars, Bootstrap and basic stuff",
        },
        {
          date: "September 2020",
          title: "I started learning Nuxt",
          details:
            "A friend was talking about how good Nuxt is and I knew it was good but never bothered learning it",
        },
        {
          date: "December 2020",
          title: "I discovered Tailwind the second time",
          details:
            'Remember when I said "I only used Bootstrap"? Yeah... I discovered Tailwind that time as well and was recommending it but I had no idea how good it actually was since I didn\'t have a real look at it',
        },
        {
          date: "January 2021 — Today",
          title: "This portfolio",
          details:
            "I like the current design, yeah... But it might change any time eventually",
        },
      ],
    };
  },
};
</script>