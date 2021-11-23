import VueAnimXyz from '@animxyz/vue3'
import { createApp } from "vue"
import App from "./App.vue"
import "@/styles/main.scss"
import "@animxyz/core"

createApp(App).use(VueAnimXyz).mount("#app")
