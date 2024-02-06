<template>
  <button class="base-button" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
  withDefaults(defineProps<{
    type?: 'button' | 'submit',
  }>(), {
    type: 'button',
  });
</script>

<style scoped lang="scss">
  .base-button {
    border-radius: 5px;
    text-align: center;
    padding: 11px 15px;
    @apply tw-bg-black tw-text-white tw-font-medium;

    &:hover {
      background-color: #6A6A6A;
    }

    &:active {
      @apply tw-bg-black;
    }
  }
</style>
