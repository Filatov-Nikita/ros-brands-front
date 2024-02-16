<template>
  <nav class="fav-types">
    <button
      class="nav-link fav-types__link"
      :class="{ 'nav-link--active': tab === 'look' }"
      @click="$emit('update:tab', 'look')"
    >
      Образы
    </button>
    <button
      class="nav-link fav-types__link"
      :class="{ 'nav-link--active': tab === 'product' }"
      @click="$emit('update:tab', 'product')"
    >
      Товары
    </button>
  </nav>
</template>

<script setup lang="ts">
  import type { Types } from '@/stores/favorites';

  defineProps<{
    tab: Types,
  }>();

  defineEmits<{
    (event: 'update:tab', tab: Types): void,
  }>();
</script>

<style scoped lang="scss">
  .fav-types {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;

    &__link {
      font-size: 20px;
      line-height: normal;
    }
  }
</style>
