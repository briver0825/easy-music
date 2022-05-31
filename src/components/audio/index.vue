<template>
  <div class="audio-container">
    <audio class="hidden" src="" controls></audio>
    <div class="flex items-center">
      <div
        @click="audio.toggle()"
        class="flex items-center justify-center border border-2 bg-blue-200 rounded-1 w-10 h-10"
      >
        <Icon name="play" type="blue" v-if="!audio.playing" />
        <Icon name="pause" type="blue" v-else />
      </div>
      <div class="pl-3">
        <div class="text-sm">{{ audio.audioInfo.name }}</div>
        <div class="text-xs">{{ audio.audioInfo.author }}</div>
      </div>
    </div>
    <div>
      <Icon name="top" type="while" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from "vue"
import Icon from "../../components/icon/index.vue"
import { useAudioStore } from "../../store"

const audio = useAudioStore()

nextTick(() => {
  audio.setAudio(document.querySelector("audio") || null)
})
</script>

<style lang="scss" scoped>
.audio-container {
  @apply flex justify-between items-center bg-blue-300 fixed bottom-0 left-0 right-0 px-10 py-4 text-white;
}
</style>
