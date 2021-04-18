<template>
  <div class="flex flex-wrap items-center md:flex-nowrap gap-x-16">
    <section class="w-96">
      <div class="flex flex-row space-x-3 md:flex-col md:space-x-0">
        <img
          :src="require('~/assets/icons/avatar.png')"
          class="w-32 mb-3 rounded-lg"
          draggable="false"
        />
        <div class="-mt-px">
          <h1 class="-mb-px">Tarık Coşkun</h1>
          <Typer class="hidden md:block" />
          <div class="flex flex-col gap-1 mt-2">
            <Account
              color="#7289da"
              title="Discord"
              icon="discord"
              url="https://discord.com/users/474537652943847444"
            />
            <Account
              color="#1da1f2"
              title="Twitter"
              icon="twitter"
              url="https://twitter.com/itstarikcoskun"
            />
            <Account
              color="#374151"
              title="GitHub"
              icon="github"
              url="https://github.com/tarikcoskun"
            />
          </div>
        </div>
      </div>
      <Typer class="md:hidden" />
    </section>
    <section class="grid gap-4">
      <section>
        <h1>Current positions</h1>
        <div class="grid gap-3 md:grid-cols-2">
          <Position
            :logo="require('~/assets/icons/dcst.png')"
            url="https://temp.gg"
            title="Templates"
            position="Trial Moderator"
            description="Create your own kingdom with our diverse range of Discord templates!"
          />
          <Position
            :logo="require('~/assets/icons/premid.png')"
            url="https://premid.app"
            title="PreMiD"
            position="Translator"
            description="A utility that allows you to show what you're doing on the web in your Discord status"
          />
          <Position
            :logo="require('~/assets/icons/flowey.png')"
            url="https://floweystimemachine.github.io"
            title="Undertale Editor"
            position="Designer"
            description="An editor tool for UNDERTALE that allows you to change everything in your save"
          />
          <Position
            :logo="require('~/assets/icons/zyapim.png')"
            url="http://zyapimstudios.com"
            title="Zyapim Studios"
            position="Web Dev"
            description="A development studio based in Turkey that creates games, custom projects etc."
          />
        </div>
      </section>
      <section>
        <div>
          <h1>Technologies I use</h1>
          <p class="-mt-1">Technologies I use to make my projects</p>
          <div class="grid grid-cols-2 gap-1 mt-3 md:grid-cols-4">
            <Technology title="HTML" icon="html" />
            <Technology title="CSS" icon="css" />
            <Technology title="JavaScript" icon="js" />
            <!-- <Technology title="TypeScript" icon="ts" /> -->
            <Technology title="Node.js" icon="nodejs" />
            <Technology title="Nuxt.js" icon="nuxtjs" />
            <Technology title="Tailwind" icon="tailwind" />
            <Technology title="Sass" icon="sass" />
            <Technology title="Git" icon="git" />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
