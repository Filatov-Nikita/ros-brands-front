<template>
  <aside>
    <Item
      v-for="(child, index) in category.children"
      :key="child.id"
      :category="child"
      :initial-showed="level2 ? child.id === level2 : index === 0"
      :level2="level2"
      :level3="level3"
      @change:category="changeCategory"
    />
  </aside>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import type { ProductCategory } from '@/types/product-categories';

  const props = defineProps<{
    category: ProductCategory,
    level2?: number,
    level3?: number,
  }>();

  const emits = defineEmits<{
    (event: 'change:category', level2: number, level3?: number): void,
  }>();

  function changeCategory(level2: number, level3?: number) {
    emits('change:category', level2, level3);
  }
</script>
