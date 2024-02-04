<template>
  <NuxtLink class="product-item" to="#">
    <div class="product-item__img-wrap">
      <img class="product-item__img" src="/images/product-card.jpg" loading="lazy" />
    </div>
    <div class="product-item__body">
      <div class="product-item__grid">
        <span class="product-item__name">Ботильоны</span>
        <span class="product-item__price">105 800 ₽</span>
      </div>
      <div class="product-item__brand">
        <span>Econica</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .product-item {
    &__img-wrap {
      position: relative;
      width: 100%;
      height: 347px;
      margin-bottom: 10px;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &__body {
      margin-bottom: 5px;
    }

    &__name {
      flex-grow: 1;
      min-width: 100px;
      @apply tw-font-medium;
    }

    &__brand {
      color: #6F6F6F;
    }

    &__grid {
      display: flex;
      gap: 10px;
      align-items: flex-start;
    }
  }
</style>
