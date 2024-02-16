<template>
  <button class="action-btn-outline" @click="onClick">
    <span>Избранное</span>
    <BaseIcon class="action-btn-outline__icon" :name="isActive ? 'heart-active' : 'heart'" />
  </button>
</template>

<script setup lang="ts">
  import type { Types } from '@/stores/favorites';
  import useFavToggle from '../composables/useFavToggle';

  const props = defineProps<{
    type: Types,
    id: number,
  }>();

  const { type, id } = toRefs(props);

  const { toggle, isActive } = useFavToggle(useFavoritesStore(), type, id);

  function onClick(e: Event) {
    e.preventDefault();
    toggle();
  }
</script>

<style scoped lang="scss">
  .favorite-heart {
    width: 32px;
    height: 32px;
    padding: 4px;
  }
</style>
