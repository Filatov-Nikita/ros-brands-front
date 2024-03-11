<template>
  <BaseNotify />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import useDataFetch from '@/composables/useDataFetch';
  import type { MallOne } from '@/types/malls';
  import type { Response } from '@/types/shared';

  const { data: malls } = await useDataFetch<Response<MallOne[]>>('malls');

  const mallStore = useMallStore();
  mallStore.setMalls(malls.value?.data ?? []);

  if(!mallStore.currentMall && mallStore.sortedMalls.length > 0) {
    mallStore.setMallId(mallStore.sortedMalls[0].id);
  }
</script>
