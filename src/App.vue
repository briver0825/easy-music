<template>
  <div
    class="app-container bg-main-bg-color dark:bg-dark-bg-color text-dark-bg-color dark:text-white"
    :class="{ 'pb-20': audio.audioInfo.name }"
  >
    <!-- <Navbar></Navbar> -->
    <router-view></router-view>
    <Audio></Audio>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/navbar/index.vue"
import Audio from "./components/audio/index.vue"

import { useAudioStore } from "./store"

const audio = useAudioStore()
</script>

<style>
.app-container {
  overflow-x: hidden;
  position: absolute;
  left: 0;
  right: 0;
  min-height: 100vh;
  padding: 0 20px;
  padding-top: 10px;
  /* background-color: #e8eefb !important; */
  font-family: "微软雅黑";
}
</style>
