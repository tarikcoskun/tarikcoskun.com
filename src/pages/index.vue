<template>
  <div class="flex flex-wrap items-center md:flex-nowrap gap-x-16 gap-y-8">
    <section class="w-96">
      <img
        :src="require('~/assets/icons/avatar.png')"
        class="w-32 mb-2 rounded-lg"
        draggable="false"
      />
      <h1 class="-mb-px">Tarık Coşkun</h1>
      <VueTyper
        :text="[
          'Front-end web developer',
          'Learning game development',
          'Loves Nuxt.js',
        ]"
      />
      <div class="grid gap-1 mt-3">
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
    </section>
    <section class="grid gap-4">
      <section>
        <h1>Current positions</h1>
        <div class="grid mt-2 md:grid-cols-2 gap-x-4 gap-y-2">
          <Position
            color="#d6212a"
            url="https://floweystimemachine.github.io"
            title="Flowey's Time Machine"
            position="Designer"
            description="An editor tool for UNDERTALE that allows you to change everything in your save"
          />
          <Position
            color="#047857"
            url="http://zyapimstudios.com"
            title="Zyapim Studios"
            position="Web Developer"
            description="A development studio based in Turkey that creates games, custom projects etc."
          />
          <Position
            color="#7289da"
            url="https://premid.app"
            title="PreMiD"
            position="Translator"
            description="A utility that allows you to show what you're doing on the web in your Discord status"
          />
          <!-- <Position
            color="#111111"
            url="https://temp.gg"
            title="Discord Templates"
            position="Moderator"
            description="Create your own kingdom with our diverse range of Discord templates!"
          /> -->
        </div>
      </section>
      <section>
        <div>
          <h1>Technologies I use</h1>
          <p>Technologies I use to make my projects</p>
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
