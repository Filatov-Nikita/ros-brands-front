<template>
  <main class="page-paddings">
    <div class="wrapper">
      <DesignerList />
    </div>
  </main>
</template>

<script setup lang="ts">
  import DesignerList from '@/app-modules/designer-list/index.vue';

  const mallStore = useMallStore();

  const title = mallStore.currentMall ?
    `Стилисты | ${mallStore.currentMall.name} - ${mallStore.currentMall.city}`
    : 'Стилисты';

  useSeoMeta({
    title,
  });
</script>
