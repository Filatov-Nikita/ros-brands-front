<template>
  <section class="looks-similar" v-if="response && response.data.length > 0">
    <h2 class="h2 looks-similar__h2">Другие образы</h2>
    <LookList :looks="response.data" />
  </section>
</template>

<script setup lang="ts">
  import type { LookListItem } from '@/types/looks';
  import type { Response } from '@/types/shared';
  import LookList from '@/app-modules/look-catalog/components/Look/List.vue';

  const props = defineProps<{
    lookId: number,
  }>();

  const { data: response } = await useDataFetch<Response<LookListItem[]>>(
    computed(() => `looks/${props.lookId}/similar`),
  );
</script>


<style scoped lang="scss">
  .looks-similar {
    &__h2 {
      margin-bottom: 20px;
    }
  }
</style>
