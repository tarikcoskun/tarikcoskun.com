<template>
  <div class="flex flex-wrap items-center gap-x-16 gap-y-4">
    <section class="w-80">
      <img
        :src="require('~/assets/icons/avatar.png')"
        class="mb-2 rounded-lg w-36"
      />
      <h1 class="-mb-px">Tarık Coşkun</h1>
      <VueTyper
        :text="[
          'Front-end web developer',
          'Learning game development',
          'Loves Nuxt.js',
        ]"
        caret-animation="smooth"
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
            url="https://premid.app"
            title="Discord Templates"
            position="Moderator"
            description="Create your own kingdom with our diverse range of Discord templates!"
          /> -->
        </div>
      </section>
      <section>
        <h1>Technologies I use</h1>
        <p>Technologies I use to make my projects</p>
        <div class="grid grid-cols-2 gap-1 mt-3 md:grid-cols-4">
          <Technology color="#f4470b" title="HTML" icon="html" />
          <Technology color="#196eb3" title="CSS" icon="css" />
          <Technology color="#ec008c" title="JavaScript" icon="js" />
          <Technology color="#047857" title="Node.js" icon="nodejs" />
          <Technology color="#00c58e" title="Nuxt.js" icon="nuxtjs" />
          <Technology color="#44a8b3" title="Tailwind" icon="tailwind" />
          <Technology color="#bf4080" title="Sass" icon="sass" />
          <Technology color="#f44d27" title="Git" icon="git" />
        </div>
      </section>
    </section>
  </div>
</template>
