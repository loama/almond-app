<template>
  <div>
    <NavigationTop />

    <div id="content" class="bg-white box-content h-screen">
      <RouterView />
    </div>

    <NavigationBottom />

    <ModalOverlay />

    <!-- Modals -->
    <AccountModal />
    <OnboardingModal />
  </div>
</template>

<script>
import { StatusBar } from '@capacitor/status-bar'

export default {
  mounted() {
    this.$router.push({ query: { modal: 'onboarding' } })

    const self = this
    window.addEventListener('statusTap', function () {
      self.$router.push({ query: {} })
    })
  }
}
</script>

<style lang="sass">
html, body
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
  overflow: hidden

*
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

@font-face
  font-family: "PlayfairDisplay"
  src: local("./PlayfairDisplay-VariableFont_wght.ttf"), format("ttf")

.font-Playfair
  font-family: "PlayfairDisplay"

$navbar-top-height: 56px
$navbar-bottom-height: 56px

#navbar-top
  height: $navbar-top-height
  padding-top: 0
  padding-top: env(safe-area-inset-top)

#navbar-bottom
  height: $navbar-bottom-height
  padding-bottom: 0
  padding-bottom: env(safe-area-inset-bottom)

#content
  padding-bottom: $navbar-bottom-height
  padding-bottom: calc($navbar-bottom-height + env(safe-area-inset-bottom))
  padding-top: $navbar-top-height
  padding-top: calc($navbar-top-height + env(safe-area-inset-top))
</style>