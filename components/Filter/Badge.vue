<template>
  <div class="filter-value">
    <span class="filter-value__label">
      <slot />
    </span>
    <button class="filter-value__close" @click="$emit('remove')">
      <BaseIcon class="filter-value__icon" name="close" />
    </button>
  </div>
</template>

<script setup lang="ts">
  defineEmits<{
    (event: 'remove'): void
  }>();
</script>

<style scoped lang="scss">
  .filter-value {
    border-radius: 5px;
    padding: 10px 12px;
    background-color: #edede9;
    display: flex;
    align-items: center;
    gap: 5px;

    &__label {
      font-size: 14px;
      @apply tw-text-black;
    }

    &__close {
      width: 20px;
      height: 20px;
      padding: 4px;
      color: #000000;

      &:hover {
        opacity: 0.6;
      }
    }

    &__icon {
      width: 12px;
      height: 12px;
    }
  }
</style>
