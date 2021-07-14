<template>
  <div>
    <header>
      <div class="container">
        <h1 class="hidden text-4xl font-medium font-title md:block">
          Tarık C.
        </h1>
        <div class="flex gap-6">
          <NuxtLink to="/#home">Home</NuxtLink>
          <NuxtLink to="/#about">About</NuxtLink>
          <NuxtLink to="/#work">Work</NuxtLink>
        </div>
        <NuxtLink class="w-32 py-2 button" to="#contact">Contact</NuxtLink>
      </div>
    </header>
    <Nuxt class="max-w-4xl px-4 mx-auto" />
  </div>
</template>
