<template>
  <div>
    <div class="product-toolbar">
      <SelectsBrands class="product-toolbar__item" />
      <SelectsOrderByPrice class="product-toolbar__item" />
    </div>
    <div class="product-list" v-if="products">
      <Item
        class="product-list__item"
        v-for="product in products.data"
        :key="product.id"
        :product="product"
      />
    </div>
    <BaseButtonOutline>
      Показать ещё
    </BaseButtonOutline>
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import type { ProductOne } from '../../types/products';
  import { filterKey } from '../../symbols';

  const filter = inject(filterKey);

  if(!filter) throw new Error();

  const { data: products } = await useDataFetch<{ data: ProductOne[] }>('products');
</script>

<style scoped lang="scss">
  .product-list {
    display: flex;
    flex-wrap: wrap;
    margin: -15px -10px;

    &__item {
      width: calc(100% / 12 * 3 - 20px);
      margin: 15px 10px;
    }
  }

  .product-toolbar {
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 30px;

    &__item {
      flex-basis: 220px;
    }
  }
</style>
