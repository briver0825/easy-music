<template>
  <div class="app-container">
    <Navbar></Navbar>
    <router-view></router-view>
    <Audio></Audio>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/navbar/index.vue"
import Audio from "./components/audio/index.vue"
</script>

<style>
.app-container {
  overflow-x: hidden;
  color: #101649;
  position: absolute;
  left: 0;
  right: 0;
  min-height: 100vh;
  padding: 0 20px;
  padding-top: 10px;
  background-color: #e8eefb;
  font-family: "微软雅黑";
}
</style>
