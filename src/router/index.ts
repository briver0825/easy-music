import { createRouter, createWebHistory, Router } from "vue-router"

import { useGlobalStore } from "../store"

import Home from "../views/home/index.vue"

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/songs",
      component: () => import("../views/songs/index.vue"),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const globalStore = useGlobalStore()
  globalStore.setFullPath(to.fullPath)
  next()
})

export default router
