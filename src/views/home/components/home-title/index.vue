<template>
  <div class="flex justify-between items-center font-bold text-xl py-5">
    <div>{{ title }}</div>
    <!-- <div><i class="iconfont">&#xe622;</i></div> -->
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
  },
}
</script>
