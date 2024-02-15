<template>
  <div class="filter-selected">
    <FilterBadge
      v-for="brand in currentItems.brands.value"
      :key="`brand.${brand.id}`"
      @click="$emit('remove:brand', brand.id)"
    >
      {{ brand.name }}
    </FilterBadge>
    <FilterBadge
      v-for="color in currentItems.colors.value"
      :key="`color.${color.id}`"
      @click="$emit('remove:color', color.id)"
    >
      {{ color.name }}
    </FilterBadge>
    <FilterBadge
      v-for="style in currentItems.styles.value"
      :key="`style.${style.id}`"
      @click="$emit('remove:style', style.id)"
    >
      {{ style.name }}
    </FilterBadge>
    <FilterBadge
      v-for="designer in currentItems.designers.value"
      :key="`designer.${designer.id}`"
      @click="$emit('remove:designer', designer.id)"
    >
      {{ designer.name }}
    </FilterBadge>
  </div>
</template>

<script setup lang="ts">
  import useCurrentFilterItems from '../composables/useCurrentFilterItems';

  defineProps<{
    currentItems: ReturnType<typeof useCurrentFilterItems>,
  }>();

  defineEmits<{
    (event: 'remove:brand', id: number): void,
    (event: 'remove:designer', id: number): void,
    (event: 'remove:style', id: number): void,
    (event: 'remove:color', id: number): void,
  }>();
</script>

<style scoped lang="scss">
  .filter-selected {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
</style>
