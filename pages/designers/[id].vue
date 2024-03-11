<template>
  <main class="page-paddings" v-if="designerDetailed">
    <div class="wrapper">
      <DesignerDetailed :designer-detailed="designerDetailed.data" />
      <LookWithDesigner
        class="one-designer-looks"
        :designer-id="designerDetailed.data.id"
        :declinatedName="designerDetailed.data.declinated_name"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
  import type { Response } from '@/types/shared';
  import DesignerDetailed from '@/app-modules/designer-detailed/index.vue';
  import LookWithDesigner from '@/app-modules/looks-with-designer/index.vue';
  import type { DesignerDetailed as TData } from '@/app-modules/designer-detailed/types';

  const mallStore = useMallStore();

  const url = computed(() => `designers/${useRoute().params.id}`);

  const { data: designerDetailed } = await useDataFetch<Response<TData>>(url);

  if(designerDetailed.value) {
    useBreadcrumbsStore().set([
      { label: 'Стилисты', to: '/designers' },
      { label: designerDetailed.value.data.name, to: `/designers/${useRoute().params.id}` },
    ]);

    const title = mallStore.currentMall ?
      `Стилист | ${ designerDetailed.value.data.name } | ${mallStore.currentMall.name} - ${mallStore.currentMall.city}`
      : `Стилист | ${ designerDetailed.value.data.name }`;

    useSeoMeta({
      title,
    });
  }
</script>

<style scoped lang="scss">
  .one-designer-looks {
    margin-top: 70px;

    @include md {
      margin-top: 40px;
    }
  }
</style>
