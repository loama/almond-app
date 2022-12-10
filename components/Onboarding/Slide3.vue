<template>
  <div class="mb-8 p-6 relative">
    <div class="font-bold text-lg">The Gynecologist Will See You Now</div>
    <div class="text-sn text-gray-500">Our top-tier care team is here to guide you on topics like these</div>

    <div class="bg-white mt-4 p-2 rounded-md shadow-md">
      <div class="font-bold text-green-600">PREGNANCY PLANNING</div>
      <div class="text-gray-500 text-sm">Ovulation tracking, lifestyle preparation, fertility planning</div>
    </div>

    <div class="bg-white mt-4 p-2 rounded-md shadow-md">
      <div class="font-bold text-green-600">BIRTH CONTROL COUNSELING</div>
      <div class="text-gray-500 text-sm">Personalized birth control, fast refills, changing your formulation</div>
    </div>

    <div class="bg-white mt-4 p-2 rounded-md shadow-md">
      <div class="font-bold text-green-600">INFECTIONS</div>
      <div class="text-gray-500 text-sm">UTIs, STIs, skin, and other infections</div>
    </div>

    <div class="bg-white mt-4 p-2 rounded-md shadow-md">
      <div class="font-bold text-green-600">GENERAL WELLNESS</div>
      <div class="text-gray-500 text-sm">Preventative care and general ObGyn wellness</div>
    </div>

    <div class="bg-white mt-4 p-2 rounded-md shadow-md">
      <div class="font-bold text-green-600">PERIOD MANAGEMENT</div>
      <div class="text-gray-500 text-sm">Painful periods, unusual bleeding, symptom management</div>
    </div>

    <div class="bg-white mb-4 mt-4 p-2 rounded-md shadow-md">
      <div class="font-bold text-green-600">SEXUAL HEALTH</div>
      <div class="text-gray-500 text-sm">Low libido, pain during sex</div>
    </div>

    <div class="right-6 text-md -bottom-8 absolute bg-black h-12 mt-4 pt-3 rounded-lg text-center text-white w-20 z-50"
      v-on:click="close()">
      Get in!
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$router.push({ query: {} })
    }
  }
}
</script>