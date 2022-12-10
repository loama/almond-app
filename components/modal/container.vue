<template>
  <div
    class="modal-container min-h-12 rounded-t-2xl bottom-0 duration-300 fixed left-0 overflow-hidden transition w-screen z-50"
    v-bind:style="{
      'background': background
    }" v-bind:class="{
  'open': open
}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    open() {
      return this.$route.query.modal === this.name
    }
  },
  props: {
    background: {
      type: String,
      default: 'white'
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
.modal-container
  padding-bottom: 0
  padding-bottom: env(safe-area-inset-bottom)
  transform: translate3d(0, 100%, 0)

  &.open
    transform: translate3d(0, 0, 0)
</style>