<template>
  <div class="layout-default">
    <HeaderPublic />
    <slot />
    <FooterPublic />
  </div>
</template>

<script setup lang="ts">
  import HeaderPublic from '@/app-modules/layouts/header-public/index.vue';
  import FooterPublic from '@/app-modules/layouts/footer-public/index.vue';
</script>

<style scoped lang="scss">
  .layout-default {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
</style>
