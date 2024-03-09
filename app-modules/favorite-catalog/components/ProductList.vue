<template>
  <div class="favorite-list" v-if="response && response.data.length > 0">
    <ProductItem
      class="favorite-list__item"
      v-for="product in response.data"
      :key="product.id"
      :product="product"
      target="_blank"
    />
  </div>
  <Empty v-else />
</template>

<script setup lang="ts">
  import type { ProductOne } from '@/app-modules/product-catalog/types/products';
  import ProductItem from '@/app-modules/product-catalog/components/Product/Item.vue';
  import Empty from './Empty.vue';
  import type { Response } from '@/types/shared';

  const favStore = useFavoritesStore();

  const { data: response } = await useDataFetch<Response<ProductOne[]>>('favorites/products/resolve-ids', {
    method: 'POST',
    body: {
      ids: favStore.products.map(product => product.id),
    }
  });
</script>

<style lang="scss">
  .favorite-list {
    &__item {
      .product-item__img-wrap {
        height: 430px;

        @include sm {
          height: 240px;
        }
      }
    }
  }
</style>
