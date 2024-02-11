<template>
  <swiper
    class="slider-primary"
    loop
    :modules="[ Thumbs, Pagination, Navigation ]"
    :thumbs="{ swiper: miniSwiper }"
    :slidesPerView="1"
    :spaceBetween="20"
    :navigation="{
      prevEl: '.slider-primary-prev',
      nextEl: '.slider-primary-next',
    }"
    :pagination="{
      clickable: true,
    }"
  >
    <swiper-slide v-for="image in images">
      <img :src="image.url" />
    </swiper-slide>

    <button class="slider-primary-prev">
      <BaseIcon class="slider-primary-prev__icon" fit name="slider-prev" />
    </button>
    <button class="slider-primary-next">
      <BaseIcon class="slider-primary-next__icon" fit name="slider-next" />
    </button>
  </swiper>

  <swiper
    class="slider-primary-mini tw-mt-3"
    :modules="[ Thumbs ]"
    :slidesPerView="4"
    :spaceBetween="6"
    @swiper="setMiniSwiper"
  >
    <swiper-slide v-for="image in images">
      <img :src="image.url" />
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
  import { Thumbs, Pagination, Navigation } from 'swiper/modules';
  import type { Image } from '@/types/shared';

  defineProps<{
    images: Image[],
  }>();

  const miniSwiper = ref<any>(null);

  function setMiniSwiper(swiper: any) {
    miniSwiper.value = swiper;
  }
</script>

<style lang="scss">
  .slider-primary {
    height: 500px;

    .swiper-pagination-bullets {
      bottom: 10px;
    }

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background-color: #F0F0F0;
      opacity: 1;
    }

    .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 0 2px;
    }

    .swiper-pagination-bullet-active {
      background-color: #000000;
    }
  }

  .slider-primary-mini {
    height: 145px;

    .swiper-slide {
      cursor: pointer;
      border: 1px solid transparent;
    }

    .swiper-slide-thumb-active {
      border: 1px solid theme('colors.black');
    }
  }

  .slider-primary-prev, .slider-primary-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 24px;
    height: 24px;
    color: #676767;

    &.swiper-button-disabled {
      opacity: 0.6;
    }
  }

  .slider-primary-prev {
    left: 15px;
  }

  .slider-primary-next {
    right: 15px;
  }
</style>