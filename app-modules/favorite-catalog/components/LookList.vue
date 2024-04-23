<template>
  <div class="favorite-list" v-if="response && response.data.length > 0">
    <LookItem
      class="favorite-list__item"
      v-for="look in response.data"
      :key="look.id"
      :look="look"
    />
  </div>
  <Empty v-else />
</template>

<script setup lang="ts">
  import type { LookListItem } from '@/types/looks';
  import LookItem from '@/app-modules/look-catalog/components/Look/Item.vue';
  import Empty from './Empty.vue';
  import type { Response } from '@/types/shared';

  const favStore = useFavoritesStore();

  const { data: response } = await useDataFetch<Response<LookListItem[]>>('favorites/looks/resolve-ids', {
    method: 'POST',
    body: {
      ids: favStore.looks.map(look => look.id),
    }
  });
</script>

<style lang="scss">
  .favorite-list {
    &__item {
      .look-card__img {
        object-fit: cover;
        height: 430px;

        @include sm {
          height: 290px;
        }
      }
    }
  }
</style>
