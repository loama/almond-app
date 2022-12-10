<template>
  <div id="auth-form" class="duration-300 mb-10 p-4 transition">
    <div class="font-semibold text-2xl">Welcome to almond!</div>
    <div class="opacity-60">Continue with your email or your google account</div>

    <div class="bg-white border border-gray-400 font-semibold mt-10 p-4 rounded-md text-center">
      <div v-if="!google.loggingIn" v-on:click="login('google')">
        <img class="inline mr-2 -mt-0.5" src="~/assets/icons/Google_logo.svg" />
        Log in with Google
      </div>
      <Loader class="-mb-0.5" color="black" v-else />
    </div>

    <div class="opacity-50 relative">
      <hr class="top-1 absolute border-gray-500 border-t mt-12 w-full" />
      <div class="or-separator top-10 absolute text-center w-12">or</div>
    </div>

    <div class="mt-24">
      <form v-on:submit.prevent="login('email')">
        <input class="focus:border-gray-500 border border-gray-300 h-12 outline-none px-2 w-full" type="text"
          placeholder="you@email.com" v-model="email.value">
        <button class="duration-300 h-12 mt-4 rounded-md transition w-full" type="submit" v-bind:class="{
          'bg-green-700 text-white pointer-events-auto': email.value.length > 3,
          'bg-gray-300 text-gray-600 pointer-events-none': email.value.length < 4
        }">
          <span v-if="!email.loggingIn">Login with email</span>
          <Loader class="mt-2" v-else />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      google: {
        loggingIn: false
      },
      email: {
        loggingIn: false,
        value: ''
      }
    }
  },
  methods: {
    login(method) {
      this[method].loggingIn = true

      const self = this
      setTimeout(() => {
        localStorage.setItem('loggedIn', true)
        window.dispatchEvent(new CustomEvent('loggedIn-localstorage-changed'))

        self[method].loggingIn = false
      }, 1000)
    }
  }
}
</script>

<style lang="sass" scoped>
.or-separator
  background: #F3EBE2
  left: calc(50% - 24px)
</style>