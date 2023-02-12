<template>
  <div class="bg-secondary flex h-screen items-center justify-center w-screen">
    <img class="top-6 left-6 sm:block absolute h-6 hidden" src="/img/almond_logo.png" />

    <div id="booking-form-container-card" class="bg-white p-4 rounded-sm">
      <img class="sm:hidden h-6" src="/img/almond_logo.png" />
      <NuxtPage />
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: 'book'
})
</script>

<style lang="sass">
#booking-form-container-card
  box-shadow: rgb(40 39 39 / 3%) 0px 2px 3.84px
  max-height: 100vh
  max-width: 100vw
  width: 562px
  @apply h-screen

@media (min-width: 576px)
  #booking-form-container-card
    height: 640px
</style>