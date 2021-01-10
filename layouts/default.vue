<template>
  <div class="p-4 md:py-12 md:px-24">
    <div class="grid grid-cols-4 gap-2 md:gap-4">
      <!-- Navbar -->
      <NuxtLink
        to="/"
        class="p-2 text-2xl text-center text-white bg-gray-800 border-2 border-gray-900 rounded-lg col-span-full md:col-span-1 hover:bg-gray-900"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/projects"
        class="p-2 text-2xl text-center text-white bg-teal-500 border-2 border-teal-600 rounded-lg col-span-full md:col-span-1 hover:bg-teal-600"
        >Projects</NuxtLink
      >
      <NuxtLink
        to="/blog"
        class="p-2 text-2xl text-center text-white bg-red-500 border-2 border-red-600 rounded-lg col-span-full md:col-span-1 hover:bg-red-600"
        >Blog</NuxtLink
      >
      <NuxtLink
        to="/contact"
        class="p-2 text-2xl font-bold text-center bg-gray-200 border-2 border-gray-300 rounded-lg col-span-full md:col-span-1 hover:bg-gray-300"
        >Contact</NuxtLink
      >
      <!-- End of Navbar -->
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
