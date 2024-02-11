<template>
  <NuxtLink class="product-item" :to="`/products/${product.id}`">
    <div class="product-item__img-wrap">
      <img
        v-if="product.thumbnail"
        class="product-item__img"
        :width="product.thumbnail.width ?? 0"
        :height="product.thumbnail.height ?? 0"
        :src="product.thumbnail.url"
        loading="lazy"
      />
    </div>
    <div class="product-item__body">
      <div class="product-item__grid">
        <span class="product-item__name">{{ product.name }}</span>
        <span class="product-item__price">{{ $amount(product.price) }}</span>
      </div>
      <div class="product-item__brand">
        <span>{{ product.brand.name }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { ProductOne } from '@/app-modules/product-catalog/types/products';

  defineProps<{
    product: ProductOne,
  }>();
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
