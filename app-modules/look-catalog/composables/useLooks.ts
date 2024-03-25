import useFilter from './useFilter';
import type { PaginateResponse } from '@/types/shared';
import type { LookListItem } from '@/types/looks';
import { usePagination } from '@/composables/usePagination';
import usePaginateQuery from '@/composables/usePaginateQuery';

export default async function useLooks(lookFilter: ReturnType<typeof useFilter>) {

  const query = computed(() => {
    return {
      look_category_id: lookFilter.filter.look_category_id,
      'brand_ids[]': lookFilter.filter['brand_ids[]'],
      'color_ids[]': lookFilter.filter['color_ids[]'],
      'style_ids[]': lookFilter.filter['style_ids[]'],
      'designer_ids[]': lookFilter.filter['designer_ids[]'],
    }
  });

  const queryPag = computed(() => ({ ...query.value, page: lookFilter.page.value }));

  const { data: looks, execute } = await useDataFetch<PaginateResponse<LookListItem[]>>('looks', {
    query: queryPag,
    watch: false,
  });

  const meta = computed(() => looks.value?.meta ?? null)

  const pagination = usePagination(meta, lookFilter.page);

  const paginateQuery = usePaginateQuery(pagination, looks, execute);

  watch(query, () => {
    lookFilter.page.value = 1;
  });

  watch(() => JSON.stringify(queryPag.value), () => execute());

  return {
    looks,
    meta,
    paginateQuery,
    pagination,
  }
}
