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
    --span-t: 35px;
    --span-l: 98px;
    --col: 4;
    margin-left: calc(var(--span-l) * -1);
    margin-top: calc(var(--span-t) * -1);

    @include lg {
      --span-t: 40px;
      --span-l: 40px;
    }

    @include md {
      --col: 6;
      --span-t: 30px;
      --span-l: 30px;
    }

    @include sm {
      --col: 12;
      --span-t: 40px;
      --span-l: 16px;
    }

    &__item {
      margin-left: var(--span-l);
      margin-top: var(--span-t);
      width: calc(100% / 12 * var(--col) - var(--span-l));
    }
  }
</style>
