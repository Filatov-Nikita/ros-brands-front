<template>
  <LookItem :look="look">
    <template #actions>
      <ClientOnly>
        <FavoriteHeart :id="look.id" type="look" />
      </ClientOnly>
    </template>
  </LookItem>
</template>

<script setup lang="ts">
  import type { LookListItem } from '@/types/looks';
  import { FavoriteHeart } from '@/app-modules/favorite-add';

  defineProps<{
    look: LookListItem,
  }>();
</script>
