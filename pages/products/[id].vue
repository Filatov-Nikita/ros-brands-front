<template>
  <main class="page-paddings">
    <div class="wrapper">
      <ClientOnly>
        <BaseBreadcrumbs class="tw-mb-5" />
      </ClientOnly>
      <ProductDetailed />
      <LookWithProduct class="one-look-product" :product-id="+$route.params.id" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import ProductDetailed from '@/app-modules/product-details/index.vue';
  import LookWithProduct from '@/app-modules/looks-with-product/index.vue';
</script>


<style scoped lang="scss">
  .one-look-product {
    margin-top: 100px;

    @include sm {
      margin-top: 76px;
    }
  }
</style>
