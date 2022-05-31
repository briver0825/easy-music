<template>
  <div class="navbar">
    <div class="navbar-left">
      <Icon name="sonic" button />
    </div>
    <div class="navbar-center">My Music</div>
    <div class="navbar-right">
      <Icon name="message" button />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../../components/icon/index.vue"
</script>

<style scoped lang="scss">
.navbar {
  @apply flex justify-between relative py-8 item-center;
  .navbar-center {
    @apply absolute left--1/2 text-xl font-bold;
    transform: translate(-50%);
  }
}
</style>
