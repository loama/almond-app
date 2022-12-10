<template>
  <div class="mb-20 p-4">
    <div class="font-semibold text-2xl">Welcome to almond!</div>
    <div class="opacity-60">Continue with your email or your google account</div>

    <div class="bg-white border border-gray-400 font-semibold mt-10 p-4 rounded-md text-center">
      <img class="inline mr-2 -mt-0.5" src="~/assets/icons/Google_logo.svg" />
      Log in with Google
    </div>

    <div class="relative">
      <hr class="top-1 absolute border-gray-300 border-t mt-12 w-full" />
      <div class="or-separator top-10 absolute text-center w-12">or</div>
    </div>

    <div class="mt-20">
      <input class="border border-gray-300 h-12 px-2 w-full" type="text" placeholder="you@email.com">
    </div>
  </div>
</template>

<style lang="sass" scoped>
.or-separator
  background: #F3EBE2
  left: calc(50% - 24px)
</style>