<template>
  <main class="page-paddings">
    <div class="wrapper">
      <LookDetailed :id="+$route.params.id" />
      <LooksSimilar class="one-look-similar" :look-id="+$route.params.id" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import LookDetailed from '@/app-modules/look-detailed/index.vue';
  import LooksSimilar from '@/app-modules/looks-similar/index.vue';
</script>

<style scoped lang="scss">
  .one-look-similar {
    margin-top: 100px;

    @include sm {
      margin-top: 50px;
    }
  }
</style>
