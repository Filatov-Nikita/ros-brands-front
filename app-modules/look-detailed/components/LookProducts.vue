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

<style lang="scss">
    .look-products {
      &__item {
        .product-item__img-wrap {
          height: 387px;

          @include lg {
            height: 330px;
          }

          @include sm {
            height: 418px;
          }
        }
      }
    }
</style>

<style scoped lang="scss">
  .look-products {
    display: flex;
    flex-wrap: wrap;
    --span-l: 50px;
    --span-t: 35px;
    --col: 6;
    margin-left: calc(var(--span-l) * -1);
    margin-top: calc(var(--span-t) * -1);

    @include lg {
      --span-l: 30px;
      --span-t: 30px;
    }

    @include md {
      --col: 4;
    }

    @include sm {
      --col: 12;
      --span-l: 0px;
      max-width: 380px;
      margin-left: auto;
      margin-right: auto;
    }

    &__item {
      margin-left: var(--span-l);
      margin-top: var(--span-t);
      width: calc(100% / 12 * var(--col) - var(--span-l));
    }
  }
</style>
