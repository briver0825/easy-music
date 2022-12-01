<template>
  <div
    class="animate__animated animate__slideInUp !animate-duration-700"
    id="songs"
  >
    <div class="flex items-center flex-col">
      <div
        class="rounded-1 overflow-hidden my-10 w-60 shadow-md"
        id="img"
        :style="{
          'animation-play-state': audio.playing ? 'running' : 'paused',
        }"
      >
        <img :src="audio.audioInfo.img" class="w-full" />
      </div>
      <div class="font-bold text-2xl">{{ audio.audioInfo.name }}</div>
      <div class="text-gray-500 my-2 text-xs">{{ audio.audioInfo.author }}</div>
    </div>
    <div class="flex justify-between px-4 py-8">
      <div><Icon name="plus" /></div>
      <div>3:21</div>
      <div><Icon name="download" /></div>
    </div>
    <!-- 按钮 -->
    <div class="flex justify-between items-center bg-white px-12 rounded-6xl">
      <div><Icon name="prev" size="1.5rem" /></div>
      <div
        class="w-20 h-20 bg-blue-400 flex items-center justify-center rounded-1"
        @click="handleAudioButtonClick(audio.audioInfo)"
      >
        <icon
          :name="
            audio.audioInfo.name === audio.audioInfo.name && audio.playing
              ? 'pause'
              : 'play'
          "
          size="1.5rem"
          type="white"
        />
      </div>
      <div><Icon name="next" size="1.5rem" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../../components/icon/index.vue"
import { useAudioStore } from "../../store"
const audio = useAudioStore()

const handleAudioButtonClick = (info: any) => {
  if (!audio.playing) {
    audio.setAudioInfo(info)
  } else {
    if (audio.audioInfo.name !== info.name) {
      audio.setAudioInfo(info)
    } else {
      audio.pause()
    }
  }
}
</script>

<style scoped>
#img {
  animation: rotate 30s infinite linear;
}

#songs {
  @apply animate-duration-900;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
