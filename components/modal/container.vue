<template>
  <div
    class="modal-container min-h-12 rounded-t-2xl bottom-0 duration-300 fixed left-0 overflow-hidden transition w-screen z-50"
    v-bind:style="{
      'background': background,
      'transform': `translate3d(0, ${translateY}, 0)`
    }">
    <slot></slot>
  </div>
</template>

<script>
import { Keyboard } from '@capacitor/keyboard'

export default {
  computed: {
    translateY() {
      if (this.$route.query.modal === this.name) { // open
        return this.keyboardHeight.toString() + 'px'
      } else { // closed
        return '100%'
      }
    }
  },
  data() {
    return {
      keyboardHeight: 0,
    }
  },
  mounted() {
    const self = this
    Keyboard.setAccessoryBarVisible({ isVisible: true })

    Keyboard.addListener('keyboardWillShow', info => {
      self.keyboardHeight = '-' + info.keyboardHeight.toString()
    })

    Keyboard.addListener('keyboardWillHide', info => {
      self.keyboardHeight = '0'
    })
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
</style>