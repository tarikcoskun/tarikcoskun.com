<template>
  <div>
    <div
      class="absolute top-0 left-0 w-full h-3"
      style="background: #4da7a6"
    ></div>
    <section>
      <div class="flex w-full h-48 space-x-2">
        <img
          src="~/assets/icons/avatar.png"
          class="object-cover border-black rounded border-opacity-80 border-b-3"
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
            <p class="text-justify md:line-clamp-4">
              I'm Tarık, a Front-End developer from Turkey. I started coding in
              2018, with Node.js. About a year later, I started learning web
              development stuff and since then, I'm learning more and more about
              it and creating websites using technologies below.
            </p>
          </div>
          <div class="pt-2">
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
          <h1>Positions</h1>
          <div>
            <Position
              color="#d6212a"
              url="https://floweystimemachine.github.io"
              title="Flowey's Time Machine"
              position="Designer"
              description="An editor tool for UNDERTALE that allows you to change everything in your save, made the re-design with Arda"
            />
            <hr class="w-2/3 mx-auto my-1.5 border-gray-300" />
            <Position
              color="#047857"
              url="http://zyapimstudios.com"
              title="Zyapim Studios"
              position="Web Developer"
              description="A development studio based in Turkey that creates games, custom projects etc."
            />
            <hr class="w-2/3 mx-auto my-1.5 border-gray-300" />
            <Position
              color="#7289da"
              url="https://premid.app"
              title="PreMiD"
              position="Translator"
              description="A utility that allows you to show what you're doing on the web in your Discord status"
            />
          </div>
        </div>
      </div>
    </section>
    <MobileStuff />
    <section class="grid gap-2 mt-3 md:grid-cols-2 projects-container">
      <Project
        url="#"
        title="Project Name"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio modi eligendi quibusdam aliquid ipsam qui repudiandae, eum amet molestias nemo (thats really just a placeholder)"
      />
      <Project
        onclick="alert('You are already sitting there!')"
        title="This Website"
        description="My personal website where you can get information about me and my stuff and such (hello there visitor)"
      />
    </section>
  </div>
</template>