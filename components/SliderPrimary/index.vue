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
      <img class="slider-primary__img" :src="image.url" />
    </swiper-slide>
    <swiper-slide v-if="videoUrl" key="video">
      <video class="slider-primary__video" :src="videoUrl.url" autoplay playsinline muted loop />
    </swiper-slide>

    <button class="slider-primary-prev">
      <BaseIcon class="slider-primary-prev__icon" fit name="slider-prev" />
    </button>
    <button class="slider-primary-next">
      <BaseIcon class="slider-primary-next__icon" fit name="slider-next" />
    </button>
  </swiper>

  <swiper
    v-if="isDesktopOrTablet"
    class="slider-primary-mini tw-mt-3"
    :modules="[ Thumbs ]"
    :slidesPerView="4"
    :spaceBetween="6"
    @swiper="setMiniSwiper"
  >
    <swiper-slide v-for="image in images">
      <img class="slider-primary-mini__img" :src="image.url" />
    </swiper-slide>
    <swiper-slide v-if="videoUrl" key="video">
      <video class="slider-primary-mini__video" :src="videoUrl.url" muted />
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
  import { Thumbs, Pagination, Navigation } from 'swiper/modules';
  import type { Image } from '@/types/shared';

  const { isDesktopOrTablet } = useDevice();

  defineProps<{
    images: Image[],
    videoUrl?: Image | null,
  }>();

  const miniSwiper = ref<any>(null);

  function setMiniSwiper(swiper: any) {
    miniSwiper.value = swiper;
  }
</script>

<style lang="scss">
  .slider-primary {
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

    &__img, &__video {
      width: 100%;
      height: auto;
      max-height: 650px;
      object-fit: contain;

      @include sm {
        max-height: 475px;
      }
    }
  }

  .slider-primary-mini {
    height: 145px;

    @include lg {
      height: 130px;
    }

    .swiper-slide {
      cursor: pointer;
      border: 1px solid transparent;
    }

    .swiper-slide-thumb-active {
      border: 1px solid theme('colors.black');
    }

    &__img, &__video {
      width: 100%;
      height: 100%;
    }

    &__img {
      object-fit: cover;
    }

    &__video {
      object-fit: contain;
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
