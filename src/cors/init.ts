import { nextTick, onMounted } from "vue"
import { useGlobalStore } from "../store"

nextTick(() => {
  const globalStore = useGlobalStore()

  if (globalStore.isDarkTheme) {
    document.documentElement.classList.add("dark")
  }
})
