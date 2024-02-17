<template>
  <ProductItem :product="product" :target="target">
    <template #actions>
      <ClientOnly>
        <FavoriteHeart type="product" :id="product.id" />
      </ClientOnly>
      <ProductPromotionPreview
        class="tw-mt-[6px]"
        v-if="product.brand.promotions.length > 0"
        :title="product.brand.promotions[0].title"
        :text="product.brand.promotions[0].description"
      />
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
