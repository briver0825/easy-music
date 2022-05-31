import { createApp } from "vue"
import App from "./App.vue"

import "virtual:windi.css"

import "./style/font.scss"

import router from "./router"
import store from "./store"

createApp(App).use(router).use(store).mount("#app")
