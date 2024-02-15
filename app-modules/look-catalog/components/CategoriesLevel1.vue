<template>
  <nav class="top-level-cats">
    <button
      v-for="cat in lookCategories"
      :key="cat.id"
      class="nav-link top-level-cats__link"
      :class="{ 'nav-link--active': activeCatId === cat.id }"
      @click="$emit('select:category', cat)"
    >
      {{ cat.name }}
    </button>
  </nav>
</template>

<script setup lang="ts">
  import type { LookCategory } from '@/types/look-categories';

  defineProps<{
    lookCategories: LookCategory[],
    activeCatId?: number,
  }>();

  defineEmits<{
    (event: 'select:category', cat: LookCategory): void,
  }>();
</script>

<style scoped lang="scss">
  .top-level-cats {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;

    &__link {
      @apply tw-text-20 tw-leading-none;
    }
  }
</style>
