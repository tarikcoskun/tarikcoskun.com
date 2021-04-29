<template>
  <div class="grid gap-16">
    <section class="flex flex-col items-center justify-center space-y-3">
      <Skeleton img="/icon.png" type="avatar" color="var(--gray)" />
      <div class="text-center">
        <h1 class="-mb-px">Tarık Coşkun</h1>
        <Typer />
        <div class="flex items-center justify-center mt-2 space-x-2">
          <Account
            url="https://discord.com/users/474537652943847444"
            icon="discord"
            class="account"
          />
          <Account
            url="https://twitter.com/itstarikcoskun"
            icon="twitter"
            class="account"
          />
          <Account
            url="https://github.com/tarikcoskun"
            icon="github"
            class="account"
          />
          <Account
            url="mailto:imtarikcoskun@gmail.com"
            icon="at"
            class="account"
          />
        </div>
      </div>
    </section>
    <section>
      <h1>About me</h1>
      <p class="text-lg">
        Hello there, visitor! I'm Tarık, a front-end developer from Turkey. I'm
        currently working at Discord Templates as a Moderator and also
        translating many projects which you can find from my
        <a
          class="text-lg"
          href="https://crowdin.com/profile/tarikcoskun"
          draggable="false"
          >Crowdin profile</a
        >. Aside coding, I love playing games like Minecraft, Terraria,
        Half-Life and Undertale.
      </p>
    </section>
    <section>
      <h1>Current positions</h1>
      <div class="grid gap-3 sm:grid-cols-3">
        <Card
          url="https://temp.gg"
          title="Templates"
          role="Moderator"
          description="A service for Discord that allows you to share server templates and use them easily!"
        />
        <Card
          url="https://premid.app"
          title="PreMiD"
          role="Translator"
          description="A utility that allows you to show what you're doing on the web in your Discord status"
        />
        <Card
          url="https://floweystimemachine.github.io"
          title="Undertale Editor"
          role="Designer"
          description="An editor tool for Undertale that allows you to change everything in your save easily!"
        />
      </div>
    </section>
    <section>
      <h1>Also contributed to</h1>
      <div class="grid gap-3 sm:grid-cols-3 md:grid-cols-3">
        <Card
          url="https://dogehouse.tv"
          title="DogeHouse"
          role="Translator"
          color="#efe7dc"
        />
        <Card
          url="https://store.steampowered.com/app/1115050/Will_You_Snail"
          title="Will You Snail?"
          role="Translator"
          color="#c42277"
        />
      </div>
    </section>
    <section>
      <h1>Technologies I use</h1>
      <div class="grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-5">
        <Card title="HTML" color="#f4470b" />
        <Card title="CSS" color="#196eb3" />
        <Card title="JavaScript" color="#e4006e" />
        <Card title="TypeScript" color="#007acc" />
        <Card title="Node.js" color="#047857" />
        <Card title="Nuxt.js" color="#00c58e" />
        <Card title="Vue.js" color="#41b883" />
        <Card title="Tailwind" color="#44a8b3" />
        <Card title="Sass" color="#bf4080" />
        <Card title="Git" color="#f44d27" />
      </div>
    </section>
    <section>
      <h1 class="mb-8 text-center">Journey</h1>
      <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <Journey
          date="August 2018"
          title="I discover Discord"
          description="I saw many YouTube channels with a Discord server so I decided to have a look at Discord"
        />
        <Journey
          date="October 2018"
          title="I create my first ever Discord bot"
          description="I was amazed by how Discord bots worked and I wanted make my own one"
          position="right"
        />
        <Journey
          date="March 2019"
          title="I start learning web development"
          description="I wanted to make a website for my Discord bot so, I started learning web development"
        />
        <Journey
          date="April 2019"
          title="I discover CSS frameworks"
          position="right"
        />
        <Journey
          date="June 2019"
          title="I make my own website"
          description="I made a personal website using Express, Handlebars, Bootstrap and basic stuff"
        />
        <Journey
          date="September 2020"
          title="I start learning Nuxt"
          position="right"
        />
        <Journey
          date="December 2020"
          title="I recreate my website using Nuxt & Tailwind"
        />
      </div>
    </section>
  </div>
</template>