<template>
  <main class="page-paddings">
    <div class="wrapper">
      <DesignerDetailed :id="+$route.params.id" />
      <LookWithDesigner class="tw-mt-24" :designer-id="+$route.params.id" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import DesignerDetailed from '@/app-modules/designer-detailed/index.vue';
  import LookWithDesigner from '@/app-modules/looks-with-designer/index.vue';
</script>
