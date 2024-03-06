<template>
  <div class="look-list-empty" v-if="looks.length === 0">
    <p>Нет подходящих образов</p>
  </div>
  <div v-else class="look-list">
    <Item
      class="look-list__item"
      v-for="look in looks"
      :key="look.id"
      :look="look"
    />
  </div>
</template>

<script setup lang="ts">
  import type { LookListItem } from '@/types/looks';
  import Item from './Item.vue';

  defineProps<{
    looks: LookListItem[],
  }>();
</script>


<style scoped lang="scss">
  .look-list {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--span) * -1);
    --col: 3;
    --span: 10px;

    @include lg {
      --col: 4;
    }

    @include md {
      --col: 6;
    }

    @include sm {
      --span: 5px;
    }

    &__item {
      margin: var(--span);
      width: calc(100% / 12 * var(--col) - var(--span) * 2);
    }
  }

  .look-list-empty {
    padding: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
  }
</style>
