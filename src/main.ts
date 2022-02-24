import VueAnimXyz from "@animxyz/vue3"
import { createApp } from "vue"
import app from "./app.vue"
import "@/styles/main.scss"
import "@animxyz/core"

createApp(app).use(VueAnimXyz).mount("#app")