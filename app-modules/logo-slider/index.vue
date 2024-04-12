<template>
  <div class="logo-wrap">
    <Swiper
      class="logo-swiper"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      free-mode
      slides-per-group-auto
      :slides-per-group="1"
      :slides-per-view="1"
      :initial-slide="0"
      centered-slides
      center-insufficient-slides
      centered-slides-bounds
      :space-between="30"
      :modules="[ Autoplay, Navigation, FreeMode ]"
      :navigation="{
        prevEl: '.logo-swiper-prev',
        nextEl: '.logo-swiper-next',
      }"
      :breakpoints="{
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 50,
          slidesPerView: 5,
          slidesPerGroup: 2,
        },
      }"
    >
      <SwiperSlide
        class="logo-swiper__slide"
        v-for="logo in data"
        :key="logo.img.src"
      >
        <img class="logo-swiper__img" :src="logo.img.src" :width="logo.img.width" :height="logo.img.height" :alt="logo.img.alt" loading="lazy">
      </SwiperSlide>
    </Swiper>
    <button class="logo-swiper-prev">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#F0F0F0"/>
        <path d="M18.7055 21.2946C19.0948 20.9053 19.0952 20.2743 18.7063 19.8846L14.8302 16L18.7063 12.1154C19.0952 11.7257 19.0948 11.0947 18.7055 10.7054C18.316 10.3158 17.6843 10.3158 17.2948 10.7054L12.0002 16L17.2948 21.2946C17.6843 21.6842 18.316 21.6842 18.7055 21.2946Z" fill="#929292"/>
      </svg>
    </button>
    <button class="logo-swiper-next">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" transform="matrix(-1 0 0 1 32 0)" fill="#F0F0F0"/>
        <path d="M13.2947 21.2946C12.9054 20.9053 12.9051 20.2743 13.2939 19.8846L17.1701 16L13.2939 12.1154C12.9051 11.7257 12.9054 11.0947 13.2947 10.7054C13.6843 10.3158 14.3159 10.3158 14.7055 10.7054L20.0001 16L14.7055 21.2946C14.3159 21.6842 13.6843 21.6842 13.2947 21.2946Z" fill="#929292"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { Autoplay, Navigation, FreeMode } from 'swiper/modules';
  import data from './data';
</script>


<style scoped lang="scss">
  .logo-wrap {
    padding-left: 57px;
    padding-right: 57px;
    position: relative;

    @include sm {
      padding-left: 42px;
      padding-right: 42px;
    }
  }

  .logo-swiper {
    height: 92px;
    user-select: none;

    &__slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__img {
      width: auto;
    }
  }

  .logo-swiper-prev, .logo-swiper-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 32px;
    height: 32px;
    color: #C2C2C2;

    &.swiper-button-disabled {
      opacity: 0.6;
    }
  }

  .logo-swiper-prev {
    left: 0px;
  }

  .logo-swiper-next {
    right: 0px;
  }
</style>
