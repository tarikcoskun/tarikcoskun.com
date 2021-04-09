<template>
  <section class="mt-4 md:hidden">
    <div>
      <h1>About me</h1>
      <p class="text-justify md:line-clamp-3">
        I'm Tarık, a Front-End developer from Turkey. I started coding in 2018,
        with Node.js. About a year later, I started learning web development
        stuff and since then, I'm learning more and more about it and creating
        websites using technologies below.
      </p>
    </div>
    <div class="mt-2">
      <div class="grid grid-cols-2 gap-1 sm:grid-cols-4">
        <Technology color="#f4470b" title="HTML" icon="html" />
        <Technology color="#196eb3" title="CSS" icon="css" />
        <Technology color="#ec008c" title="JavaScript" icon="javascript" />
        <Technology color="#047857" title="Node.js" icon="nodejs" />
        <Technology color="#00c58e" title="Nuxt.js" icon="nuxtjs" />
        <Technology color="#44a8b3" title="Tailwind" icon="tailwind" />
        <Technology color="#bf4080" title="Sass" icon="sass" />
        <Technology color="#f44d27" title="Git" icon="git" />
      </div>
    </div>
    <div class="mt-4">
      <h1>Positions</h1>
      <div>
        <Position
          color="#d6212a"
          url="https://floweystimemachine.github.io"
          title="Flowey's Time Machine"
          position="Designer"
          description="An editor tool for UNDERTALE that allows you to change everything in your save, made the re-design with Arda"
        />
        <hr />
        <Position
          color="#047857"
          url="http://zyapimstudios.com"
          title="Zyapim Studios"
          position="Web Developer"
          description="A development studio based in Turkey that creates games, custom projects etc."
        />
        <hr />
        <Position
          color="#7289da"
          url="https://premid.app"
          title="PreMiD"
          position="Translator"
          description="A utility that allows you to show what you're doing on the web in your Discord status"
        />
      </div>
    </div>
  </section>
</template>