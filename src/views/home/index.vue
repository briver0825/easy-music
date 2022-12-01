<template>
  <div>
    <home-title title="Recently Played"></home-title>
    <div class="flex-nowrap whitespace-nowrap overflow-x-auto scrollbar-hidden">
      <div v-for="(item, index) in misicList" :key="index" class="inline-block">
        <div class="w-30 h-30 mx-3 overflow-hidden rounded-xl relative">
          <img class="w-full" :src="item.img" />
          <div
            class="absolute left-1/2 top-1/2"
            @click="handleAudioButtonClick(item)"
          >
            <Icon
              :name="
                audio.audioInfo.name === item.name && audio.playing
                  ? 'pause'
                  : 'play'
              "
              class="bg-white w-10 h-10 flex items-center justify-center rounded-1"
              style="transform: translate(-50%, -50%)"
              type="blue"
            />
          </div>
        </div>
        <div class="pl-6 p-1 w-30">
          <div class="whitespace-nowrap overflow-ellipsis overflow-hidden">
            {{ item.name }}
          </div>
          <div
            class="text-gray-400 text-xs whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            {{ item.author }}
          </div>
        </div>
      </div>
    </div>

    <home-title title="Popular of this week"></home-title>

    <div class="relative h-50">
      <div
        class="bg-blue-400 absolute w-full p-6 h-50 rounded-lg dark:from-dark-audio-color dark:to-blue-400 dark:bg-gradient-to-r"
      >
        <!-- 头像 -->
        <div class="flex items-center text-white">
          <div class="pr-4">
            <img
              class="w-20 rounded"
              src="https://p2.music.126.net/D5gCZTKvskVjCrhm80y3jg==/231996953481910.jpg"
            />
          </div>
          <div>
            <div>We found love</div>
            <div class="text-sm py-1">Banner</div>
            <div class="text-xs">3.21</div>
          </div>
        </div>
        <!-- 底部的 -->
        <div
          class="bg-light-100 bg-opacity-35 py-7 px-6 text-white rounded-lg mt-5 flex justify-between"
        >
          <div
            class="flex items-center"
            @click="handleAudioButtonClick(misicList[0])"
          >
            <Icon
              :name="
                audio.audioInfo.name === misicList[0].name && audio.playing
                  ? 'pause'
                  : 'play'
              "
              button
              type="blue"
            />
            <div class="text-xs pl-2">210</div>
          </div>
          <div class="flex items-center">
            <Icon name="love" button type="red" />
            <div class="text-xs pl-2">1.2k</div>
          </div>
          <div class="flex items-center">
            <Icon name="download" button type="green" />
            <div class="text-xs pl-2">210</div>
          </div>
          <div class="flex items-center">
            <Icon name="share" button type="yellow" />
            <div class="text-xs pl-2">210</div>
          </div>
        </div>
      </div>
    </div>
    <home-title title="Top Played"></home-title>

    <div
      class="flex justify-between items-center mb-3"
      data-aos="fade-right"
      v-for="(item, index) in misicList"
      :key="index"
    >
      <div class="flex items-center" @click="handleAudioButtonClick(item)">
        <Icon
          class="w-12 h-12 flex items-center justify-center border border-light-200 rounded-md mr-2 bg-blue-100"
          type="blue"
          :name="
            audio.audioInfo.name === item.name && audio.playing
              ? 'pause'
              : 'play'
          "
        />
        <div>
          <div class="text-sm font-bold">{{ item.name }}</div>
          <div class="text-xs">{{ item.author }}</div>
        </div>
      </div>
      <div class="flex items-center">
        <div class="pr-5 text-sm font-bold">3.21</div>
        <Icon name="love" type="red" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeTitle from "./components/home-title/index.vue"
import Icon from "../../components/icon/index.vue"
import { useAudioStore } from "../../store"

const audio = useAudioStore()

const misicList = [
  {
    name: "Phoenix",
    author: "Cailin Russo / Chrissy Costanza",
    img: "http://p2.music.126.net/1tZtqGjkGX_gzlmE375oUg==/109951164419356768.jpg",
    url: "8",
  },
  {
    name: "RISE",
    author: "The Glitch Mob / Mako / The Word Alive",
    img: "http://p1.music.126.net/XLulJwVbfowNQhATCt809g==/109951163573081067.jpg",
    url: "7",
  },
  {
    name: "Legends Never Die",
    author: "Against the Current",
    img: "http://p1.music.126.net/2aTrg-Zz72Ms6ySsjPcKCg==/109951163918904060.jpg",
    url: "6",
  },
  {
    name: "真的汉子",
    author: "林子祥",
    img: "	https://p1.music.126.net/NIQOMgqgxpHvFcMWc78peQ==/109951163624549722.jpg",
    url: "5",
  },
  {
    name: "Perfect",
    author: "Ed Sheeran",
    img: "	https://p2.music.126.net/99_i681E6ZE74t_xue6PUA==/109951166151204092.jpg",
    url: "1",
  },
  {
    name: "STAY",
    author: "The Kid LAROI / Justin Bieber",
    img: "https://p1.music.126.net/e5cvcdgeosDKTDrkTfZXnQ==/109951166155165682.jpg",
    url: "2",
  },
  {
    name: "Love Is Gone (Acoustic)",
    author: "SLANDER / Dylan Matthew",
    img: "	https://p2.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg",
    url: "3",
  },
  {
    name: "Lot To Learn",
    author: "Luke Christopher",
    img: "https://p1.music.126.net/fRdoSIsWoXhM1sQceQwwVQ==/1387583681649679.jpg",
    url: "4",
  },
]

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
