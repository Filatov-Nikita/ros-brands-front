<template>
  <main class="page-paddings favorite-page">
    <div class="wrapper">
      <h1 class="favorite-page__h1">Избранное</h1>
      <FavoriteCatalog />
    </div>
  </main>
</template>

<script setup lang="ts">
  import FavoriteCatalog from '@/app-modules/favorite-catalog/index.vue';
</script>

<style scoped lang="scss">
  .favorite-page {
    &__h1 {
      font-size: 32px;
      line-height: normal;
      margin-bottom: 30px;
      @apply tw-font-bold;
    }
  }
</style>
