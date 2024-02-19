<template>
  <main class="page-paddings">
    <div class="wrapper">
      <ClientOnly>
        <BaseBreadcrumbs class="tw-mb-5" />
      </ClientOnly>
      <ProductDetailed />
      <LookWithProduct class="tw-mt-24" :product-id="+$route.params.id" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import ProductDetailed from '@/app-modules/product-details/index.vue';
  import LookWithProduct from '@/app-modules/looks-with-product/index.vue';
</script>
