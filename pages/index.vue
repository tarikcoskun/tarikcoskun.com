<template>
<div class="p-4 md:px-16 md:py-8">

  <div class="grid grid-cols-1 gap-4 md:grid-cols-7">
    <div class="col-span-7 p-3 bg-gray-100 rounded-lg md:p-6">
      <h1 class="text-2xl font-semibold">About Me</h1>
      <p class="text-lg text-justify text-gray-700">Howdy! I'm Tarık, a young developer from Turkey. I spend most of my time playing games, coding and chatting. I have been coding since 2018, when I started using Discord. I've always wondered how Discord bots and websites work, so I started researching about them. About 8 months later, I had enough knowledge to create Discord bots from scratch. After learning about Discord bots, I started researching about websites and since then, I'm trying to create websites using new technologies I learn.</p>
    </div>
    <section class="col-span-7 md:col-span-4">
      <div class="grid grid-cols-1 gap-4">
        <div class="p-3 bg-gray-100 rounded-lg">
          <h1 class="text-2xl font-semibold">Positions</h1>
          <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div>
              <a href="https://zyapimstudios.com/generations" target="_blank" class="text-xl font-semibold text-gray-800 hover:underline">Generations</a>
              <p class="-mt-1 text-lg text-gray-700">Website Developer</p>
            </div>
            <div>
              <a href="#" target="_blank" class="text-xl font-semibold text-gray-800 hover:underline">Project Name</a>
              <p class="-mt-1 text-lg text-gray-700">Position</p>
            </div>
            <div>
              <a href="#" target="_blank" class="text-xl font-semibold text-gray-800 hover:underline">Project Name</a>
              <p class="-mt-1 text-lg text-gray-700">Position</p>
            </div>
            <div>
              <a href="#" target="_blank" class="text-xl font-semibold text-gray-800 hover:underline">Project Name</a>
              <p class="-mt-1 text-lg text-gray-700">Position</p>
            </div>
          </div>
        </div>
        <div class="hidden p-3 bg-gray-100 rounded-lg md:block">
          <h1 class="inline text-2xl font-semibold">Follow Me
            <a href="https://discord.com/users/474537652943847444" target="_blank"><img class="inline w-8 ml-2" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOS41NCAwYzEuMzU2IDAgMi40NiAxLjEwNCAyLjQ2IDIuNDcydjIxLjUyOGwtMi41OC0yLjI4LTEuNDUyLTEuMzQ0LTEuNTM2LTEuNDI4LjYzNiAyLjIyaC0xMy42MDhjLTEuMzU2IDAtMi40Ni0xLjEwNC0yLjQ2LTIuNDcydi0xNi4yMjRjMC0xLjM2OCAxLjEwNC0yLjQ3MiAyLjQ2LTIuNDcyaDE2LjA4em0tNC42MzIgMTUuNjcyYzIuNjUyLS4wODQgMy42NzItMS44MjQgMy42NzItMS44MjQgMC0zLjg2NC0xLjcyOC02Ljk5Ni0xLjcyOC02Ljk5Ni0xLjcyOC0xLjI5Ni0zLjM3Mi0xLjI2LTMuMzcyLTEuMjZsLS4xNjguMTkyYzIuMDQuNjI0IDIuOTg4IDEuNTI0IDIuOTg4IDEuNTI0LTEuMjQ4LS42ODQtMi40NzItMS4wMi0zLjYxMi0xLjE1Mi0uODY0LS4wOTYtMS42OTItLjA3Mi0yLjQyNC4wMjRsLS4yMDQuMDI0Yy0uNDIuMDM2LTEuNDQuMTkyLTIuNzI0Ljc1Ni0uNDQ0LjIwNC0uNzA4LjM0OC0uNzA4LjM0OHMuOTk2LS45NDggMy4xNTYtMS41NzJsLS4xMi0uMTQ0cy0xLjY0NC0uMDM2LTMuMzcyIDEuMjZjMCAwLTEuNzI4IDMuMTMyLTEuNzI4IDYuOTk2IDAgMCAxLjAwOCAxLjc0IDMuNjYgMS44MjQgMCAwIC40NDQtLjU0LjgwNC0uOTk2LTEuNTI0LS40NTYtMi4xLTEuNDE2LTIuMS0xLjQxNmwuMzM2LjIwNC4wNDguMDM2LjA0Ny4wMjcuMDE0LjAwNi4wNDcuMDI3Yy4zLjE2OC42LjMuODc2LjQwOC40OTIuMTkyIDEuMDguMzg0IDEuNzY0LjUxNi45LjE2OCAxLjk1Ni4yMjggMy4xMDguMDEyLjU2NC0uMDk2IDEuMTQtLjI2NCAxLjc0LS41MTYuNDItLjE1Ni44ODgtLjM4NCAxLjM4LS43MDggMCAwLS42Ljk4NC0yLjE3MiAxLjQyOC4zNi40NTYuNzkyLjk3Mi43OTIuOTcyem0tNS41OC01LjYwNGMtLjY4NCAwLTEuMjI0LjYtMS4yMjQgMS4zMzIgMCAuNzMyLjU1MiAxLjMzMiAxLjIyNCAxLjMzMi42ODQgMCAxLjIyNC0uNiAxLjIyNC0xLjMzMi4wMTItLjczMi0uNTQtMS4zMzItMS4yMjQtMS4zMzJ6bTQuMzggMGMtLjY4NCAwLTEuMjI0LjYtMS4yMjQgMS4zMzIgMCAuNzMyLjU1MiAxLjMzMiAxLjIyNCAxLjMzMi42ODQgMCAxLjIyNC0uNiAxLjIyNC0xLjMzMiAwLS43MzItLjU0LTEuMzMyLTEuMjI0LTEuMzMyeiIvPjwvc3ZnPg=="></a>
            <a href="https://steamcommunity.com/id/tarikcoskun" target="_blank"><img class="inline w-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMi01Ljc4MiAwLTEwLjYwOC00LjA5MS0xMS43NDQtOS41MzdsNC43NjQgMi4wMDNjLjI4NSAxLjQ0MSAxLjU2IDIuNTQ3IDMuMTE1IDIuNTM0IDEuNzIzLS4wMTcgMy4xMDUtMS40MTQgMy4xMTYtMy4xMjlsLjAwNy0uMDAzIDMuNjAyLTIuNjg0YzIuMzA0LjAyNCA0LjE0LTEuODMzIDQuMTQtNC4wOTEgMC0yLjI2LTEuODM0LTQuMDkzLTQuMDkzLTQuMDkzLTIuMjM0IDAtNC4wNDggMS43OTEtNC4wOSA0LjAxNWwtMi42NCAzLjY5M2MtLjY2OC0uMDE0LTEuMjY5LjE2OS0xLjc5MS41MWwtNi4yOTQtMi42NDZjLjcwOC01Ljk1MyA1Ljc2NS0xMC41NzIgMTEuOTA4LTEwLjU3MiA2LjYyNyAwIDEyIDUuMzczIDEyIDEyem0tMTYuNTc3IDUuNDc3bC0xLjU0NC0uNjQ5Yy4zOC44NTggMS4yMzYgMS40NjEgMi4yNDkgMS40NTcgMS4zNDYtLjAxMiAyLjQyMi0xLjExIDIuNDEtMi40NTUtLjAxMi0xLjMyOS0xLjEwNC0yLjQxLTIuNDMyLTIuNDEtLjI4Ny4wMDEtLjU3LjA1LS44Ni4xNmwxLjU0Mi42NDhjLjg5OC4zNzggMS4zMTkgMS40MTEuOTQxIDIuMzA4LS4zNzYuODk2LTEuNDA5IDEuMzE4LTIuMzA2Ljk0MXptNy40ODQtNS42MDJjLTEuNTMzIDAtMi43ODEtMS4yNDktMi43ODEtMi43ODIgMC0xLjUzNCAxLjI0OC0yLjc4MiAyLjc4MS0yLjc4MiAxLjUzNCAwIDIuNzgxIDEuMjQ4IDIuNzgxIDIuNzgyIDAgMS41MzMtMS4yNDcgMi43ODItMi43ODEgMi43ODJ6bTAtLjY4MmMxLjE1OSAwIDIuMS0uOTQyIDIuMS0yLjEwMSAwLTEuMTU4LS45NC0yLjEwMi0yLjEtMi4xMDJzLTIuMTAyLjk0My0yLjEwMiAyLjEwMmMuMDAxIDEuMTU5Ljk0MyAyLjEwMSAyLjEwMiAyLjEwMXoiLz48L3N2Zz4="></a>
            <a href="https://twitter.com/itstarikcoskun" target="_blank"><img class="inline w-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNC41NTdjLS44ODMuMzkyLTEuODMyLjY1Ni0yLjgyOC43NzUgMS4wMTctLjYwOSAxLjc5OC0xLjU3NCAyLjE2NS0yLjcyNC0uOTUxLjU2NC0yLjAwNS45NzQtMy4xMjcgMS4xOTUtLjg5Ny0uOTU3LTIuMTc4LTEuNTU1LTMuNTk0LTEuNTU1LTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDUtNC4wOTEtLjIwNS03LjcxOS0yLjE2NS0xMC4xNDgtNS4xNDQtMS4yOSAyLjIxMy0uNjY5IDUuMTA4IDEuNTIzIDYuNTc0LS44MDYtLjAyNi0xLjU2Ni0uMjQ3LTIuMjI5LS42MTYtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5LS42OTMuMTg4LTEuNDUyLjIzMi0yLjIyNC4wODQuNjI2IDEuOTU2IDIuNDQ0IDMuMzc5IDQuNiAzLjQxOS0yLjA3IDEuNjIzLTQuNjc4IDIuMzQ4LTcuMjkgMi4wNCAyLjE3OSAxLjM5NyA0Ljc2OCAyLjIxMiA3LjU0OCAyLjIxMiA5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2Ljk2Mi0uNjk1IDEuNzk3LTEuNTYyIDIuNDU3LTIuNTQ5eiIvPjwvc3ZnPg=="></a>
          </h1>
        </div>
      </div>
    </section>
    <section class="col-span-7 md:col-span-3">
      <div class="grid gap-4">
        <div class="p-3 bg-gray-100 rounded-lg">
          <h1 class="text-2xl font-semibold">Skills</h1>
          <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div class="p-2 bg-gray-200 rounded-md">
              <div class="flex items-center justify-between mb-1">
                <h1 class="text-xl font-semibold text-gray-700 truncate">HTML</h1>
                <span class="text-lg font-semibold text-right text-gray-600">95%</span>
              </div>
              <div class="flex h-2 overflow-hidden bg-gray-400 rounded">
                <div class="w-11/12 bg-gray-700"></div>
              </div>
            </div>
            <div class="p-2 bg-gray-200 rounded-md">
              <div class="flex items-center justify-between mb-1">
                <h1 class="text-xl font-semibold text-gray-700 truncate">JavaScript</h1>
                <span class="text-lg font-semibold text-right text-gray-600">75%</span>
              </div>
              <div class="flex h-2 overflow-hidden bg-gray-400 rounded">
                <div class="w-9/12 bg-gray-700"></div>
              </div>
            </div>
            <div class="p-2 bg-gray-200 rounded-md">
              <div class="flex items-center justify-between mb-1">
                <h1 class="text-xl font-semibold text-gray-700 truncate">CSS</h1>
                <span class="text-lg font-semibold text-right text-gray-600">70%</span>
              </div>
              <div class="flex h-2 overflow-hidden bg-gray-400 rounded">
                <div class="w-2/3 bg-gray-700"></div>
              </div>
            </div>
            <div class="p-2 bg-gray-200 rounded-md">
              <div class="flex items-center justify-between mb-1">
                <h1 class="text-xl font-semibold text-gray-700 truncate">NodeJS</h1>
                <span class="text-lg font-semibold text-right text-gray-600">60%</span>
              </div>
              <div class="flex h-2 overflow-hidden bg-gray-400 rounded">
                <div class="w-3/5 bg-gray-700"></div>
              </div>
            </div>
            <div class="p-2 bg-gray-200 rounded-md">
              <div class="flex items-center justify-between mb-1">
                <h1 class="text-xl font-semibold text-gray-700 truncate">NuxtJS</h1>
                <span class="text-lg font-semibold text-right text-gray-600">15%</span>
              </div>
              <div class="flex h-2 overflow-hidden bg-gray-400 rounded">
                <div class="w-1/6 bg-gray-700"></div>>
              </div>
            </div>
            <div class="p-2 bg-gray-200 rounded-md">
              <div class="flex items-center justify-between mb-1">
                <h1 class="text-xl font-semibold text-gray-700 truncate">TailwindCSS</h1>
                <span class="text-lg font-semibold text-right text-gray-600">40%</span>
              </div>
              <div class="flex h-2 overflow-hidden bg-gray-400 rounded">
                <div class="w-2/5 bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-3 bg-gray-100 rounded-lg md:hidden">
          <h1 class="inline text-2xl font-semibold">Follow Me
            <a href="https://discord.com/users/474537652943847444" target="_blank"><img class="inline w-8 ml-2" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOS41NCAwYzEuMzU2IDAgMi40NiAxLjEwNCAyLjQ2IDIuNDcydjIxLjUyOGwtMi41OC0yLjI4LTEuNDUyLTEuMzQ0LTEuNTM2LTEuNDI4LjYzNiAyLjIyaC0xMy42MDhjLTEuMzU2IDAtMi40Ni0xLjEwNC0yLjQ2LTIuNDcydi0xNi4yMjRjMC0xLjM2OCAxLjEwNC0yLjQ3MiAyLjQ2LTIuNDcyaDE2LjA4em0tNC42MzIgMTUuNjcyYzIuNjUyLS4wODQgMy42NzItMS44MjQgMy42NzItMS44MjQgMC0zLjg2NC0xLjcyOC02Ljk5Ni0xLjcyOC02Ljk5Ni0xLjcyOC0xLjI5Ni0zLjM3Mi0xLjI2LTMuMzcyLTEuMjZsLS4xNjguMTkyYzIuMDQuNjI0IDIuOTg4IDEuNTI0IDIuOTg4IDEuNTI0LTEuMjQ4LS42ODQtMi40NzItMS4wMi0zLjYxMi0xLjE1Mi0uODY0LS4wOTYtMS42OTItLjA3Mi0yLjQyNC4wMjRsLS4yMDQuMDI0Yy0uNDIuMDM2LTEuNDQuMTkyLTIuNzI0Ljc1Ni0uNDQ0LjIwNC0uNzA4LjM0OC0uNzA4LjM0OHMuOTk2LS45NDggMy4xNTYtMS41NzJsLS4xMi0uMTQ0cy0xLjY0NC0uMDM2LTMuMzcyIDEuMjZjMCAwLTEuNzI4IDMuMTMyLTEuNzI4IDYuOTk2IDAgMCAxLjAwOCAxLjc0IDMuNjYgMS44MjQgMCAwIC40NDQtLjU0LjgwNC0uOTk2LTEuNTI0LS40NTYtMi4xLTEuNDE2LTIuMS0xLjQxNmwuMzM2LjIwNC4wNDguMDM2LjA0Ny4wMjcuMDE0LjAwNi4wNDcuMDI3Yy4zLjE2OC42LjMuODc2LjQwOC40OTIuMTkyIDEuMDguMzg0IDEuNzY0LjUxNi45LjE2OCAxLjk1Ni4yMjggMy4xMDguMDEyLjU2NC0uMDk2IDEuMTQtLjI2NCAxLjc0LS41MTYuNDItLjE1Ni44ODgtLjM4NCAxLjM4LS43MDggMCAwLS42Ljk4NC0yLjE3MiAxLjQyOC4zNi40NTYuNzkyLjk3Mi43OTIuOTcyem0tNS41OC01LjYwNGMtLjY4NCAwLTEuMjI0LjYtMS4yMjQgMS4zMzIgMCAuNzMyLjU1MiAxLjMzMiAxLjIyNCAxLjMzMi42ODQgMCAxLjIyNC0uNiAxLjIyNC0xLjMzMi4wMTItLjczMi0uNTQtMS4zMzItMS4yMjQtMS4zMzJ6bTQuMzggMGMtLjY4NCAwLTEuMjI0LjYtMS4yMjQgMS4zMzIgMCAuNzMyLjU1MiAxLjMzMiAxLjIyNCAxLjMzMi42ODQgMCAxLjIyNC0uNiAxLjIyNC0xLjMzMiAwLS43MzItLjU0LTEuMzMyLTEuMjI0LTEuMzMyeiIvPjwvc3ZnPg=="></a>
            <a href="https://steamcommunity.com/id/tarikcoskun" target="_blank"><img class="inline w-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMi01Ljc4MiAwLTEwLjYwOC00LjA5MS0xMS43NDQtOS41MzdsNC43NjQgMi4wMDNjLjI4NSAxLjQ0MSAxLjU2IDIuNTQ3IDMuMTE1IDIuNTM0IDEuNzIzLS4wMTcgMy4xMDUtMS40MTQgMy4xMTYtMy4xMjlsLjAwNy0uMDAzIDMuNjAyLTIuNjg0YzIuMzA0LjAyNCA0LjE0LTEuODMzIDQuMTQtNC4wOTEgMC0yLjI2LTEuODM0LTQuMDkzLTQuMDkzLTQuMDkzLTIuMjM0IDAtNC4wNDggMS43OTEtNC4wOSA0LjAxNWwtMi42NCAzLjY5M2MtLjY2OC0uMDE0LTEuMjY5LjE2OS0xLjc5MS41MWwtNi4yOTQtMi42NDZjLjcwOC01Ljk1MyA1Ljc2NS0xMC41NzIgMTEuOTA4LTEwLjU3MiA2LjYyNyAwIDEyIDUuMzczIDEyIDEyem0tMTYuNTc3IDUuNDc3bC0xLjU0NC0uNjQ5Yy4zOC44NTggMS4yMzYgMS40NjEgMi4yNDkgMS40NTcgMS4zNDYtLjAxMiAyLjQyMi0xLjExIDIuNDEtMi40NTUtLjAxMi0xLjMyOS0xLjEwNC0yLjQxLTIuNDMyLTIuNDEtLjI4Ny4wMDEtLjU3LjA1LS44Ni4xNmwxLjU0Mi42NDhjLjg5OC4zNzggMS4zMTkgMS40MTEuOTQxIDIuMzA4LS4zNzYuODk2LTEuNDA5IDEuMzE4LTIuMzA2Ljk0MXptNy40ODQtNS42MDJjLTEuNTMzIDAtMi43ODEtMS4yNDktMi43ODEtMi43ODIgMC0xLjUzNCAxLjI0OC0yLjc4MiAyLjc4MS0yLjc4MiAxLjUzNCAwIDIuNzgxIDEuMjQ4IDIuNzgxIDIuNzgyIDAgMS41MzMtMS4yNDcgMi43ODItMi43ODEgMi43ODJ6bTAtLjY4MmMxLjE1OSAwIDIuMS0uOTQyIDIuMS0yLjEwMSAwLTEuMTU4LS45NC0yLjEwMi0yLjEtMi4xMDJzLTIuMTAyLjk0My0yLjEwMiAyLjEwMmMuMDAxIDEuMTU5Ljk0MyAyLjEwMSAyLjEwMiAyLjEwMXoiLz48L3N2Zz4="></a>
            <a href="https://twitter.com/itstarikcoskun" target="_blank"><img class="inline w-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNC41NTdjLS44ODMuMzkyLTEuODMyLjY1Ni0yLjgyOC43NzUgMS4wMTctLjYwOSAxLjc5OC0xLjU3NCAyLjE2NS0yLjcyNC0uOTUxLjU2NC0yLjAwNS45NzQtMy4xMjcgMS4xOTUtLjg5Ny0uOTU3LTIuMTc4LTEuNTU1LTMuNTk0LTEuNTU1LTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDUtNC4wOTEtLjIwNS03LjcxOS0yLjE2NS0xMC4xNDgtNS4xNDQtMS4yOSAyLjIxMy0uNjY5IDUuMTA4IDEuNTIzIDYuNTc0LS44MDYtLjAyNi0xLjU2Ni0uMjQ3LTIuMjI5LS42MTYtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5LS42OTMuMTg4LTEuNDUyLjIzMi0yLjIyNC4wODQuNjI2IDEuOTU2IDIuNDQ0IDMuMzc5IDQuNiAzLjQxOS0yLjA3IDEuNjIzLTQuNjc4IDIuMzQ4LTcuMjkgMi4wNCAyLjE3OSAxLjM5NyA0Ljc2OCAyLjIxMiA3LjU0OCAyLjIxMiA5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2Ljk2Mi0uNjk1IDEuNzk3LTEuNTYyIDIuNDU3LTIuNTQ5eiIvPjwvc3ZnPg=="></a>
          </h1>
        </div>
      </div>
    </section>
  </div>
  <h1 class="m-4 text-3xl font-semibold text-center md:mt-4 md:m-0 md:text-2xl md:text-left">Latest Posts</h1>
  <div class="grid grid-cols-1 gap-2 md:grid-cols-3">
    <nuxt-link :to="`/articles/${article.slug}`" class="p-3 bg-gray-700 rounded-lg hover:bg-gray-800" v-for="article in articles" :key="article.id">
      <h1 class="text-2xl text-gray-200">{{ article.title }}</h1>
      <p class="-mt-1 text-gray-400 truncate">{{ article.description }}</p>
    </nuxt-link>
  </div>

</div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {

    return {
      articles: await $content('articles', params.slug).fetch()
    }
  }
}
</script>
