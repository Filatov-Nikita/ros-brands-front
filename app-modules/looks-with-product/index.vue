<template>
  <section class="looks-with-product" v-if="response && response.data.length > 0">
    <h2 class="h2 looks-with-product__h2">Образы с этим товаром</h2>
    <LookList :looks="response.data" hidePhrases />

    <div v-if="!pagination.isLast.value && meta" class="tw-mt-10 tw-flex tw-flex-col tw-items-center">
      <BaseButtonOutline
        class="tw-max-w-[250px] tw-w-full"
        @click="loadMore"
      >
        Показать ещё
      </BaseButtonOutline>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { LookListItem } from '@/types/looks';
  import type { PaginateResponse } from '@/types/shared';
  import { usePagination } from '@/composables/usePagination';
  import usePaginateQuery from '@/composables/usePaginateQuery';
  import LookList from '@/app-modules/look-catalog/components/Look/List.vue';

  const props = defineProps<{
    productId: number,
  }>();

  const page = ref(1);

  const { data: response, execute } = await useDataFetch<PaginateResponse<LookListItem[]>>(
    computed(() => `products/${props.productId}/show-looks`),
    {
      query: computed(() => ({ page: page.value })),
    }
  );

  const meta = computed(() => response.value?.meta ?? null);

  const pagination = usePagination(meta, page);

  const { loadMore } = usePaginateQuery(pagination, response, execute);
</script>

<style lang="scss">
  .looks-with-product {
    .look-list__item {
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

<style scoped lang="scss">
  .looks-with-product {
    &__h2 {
      margin-bottom: 20px;
    }
  }
</style>
