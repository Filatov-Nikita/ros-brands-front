<template>
  <div class="designer-list" v-if="designers">
    <Item
      class="designer-list__item"
      v-for="designer in designers.data"
      :key="designer.id"
      :designer="designer"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Response } from '@/types/shared';
  import type { DesignerListItem } from './types';
  import Item from './components/Item.vue';

  const { data: designers } = await useDataFetch<Response<DesignerListItem[]>>('designers');
</script>

<style scoped lang="scss">
  .designer-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -98px;
    margin-top: -35px;

    &__item {
      margin-left: 98px;
      margin-top: 35px;
      width: calc(100% / 12 * 4 - 98px);
    }
  }
</style>
