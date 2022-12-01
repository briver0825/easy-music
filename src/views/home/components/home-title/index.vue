<template>
  <div class="flex justify-between items-center font-bold text-xl py-5">
    <div>{{ title }}</div>
    <!-- <div><i class="iconfont">&#xe622;</i></div> -->
    <button @click="globalStore.toggleThemeMode">切换主题</button>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "../../../../store"

const globalStore = useGlobalStore()
</script>

<script lang="ts">
export default {
  props: {
    title: String,
  },
}
</script>
