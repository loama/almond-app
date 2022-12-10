<template>
  <div>
    <div>
      <div>
        <img class="h-20 inline" src="~/assets/img/avatar.png" />
        <span class="font-bold ml-2 text-xl">hello Georgina!</span>
      </div>
    </div>

    <div class="border-zinc-200 border-b mt-8">
      <div class="profile-nav-item">
        <span>Personal Info</span>
        <img src="~/assets/icons/chevron-right-light.svg" class="float-right h-4 inline mr-2 mt-3" />
      </div>

      <div class="profile-nav-item">
        <span>Medical Info</span>
        <img src="~/assets/icons/chevron-right-light.svg" class="float-right h-4 inline mr-2 mt-3" />
      </div>

      <div class="profile-nav-item">
        <span>Appointment Preferences</span>
        <img src="~/assets/icons/chevron-right-light.svg" class="float-right h-4 inline mr-2 mt-3" />
      </div>

      <div class="profile-nav-item">
        <span>Payment Methods</span>
        <img src="~/assets/icons/chevron-right-light.svg" class="float-right h-4 inline mr-2 mt-3" />
      </div>

      <div class="profile-nav-item">
        <span>Insurance Info</span>
        <img src="~/assets/icons/chevron-right-light.svg" class="float-right h-4 inline mr-2 mt-3" />
      </div>

    </div>

    <div class="text-center">
      <button class="border border-gray-300 mt-40 px-4 py-2 rounded-md text-red-500"
        v-on:click="logout()">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('loggedIn')
      window.dispatchEvent(new CustomEvent('loggedIn-localstorage-changed'))
    }
  }
}
</script>

<style lang="sass" scoped>
.profile-nav-item
  @apply border-zinc-200 border-t h-12 leading-10 pt-1
</style>