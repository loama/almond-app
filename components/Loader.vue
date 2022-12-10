<template>
  <span class="loader" v-bind:style="{
    'border': '2px solid ' + color,
    'border-bottom-color': 'transparent'
  }"></span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#FFF'
    }
  }
}
</script>

<style lang="sass">
.loader
  width: 24px
  height: 24px
  border-radius: 50%
  display: inline-block
  box-sizing: border-box
  animation: rotation 1s linear infinite

@keyframes rotation
  0%
    transform: rotate(0deg)

  100%
    transform: rotate(360deg)
</style>