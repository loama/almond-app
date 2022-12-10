<template>
  <div>
    <div class="bg-secondary border-zinc-200 text-zinc-700 border-b leading-8 px-4 py-2 text-sm w-full">
      Previous Appointments
    </div>

    <div class="px-4 py-4">
      <div class="font-bold text-xl">No Appointments</div>

      <div class="opacity-60 text-sm">Currently you don't have any appointments</div>

      <div class="text-center w-full">
        <NuxtLink class="bg-green-600 inline-block mt-8 px-3 py-2 rounded-md text-white" to="/book">Book an appointment
        </NuxtLink>
      </div>
    </div>
  </div>
</template>