import { createApp } from "vue"
import App from "./App.vue"

import "virtual:windi.css"
import "./style/font.scss"
import "animate.css"

import AOS from "aos"
import "aos/dist/aos.css" 
AOS.init({
  once: true,
})

import "./cors/init"

import router from "./router"
import store from "./store"

createApp(App).use(store).use(router).mount("#app")
