<template>
  <ModalContainer background="#F3EBE2" name="onboarding">
    <div id="onboarding-modal" class="h-full p-4">
      <swiper :modules="modules" :navigation="{ nextEl: '.slideNext-btn' }" :pagination="true" :slides-per-view="1"
        :space-between="0">
        <swiper-slide>
          <OnboardingSlide1 />
        </swiper-slide>

        <swiper-slide>
          <OnboardingSlide2 />
        </swiper-slide>

        <swiper-slide>
          <OnboardingSlide3 />
        </swiper-slide>
      </swiper>
    </div>
  </ModalContainer>
</template>

<script>
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation, Pagination]
    }
  },
  methods: {
    checkIfShouldClose() {
      console.log(swiper)
      if (this.$refs.onboardingSwiper.realIndex === 2) {
        this.$router.push({ query: { modal: null } })
      } else {
        this.$refs.onboardingSwiper.swiper.slideNext()
      }
    }
  },
  setup() {
    const swiper = useSwiper()

    return {
      swiper
    }
  }
}
</script>

<style lang="sass">
#onboarding-modal
  .swiper-pagination-bullet-active
    background: #E97964

  .swiper-button-prev
    display: none

  .swiper-slide
    height: 100%
</style>