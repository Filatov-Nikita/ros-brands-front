<template>
  <main class="home-page">
    <div class="wrapper">
      <h1 class="main-title home-page__title">
        <span class="main-title__label">СТИЛЬНЫЕ ОБРАЗЫ</span>
        <span class="main-title__subtitle">от российских брендов</span>
      </h1>
      <PromoBanner class="home-page__banner" />
      <LookCatalog />
    </div>
  </main>
</template>

<script setup lang="ts">
  import LookCatalog from '@/app-modules/look-catalog/index.vue';
  import PromoBanner from '@/app-modules/promo-banner/index.vue';
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
    }

    &__subtitle {
      margin-top: 1px;
      display: block;
      text-align: right;
      font-size: 32px;
      line-height: normal;
    }
  }

  .home-page {
    padding-top: 40px;
    padding-bottom: 100px;

    &__title {
      margin-bottom: 30px;
    }

    &__banner {
      margin-bottom: 40px;
    }
  }
</style>
