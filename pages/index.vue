<template>
  <section class="grid gap-4 lg:grid-cols-2 lg:gap-16">
    <div>
      <div>
        <h1>About me</h1>
        <p class="text-justify">
          I'm Tarık, a Front-End web developer from Turkey. I started coding in
          2018, with Node.js. Since 2019, I'm learning more and more about web
          development and creating websites with my knowledge.
        </p>
      </div>
      <div class="grid grid-cols-4 gap-1 mt-1">
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
        <Account
          color="#ef4444"
          title="Mail"
          icon="at"
          url="mailto:imtarikcoskun@gmail.com"
        />
      </div>
      <div class="mt-2">
        <h1>Technologies I use</h1>
        <div class="grid grid-cols-3 gap-1">
          <Technology color="#dd4b25" title="HTML" icon="html" />
          <Technology color="#196eb3" title="CSS" icon="css" />
          <Technology color="#ec008c" title="JavaScript" icon="javascript" />
          <Technology color="#047857" title="Node.js" icon="nodejs" />
          <Technology color="#00c58e" title="Nuxt.js" icon="nuxtjs" />
          <Technology color="#44a8b3" title="Tailwind CSS" icon="tailwindcss" />
        </div>
      </div>
    </div>
    <div>
      <div>
        <h1>Positions</h1>
        <Position
          color="#d6212a"
          title="Flowey's Time Machine"
          url="https://floweystimemachine.github.io"
          position="Designer"
          description="A re-design project we made with Arda for Flowey's Time Machine for better experience"
        />
        <Position
          color="#7289da"
          title="PreMiD"
          url="https://premid.app/users/474537652943847444"
          position="Translator & Presence Developer"
          description="PreMiD is a utility that allows you to show what you're doing on the web in your Discord now playing status"
        />
        <Position
          title="Hypixel"
          url="https://hypixel.net"
          position="Translator"
          description="Hypixel is one of the largest and highest quality Minecraft Server Networks in the world"
        />
      </div>
    </div>
  </section>
</template>