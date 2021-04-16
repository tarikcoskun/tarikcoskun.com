<template>
  <section>
    <h1 class="-mb-px">Tarık Coşkun</h1>
    <VueTyper
      class="hidden md:block"
      :text="['Front-end developer', 'Loves Nuxt.js', 'Minecraft IGN: yarnpkg']"
    />
    <div class="grid gap-1 mt-2">
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
</template>