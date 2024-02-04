<template>
  <div class="product-list">
    <Item class="product-list__item" />
    <Item class="product-list__item" />
    <Item class="product-list__item" />
    <Item class="product-list__item" />
    <Item class="product-list__item" />
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
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
</style>
