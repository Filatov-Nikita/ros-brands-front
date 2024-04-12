<template>
  <main class="home-page">
    <div class="wrapper">
      <h1 class="main-title home-page__title">
        <span class="main-title__label">СТИЛЬНЫЕ ОБРАЗЫ</span>
        <span class="main-title__subtitle">от российских брендов</span>
      </h1>
    </div>
    <div class="wrapper promo-wrapper">
      <PromoBanner class="home-page__banner" />
    </div>
    <div class="wrapper">
      <LogoSlider class="home-page__logos" />
      <LookCatalog />
    </div>
  </main>
</template>

<script setup lang="ts">
  import LookCatalog from '@/app-modules/look-catalog/index.vue';
  import PromoBanner from '@/app-modules/promo-banner/index.vue';
  import LogoSlider from '@/app-modules/logo-slider/index.vue';

  const mallStore = useMallStore();

  const title = mallStore.currentMall ?
    `Образы | ${mallStore.currentMall.name} - ${mallStore.currentMall.city}`
    : 'Образы';

  useSeoMeta({
    title,
  });
</script>

<style scoped lang="scss">
  .main-title {
    max-width: 785px;
    letter-spacing: 0.02em;

    &__label {
      display: block;
      font-size: 64px;
      line-height: normal;
      text-transform: uppercase;
      @apply tw-font-extrabold;

      @include sm {
        font-size: 32px;
      }
    }

    &__subtitle {
      margin-top: 1px;
      display: block;
      text-align: right;
      font-size: 32px;
      line-height: normal;

      @include sm {
        font-size: 20px;
        text-align: left;
      }
    }
  }

  .home-page {
    padding-top: 40px;
    padding-bottom: 100px;

    @include sm {
      padding-top: 25px;
      padding-bottom: 80px;
    }

    &__title {
      margin-bottom: 30px;

      @include sm {
        margin-bottom: 20px;
      }
    }

    &__banner {
      margin-bottom: 40px;

      @include md {
        margin-bottom: 30px;
      }
    }

    &__logos {
      margin-bottom: 60px;

      @include md {
        margin-bottom: 40px;
      }
    }
  }

  .promo-wrapper {
    @include sm {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
  }
</style>
