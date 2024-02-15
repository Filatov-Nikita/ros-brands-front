<template>
  <Swiper
    v-if="banners"
    class="promo-banner-swiper"
    loop
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :slides-per-view="1"
    :space-between="20"
    :modules="[ Autoplay, Navigation ]"
    :navigation="{
      prevEl: '.banner-swiper-prev',
      nextEl: '.banner-swiper-next',
    }"
  >
    <SwiperSlide
      class="promo-banner-swiper__slide"
      v-for="banner in banners.data"
      :key="banner.id"
    >
      <a v-if="banner.href" class="promo-banner-swiper__href" :href="banner.href" target="_blank">
        <img
          v-if="banner.image"
          class="promo-banner-swiper__img"
          :width="banner.image.width ?? 0"
          :height="banner.image.height ?? 0"
          :src="banner.image.url"
        />
      </a>
      <img
        v-else-if="banner.image"
        class="promo-banner-swiper__img"
        :width="banner.image.width ?? 0"
        :height="banner.image.height ?? 0"
        :src="banner.image.url"
      />
    </SwiperSlide>

    <button class="banner-swiper-prev">
      <BaseIcon fit name="banner-prev" />
    </button>
    <button class="banner-swiper-next">
      <BaseIcon fit name="banner-next" />
    </button>
  </Swiper>
</template>

<script setup lang="ts">
  import type { Response } from '@/types/shared';
  import type { BannerOne } from './types';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  const { data: banners } = await useDataFetch<Response<BannerOne[]>>('/banners');
</script>

<style lang="scss">
  .promo-banner-swiper {
    height: 350px;

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__href {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .banner-swiper-prev, .banner-swiper-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 42px;
    height: 42px;
    color: #C2C2C2;

    &.swiper-button-disabled {
      opacity: 0.6;
    }
  }

  .banner-swiper-prev {
    left: 15px;
  }

  .banner-swiper-next {
    right: 15px;
  }
</style>
