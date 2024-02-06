<template>
  <ProductItem :product="product" />
</template>

<script setup lang="ts">
  import type { ProductOne } from '../../types/products';

  defineProps<{
    product: ProductOne,
  }>();
</script>
