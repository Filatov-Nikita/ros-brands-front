<template>
  <button class="filter-clear">
    <span class="filter-clear__label">Сбросить всё</span>
    <BaseIcon class="filter-clear__icon" color="#000000" name="close" />
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .filter-clear {
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      opacity: 0.6;
    }

    &__label {
      font-size: 16px;
      @apply tw-text-black;
    }

    &__icon {
      width: 12px;
      height: 12px;
    }
  }
</style>
