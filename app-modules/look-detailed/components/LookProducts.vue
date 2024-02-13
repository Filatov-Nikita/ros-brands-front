<template>
  <div class="look-products">
    <Item
      class="look-products__item"
      v-for="product in products"
      :key="product.id"
      :product="product"
      target="_blank"
    />
  </div>
</template>

<script setup lang="ts">
  import Item from '@/app-modules/product-catalog/components/Product/Item.vue';
  import type { ProductOne } from '@/app-modules/product-catalog/types/products';

  defineProps<{
    products: ProductOne[],
  }>();
</script>

<style scoped lang="scss">
  .look-products {
    display: flex;
    flex-wrap: wrap;
    margin-left: -50px;
    margin-top: -35px;

    &__item {
      margin-left: 50px;
      margin-top: 35px;
      width: calc(50% - 50px);
    }
  }
</style>
