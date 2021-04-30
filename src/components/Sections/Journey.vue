<template>
  <Section>
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
                'from-gray-200 via-gray-400 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-600':
                  index === 0 || index === events.length - 1,
                'bg-gray-400 dark:bg-gray-600':
                  index !== 0 || index !== events.length - 1,
              }"
            ></div>
          </div>
          <div
            class="absolute w-6 h-6 -mt-3 bg-gray-600 border-4 border-gray-200 rounded-full top-1/2 dark:bg-gray-300 dark:border-gray-800"
          ></div>
        </div>
          <div
            xyz="fade down-1 stagger-4 duration-8"
            class="relative p-3 my-6 transition-transform transform bg-gray-300 rounded-lg dark:bg-gray-700"
            :class="
              index % 2 === 0
                ? 'col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'
                : 'col-start-6 col-end-10 mr-auto'
            "
          >
            <h2 v-html="event.title"></h2>
            <p v-if="event.description" v-html="event.description"></p>
            <span
              class="absolute text-gray-500 top-[-1.6rem] left-0 whitespace-nowrap dark:text-gray-400"
              v-html="event.date"
            ></span>
          </div>
        </XyzTransition>
        <div
          v-if="index % 2 === 0"
          class="relative col-start-5 col-end-6 mr-7 md:mx-auto"
        >
          <div class="flex items-center justify-center w-6 h-full">
            <div
              class="w-1 h-full bg-gray-400 dark:bg-gray-600"
              :class="{
                'rounded-t-full bg-gradient-to-b': index === 0,
                'rounded-b-full bg-gradient-to-t': index === events.length - 1,
                'from-gray-200 via-gray-400 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-600':
                  index === 0 || index === events.length - 1,
                'bg-gray-400 dark:bg-gray-600':
                  index !== 0 || index !== events.length - 1,
              }"
            ></div>
          </div>
          <div
            class="absolute w-6 h-6 -mt-3 bg-gray-600 border-4 border-gray-200 rounded-full top-1/2 dark:bg-gray-300 dark:border-gray-800"
          ></div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          date: "August 2018",
          title: "I discover Discord",
          description:
            "I saw many YouTube channels with a Discord server so I decided to have a look at Discord",
        },
        {
          date: "October 2018",
          title: "I create my first ever Discord bot",
          description:
            "I was amazed by how Discord bots worked and I wanted make my own one",
        },
        {
          date: "March 2019",
          title: "I start learning web development",
          description:
            "I wanted to make a website for my Discord bot so, I started learning web development",
        },
        {
          date: "April 2019",
          title: "I discover CSS frameworks",
        },
        {
          date: "June 2019",
          title: "I make my own website",
          description:
            "I made a personal website using Express, Handlebars, Bootstrap and basic stuff",
        },
        {
          date: "September 2020",
          title: "I start learning Nuxt",
        },
        {
          date: "December 2020",
          title: "I recreate my website using Nuxt & Tailwind",
        },
      ],
    };
  },
};
</script>