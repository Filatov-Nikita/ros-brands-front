<template>
  <main class="page-paddings">
    <div class="wrapper">
      <ClientOnly>
        <BaseBreadcrumbs class="tw-mb-5" />
      </ClientOnly>
      <ProductDetailed />
    </div>
  </main>
</template>

<script setup lang="ts">
  import ProductDetailed from '@/app-modules/product-details/index.vue';
</script>
