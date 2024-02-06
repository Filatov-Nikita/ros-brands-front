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
    border-radius: 10px;
    text-align: center;
    padding: 16px 20px;
    border: 1px solid theme('colors.black');
    @apply tw-text-black tw-font-medium tw-text-20 tw-leading-none;

    &:hover {
      background-color: #6A6A6A;
      @apply tw-text-white;
    }

    &:active {
      @apply tw-bg-black tw-text-white;
    }
  }
</style>
