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
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
html, body
  overflow: hidden

*
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

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