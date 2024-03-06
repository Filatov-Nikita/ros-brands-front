<template>
  <div class="input-area">
    <slot name="top" />
    <div class="input-area__scroll-zone">
      <slot />
    </div>
    <slot name="bottom" />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .input-area {
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 15px 20px 24px;
    @apply tw-bg-white;

    &__scroll-zone {
      overflow-x: hidden;
      max-height: 275px;
    }
  }
</style>
