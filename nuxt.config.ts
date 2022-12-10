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
    configPath: 'tailwind.config.js'
  }
})
