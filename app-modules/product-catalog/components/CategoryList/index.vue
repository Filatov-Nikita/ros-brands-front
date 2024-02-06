<template>
  <aside>
    <Item
      v-for="(child, index) in category.children"
      :key="child.id"
      :category="child"
      :initial-showed="index === 0"
    />
  </aside>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import type { ProductCategory } from '@/types/product-categories';

  const props = defineProps<{
    category: ProductCategory,
  }>();
</script>
