<template>
  <div>
    <div id="navbar-top" class="border-zinc-200 bg-white border-b box-content fixed left-0 text-center top-0 w-screen">
      <img class="h-4 inline-block mt-4" src="~/assets/img/almond.png" alt="almond logo" />
    </div>

    <div id="content" class="bg-white box-content h-screen">content</div>

    <div id="navbar-bottom" class="border-zinc-200 bg-white border-t bottom-0 box-content fixed left-0 w-screen">
      navigation
    </div>
  </div>
</template>

<style lang="sass">
html, body
  overflow: hidden

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