<template>
  <ProductItem :product="product" :target="target" />
</template>

<script setup lang="ts">
  import type { ProductOne } from '../../types/products';

  withDefaults(defineProps<{
    product: ProductOne,
    target?: '_blank' | '_self',
  }>(), { target: '_self' });
</script>
