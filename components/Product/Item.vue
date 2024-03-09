<template>
  <NuxtLink class="product-item" :to="`/products/${product.id}`" :target="target">
    <div v-if="$slots.actions" class="product-item__actions">
      <slot name="actions" />
    </div>
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

  withDefaults(defineProps<{
    product: ProductOne,
    target?: '_blank' | '_self',
  }>(), { target: '_self' });
</script>

<style scoped lang="scss">
  .product-item {
    position: relative;

    &__img-wrap {
      position: relative;
      width: 100%;
      height: 347px;
      margin-bottom: 10px;

      @include sm {
        height: 240px;
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &__body {}

    &__name {
      flex-grow: 1;
      flex-basis: 100px;
      @apply tw-font-medium;

      @include sm {
        flex-basis: 100%;
      }
    }

    &__price {
      min-width: 80px;
      text-align: right;

      @include sm {
        text-align: left;
        order: -1;
      }
    }

    &__brand {
      color: #6F6F6F;
    }

    &__grid {
      display: flex;
      gap: 5px;
      align-items: flex-start;

      @include sm {
        flex-wrap: wrap;
      }
    }

    &__actions {
      position: absolute;
      top: 14px;
      right: 14px;
      z-index: 10;

      @include sm {
        top: 10px;
        right: 10px;
      }
    }
  }
</style>
