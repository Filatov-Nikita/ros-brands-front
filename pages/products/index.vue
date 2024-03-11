<template>
  <div>
    <div class="wrapper">
      <ProductCatalog />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ProductCatalog from '@/app-modules/product-catalog/index.vue';

  const mallStore = useMallStore();

  const title = mallStore.currentMall ?
    `Товары | ${mallStore.currentMall.name} - ${mallStore.currentMall.city}`
    : 'Товары';

  useSeoMeta({
    title,
  });
</script>
