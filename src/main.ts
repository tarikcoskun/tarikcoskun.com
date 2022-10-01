import VueAnimXyz from "@animxyz/vue3"
import { createApp } from "vue"
import router from "./router"
import app from "./app.vue"
import "@/styles/main.scss"
import "@animxyz/core"

createApp(app).use(VueAnimXyz).use(router).mount("#app")
