<template>
  <div id="navbar-bottom" class="border-zinc-200 bg-white border-t bottom-0 box-content fixed left-0 w-screen">
    <div class="grid grid-cols-4 relative z-10">
      <NuxtLink class="pt-3" to="/">
        <img class="block h-5 mx-auto" src="~/assets/icons/house-light.svg">
        <div class="pt-1 text-center text-xs w-full">
          Home
        </div>
      </NuxtLink>

      <NuxtLink class="pt-3" to="/book">
        <img class="block h-5 mx-auto" src="~/assets/icons/calendar-circle-plus-light.svg">
        <div class="pt-1 text-center text-xs w-full">
          Book
        </div>
      </NuxtLink>

      <NuxtLink class="pt-3" to="/history">
        <img class="block h-5 mx-auto" src="~/assets/icons/clock-rotate-left-light.svg">
        <div class="pt-1 text-center text-xs w-full">
          History
        </div>
      </NuxtLink>

      <div class="opacity-40 pt-3" v-on:click="$router.push({ query: { modal: 'account' } })">
        <img class="block h-5 mx-auto" src="~/assets/icons/user-large-light.svg">
        <div class="pt-1 text-center text-xs w-full">
          Account
        </div>
      </div>
    </div>

    <div id="indicator" class="top-1.5 absolute h-12 rounded-full w-20"
      v-bind:class="[$route.path.replace('/', '').split('/')[0]]"></div>
  </div>
</template>

<style lang="sass" scoped>
a
  @apply opacity-40 transition duration-300
  
.router-link-active
  @apply opacity-80

#indicator
  background: #F3EBE2
  transform: translate3d(calc(12.5vw - 40px), 0, 0)
  @apply duration-300 transition

  &.book
    transform: translate3d(calc(37.5vw - 40px), 0, 0)

  &.history
    transform: translate3d(calc(62.5vw - 40px), 0, 0)
</style>