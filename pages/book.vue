<template>
  <div>
    <div>
      <div class="bg-secondary border-zinc-200 text-zinc-700 border-b leading-8 px-4 py-2 text-sm w-full">
        Book an appointment
      </div>
      <div class="bg-zinc-100 border-zinc-200 border-b w-full">
        <div class="rounded-r-xl bg-green-600 h-2 w-20"></div>
      </div>
    </div>

    <div>
      <div class="font-bold mt-8 text-2xl text-center text-gray-800">What can we help you with?</div>
      <div class="opacity-60 text-center text-sm">Choose one option</div>
    </div>

    <div class="gap-2 grid grid-cols-3 mt-4 px-4">
      <button class="duration-300 p-2 rounded-md text-center transition" v-bind:class="{
        'bg-green-600 text-white': selected === option,
        'bg-gray-100': selected !== option
      }" v-for="(option, i) in options" v-bind:key="i" v-on:click="selected = option">
        <img class="h-12 inline" :src="'/icons/' + option.icon" alt="icon" />
        <div class="text-sm">{{ option.title }}</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: {},
      options: [
        {
          icon: 'birthControl.png',
          title: 'Birth Control'
        },
        {
          icon: 'pregnancyPlanning.png',
          title: 'Pregnancy Planning'
        },
        {
          icon: 'infection.png',
          title: 'Infection'
        },
        {
          icon: 'periodManagement.png',
          title: 'Period Management'
        },
        {
          icon: 'sexualHealth.png',
          title: 'Sexual Health'
        },
        {
          icon: 'yearlyExam.png',
          title: 'Yearly Exam'
        },
        {
          icon: 'prescription.png',
          title: 'Prescription'
        },
        {
          icon: 'stdCheck.png',
          title: 'STD Check'
        },
        {
          icon: 'somethingElse.png',
          title: 'Something Else'
        }
      ]
    }
  }
}
</script>