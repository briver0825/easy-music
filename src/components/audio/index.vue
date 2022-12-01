<template>
  <div
    class="audio-container bg-blue-300 dark:from-dark-audio-color dark:to-blue-400 dark:bg-gradient-to-r"
    v-show="audio.audioInfo.name"
  >
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
    <div @click="() => (!global.isSongsPage ? goSongs() : goBack())">
      <Icon :name="global.isSongsPage ? 'bottom' : 'top'" type="while" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from "vue"
import { useRouter } from "vue-router"
import Icon from "../../components/icon/index.vue"
import { useAudioStore, useGlobalStore } from "../../store"

const router = useRouter()

const goSongs = () => {
  router.push("/songs")
}

const goBack = () => {
  router.back()
}

const audio = useAudioStore()
const global = useGlobalStore()

nextTick(() => {
  audio.setAudio(document.querySelector("audio") || null)
  audio.el.src = `audio/${audio.audioInfo.url}.mp3`
  audio.el.onended = () => {
    audio.playing = false
  }
})
</script>

<style lang="scss" scoped>
.audio-container {
  @apply flex justify-between items-center  fixed bottom-0 left-0 right-0 px-10 py-4 text-white;
}
</style>
