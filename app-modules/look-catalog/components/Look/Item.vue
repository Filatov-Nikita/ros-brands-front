<template>
  <LookItem :look="look">
    <template #actions>heart</template>
  </LookItem>
</template>

<script setup lang="ts">
  import type { LookListItem } from '@/types/looks';

  defineProps<{
    look: LookListItem,
  }>();
</script>
