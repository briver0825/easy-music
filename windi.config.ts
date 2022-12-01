import { defineConfig } from "windicss/helpers"
import formsPlugin from "windicss/plugin/forms"

export default defineConfig({
  include: ["src/**/*.{vue,html,jsx,tsx}"],
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  theme: {
    extend: {
      colors: {
        "main-bg-color": "#e8eefb",
        "dark-bg-color": "#1e2462",
        "dark-audio-color": "#3663bf",
      },
    },
  },
  plugins: [formsPlugin],
})
