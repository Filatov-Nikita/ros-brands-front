<template>
  <div class="filter-control">
    <div class="filter-control__values">
      <FilterBadge
        v-for="brand in brandItems"
        :key="brand.id"
        @remove="$emit('remove:brand', brand.id)"
      >
        {{ brand.name }}
      </FilterBadge>
      <FilterBadge v-if="priceOrder" @remove="$emit('remove:priceOrder')">
        Цена {{ priceOrder > 0 ? 'по убыванию' : 'по возрастанию' }}
      </FilterBadge>
    </div>
    <FilterBtnClear class="filter-control__clear" @click="$emit('clear')"/>
  </div>
</template>

<script setup lang="ts">
  import type { BrandListItem } from '@/types/brands';

  defineProps<{
    brandItems: BrandListItem[],
    priceOrder?: 1 | 0 | -1,
  }>();

  defineEmits<{
    (event: 'remove:brand', brandId: number): void,
    (event: 'remove:priceOrder'): void,
    (event: 'clear'): void,
  }>();
</script>

<style scoped lang="scss">
  .filter-control {
    &__values {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 15px;
    }

    &__clear {
      margin-top: 15px;
    }
  }
</style>
