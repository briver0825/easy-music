import { createRouter, createWebHistory, Router } from "vue-router"

import Home from "../views/home/index.vue"

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
})

export default router
