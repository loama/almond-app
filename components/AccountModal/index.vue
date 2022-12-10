<template>
  <ModalContainer background="#F3EBE2" name="account">
    <div class="p-4">
      <AccountModalAuth v-if="!loggedIn" />
      <AccountModalProfile v-else />
    </div>
  </ModalContainer>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: null
    }
  },
  mounted() {
    this.loggedIn = localStorage.getItem('loggedIn')

    const self = this
    window.addEventListener('loggedIn-localstorage-changed', (event) => {
      self.loggedIn = localStorage.getItem('loggedIn')
    })
  }
}
</script>