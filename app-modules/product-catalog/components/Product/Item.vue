<template>
  <ProductItem :product="product" :target="target">
    <template #actions>
      <ClientOnly>
        <FavoriteHeart type="product" :id="product.id" />
      </ClientOnly>
    </template>
  </ProductItem>
</template>

<script setup lang="ts">
  import type { ProductOne } from '../../types/products';
  import { FavoriteHeart } from '@/app-modules/favorite-add';

  withDefaults(defineProps<{
    product: ProductOne,
    target?: '_blank' | '_self',
  }>(), { target: '_self' });
</script>
