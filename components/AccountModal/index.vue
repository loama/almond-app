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
  computed: {
    loggedIn() {
      return localStorage.getItem('loggedIn') !== null
    }
  }
}
</script>