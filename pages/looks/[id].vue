<template>
  <main class="page-paddings">
    <div class="wrapper">
      <LookDetailed :id="+$route.params.id" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import LookDetailed from '@/app-modules/look-detailed/index.vue';
</script>
