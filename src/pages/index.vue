<template>
  <div class="grid gap-12">
    <section class="flex flex-col items-center justify-center space-y-3">
      <img
        :src="require('~/assets/img/avatar.png')"
        class="w-48 rounded-full"
        draggable="false"
        alt="Avatar"
      />
      <div class="text-center">
        <h1 class="-mb-px">Tarık Coşkun</h1>
        <Typer />
        <div class="flex items-center justify-center mt-2 space-x-2">
          <Account
            icon="discord"
            url="https://discord.com/users/474537652943847444"
          />
          <Account icon="twitter" url="https://twitter.com/itstarikcoskun" />
          <Account
            icon="github"
            url="https://discord.com/users/474537652943847444"
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
        <Position
          url="https://temp.gg"
          title="Templates"
          role="Moderator"
          description="A service for Discord that allows you to share server templates and use them easily!"
        />
        <Position
          url="https://premid.app"
          title="PreMiD"
          role="Translator"
          description="A utility that allows you to show what you're doing on the web in your Discord status"
        />
        <Position
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
        <Contribution
          url="https://dogehouse.tv"
          title="DogeHouse"
          role="Translator"
          color="#efe7dc"
        />
        <Contribution
          url="https://store.steampowered.com/app/1115050/Will_You_Snail"
          title="Will You Snail?"
          role="Translator"
          color="#c42278"
        />
      </div>
    </section>
    <section>
      <h1>Technologies I use</h1>
      <div
        class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      >
        <Technology title="HTML" color="#f4470b" />
        <Technology title="CSS" color="#196eb3" />
        <Technology title="JavaScript" color="#e4006e" />
        <Technology title="Node.js" color="#047857" />
        <Technology title="Nuxt.js" color="#00c58e" />
        <Technology title="Tailwind" color="#44a8b3" />
        <Technology title="Sass" color="#bf4080" />
        <Technology title="Git" color="#f44d27" />
      </div>
    </section>
  </div>
</template>