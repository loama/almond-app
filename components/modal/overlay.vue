<template>
  <div class="opacity-40 bg-black duration-300 fixed h-screen left-0 top-0 transition w-screen" v-bind:class="{
    'opacity-0 pointer-events-none': $route.query.modal === undefined,
    'opacity-70 pointer-events-auto': $route.query.modal !== undefined
  }" v-on:click="closeModal()"></div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$router.push({ query: {} })
    }
  }
}
</script>