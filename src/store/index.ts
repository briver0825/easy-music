import { createPinia, defineStore } from "pinia"

export default createPinia()

export const useAudioStore = defineStore("audio", {
  state() {
    return {
      el: null as any,
      playing: false,
      audioInfo: {
        name: "",
        author: "",
        img: "",
        url: "",
      },
    }
  },
  actions: {
    setAudio(el: HTMLAudioElement | null) {
      this.el = el
    },
    setAudioInfo(info: any) {
      this.audioInfo = info
      this.el.src = `audio/${info.url}.mp3`
      this.play()
    },
    play() {
      console.log("播放啦 🙂")

      this.el?.play()
      this.playing = true
    },
    pause() {
      console.log("暂停啦🙅‍")

      this.el?.pause()
      this.playing = false
    },
    toggle() {
      if (this.playing) {
        this.pause()
      } else {
        this.play()
      }
    },
  },
})
