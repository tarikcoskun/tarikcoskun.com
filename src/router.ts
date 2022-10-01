import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router"
import Home from "./pages/index.vue"
import Spotify2YouTube from "./pages/s2y.vue"

const history = createWebHistory()
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/s2y/:track",
    alias: "/s2y/:track",
    name: "Spotify to YouTube",
    component: Spotify2YouTube,
    props: true
  }
]

const router = createRouter({ history, routes })
export default router
