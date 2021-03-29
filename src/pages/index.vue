<template>
  <div>
    <section>
      <div class="flex w-full h-48 space-x-2">
        <img
          src="~/assets/icons/avatar.png"
          class="object-cover border-black rounded border-opacity-80"
          style="border-bottom-width: 3px"
        />
        <div class="w-full md:w-auto grid grid-rows-4 gap-1.5">
          <Account
            color="#7289da"
            colorDarker="#5263a3"
            icon="discord"
            url="https://discord.com/users/474537652943847444"
          />
          <Account
            color="#1da1f2"
            colorDarker="#147bba"
            icon="twitter"
            url="https://twitter.com/itstarikcoskun"
          />
          <Account
            color="#374151"
            colorDarker="#1f252e"
            icon="github"
            url="https://github.com/tarikcoskun"
          />
          <Account
            color="#ef4444"
            colorDarker="#b53333"
            icon="at"
            url="mailto:imtarikcoskun@gmail.com"
          />
        </div>
        <div class="flex-col justify-between hidden pl-4 -mt-1 md:flex">
          <div>
            <h1>About me</h1>
            <p class="leading-5 text-justify md:line-clamp-4">
              I'm Tarık, a Front-End developer from Turkey. I started coding in
              2018, with Node.js. About a year later, I started learning web
              development stuff and since then, I'm learning more and more about
              it and creating websites using technologies below.
            </p>
          </div>
          <div class="mt-2 md:mt-0">
            <div class="grid grid-cols-4 gap-1">
              <Technology
                color="#f4470b"
                colorDarker="#bf3a0b"
                title="HTML"
                icon="html"
              />
              <Technology
                color="#196eb3"
                colorDarker="#125387"
                title="CSS"
                icon="css"
              />
              <Technology
                color="#ec008c"
                colorDarker="#b3006a"
                title="JavaScript"
                icon="javascript"
              />
              <Technology
                color="#047857"
                colorDarker="#03573f"
                title="Node.js"
                icon="nodejs"
              />
              <Technology
                color="#00c58e"
                colorDarker="#009c70"
                title="Nuxt.js"
                icon="nuxtjs"
              />
              <Technology
                color="#44a8b3"
                colorDarker="#35848c"
                title="Tailwind"
                icon="tailwind"
              />
              <Technology
                color="#bf4080"
                colorDarker="#992f65"
                title="Sass"
                icon="sass"
              />
              <Technology
                color="#f44d27"
                colorDarker="#bf3b1d"
                title="Git"
                icon="git"
              />
            </div>
          </div>
        </div>
        <div class="hidden pl-4 -mt-1 lg:block">
          <h1>Experiences</h1>
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
            position="Translator & Presence Dev"
            description="PreMiD is a utility that allows you to show what you're doing on the web in your Discord now playing status"
          />
          <Position
            color="#b3c7dc"
            title="Hypixel"
            url="https://hypixel.net"
            position="Translator"
            description="Hypixel is one of the largest and highest quality Minecraft Server Networks in the world"
          />
        </div>
      </div>
    </section>

    <!-- Small Screen Stuff -->
    <section class="mt-4 md:hidden">
      <div>
        <h1>About me</h1>
        <p class="leading-5 text-justify md:line-clamp-3">
          I'm Tarık, a Front-End developer from Turkey. I started coding in
          2018, with Node.js. About a year later, I started learning web
          development stuff and since then, I'm learning more and more about it
          and creating websites using technologies below.
        </p>
      </div>
      <div class="mt-2">
        <div class="grid grid-cols-2 gap-1 sm:grid-cols-4">
          <Technology
            color="#f4470b"
            colorDarker="#bf3a0b"
            title="HTML"
            icon="html"
          />
          <Technology
            color="#196eb3"
            colorDarker="#125387"
            title="CSS"
            icon="css"
          />
          <Technology
            color="#ec008c"
            colorDarker="#b3006a"
            title="JavaScript"
            icon="javascript"
          />
          <Technology
            color="#047857"
            colorDarker="#03573f"
            title="Node.js"
            icon="nodejs"
          />
          <Technology
            color="#00c58e"
            colorDarker="#009c70"
            title="Nuxt.js"
            icon="nuxtjs"
          />
          <Technology
            color="#44a8b3"
            colorDarker="#35848c"
            title="Tailwind"
            icon="tailwind"
          />
          <Technology
            color="#bf4080"
            colorDarker="#992f65"
            title="Sass"
            icon="sass"
          />
          <Technology
            color="#f44d27"
            colorDarker="#bf3b1d"
            title="Git"
            icon="git"
          />
        </div>
      </div>
      <div class="mt-4">
        <h1>Experiences</h1>
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
          position="Translator & Presence Dev"
          description="PreMiD is a utility that allows you to show what you're doing on the web in your Discord now playing status"
        />
        <Position
          color="#b3c7dc"
          title="Hypixel"
          url="https://hypixel.net"
          position="Translator"
          description="Hypixel is one of the largest and highest quality Minecraft Server Networks in the world"
        />
      </div>
    </section>
  </div>
</template>