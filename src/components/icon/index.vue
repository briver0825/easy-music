<template>
  <div>
    <i
      class="iconfont"
      :class="[button && 'bg-gray-50 shadow p-1.5 rounded', textColorClassName]"
      :style="size && `font-size: ${size};`"
      v-html="icons[name]"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"
import icons from "./icons"

const props = defineProps({
  name: {
    type: String,
    default: "&#xe640;",
  },
  button: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
})

const textColor: any = {
  green: "text-green-400",
  red: "text-red-400",
  blue: "text-blue-400",
  gray: "text-gray-400",
  yellow: "text-yellow-400",
  purple: "text-purple-400",
  pink: "text-pink-400",
  orange: "text-orange-400",
  teal: "text-teal-400",
  white: "text-white",
}

const textColorClassName = computed(() => {
  return textColor[props.type]
})
</script>
