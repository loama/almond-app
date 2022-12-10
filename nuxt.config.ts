// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "almond gyn app",
      viewport: "width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no, viewport-fit=cover"
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  tailwindcss: {
    config: {
      content: [
        `./components/**/*.{vue,js,ts}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./Error.{js,ts,vue}`,
        `./error.{js,ts,vue}`
      ],
      // darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {
          colors: {
            'primary': '#E97964',
            'secondary': '#F3EBE2',
          }
        }
      },
      variants: {
        extend: {}
      },
      plugins: []
    }
  }
})
