import useFilter from './useFilter';
import type { PaginateResponse } from '@/types/shared';
import type { LookListItem } from '@/types/looks';
import { usePagination } from '@/composables/usePagination';
import usePaginateQuery from '@/composables/usePaginateQuery';

export default async function useLooks(lookFilter: ReturnType<typeof useFilter>) {
  const page = computed({
    get() {
      return lookFilter.filter.page ?? 1;
    },
    set(val) {
      lookFilter.filter.page = val;
    }
  });

  const query = computed(() => {
    return {
      page: lookFilter.filter.page,
      look_category_id: lookFilter.filter.look_category_id,
      'brand_ids[]': lookFilter.filter['brand_ids[]'],
      'color_ids[]': lookFilter.filter['color_ids[]'],
      'style_ids[]': lookFilter.filter['style_ids[]'],
      'designer_ids[]': lookFilter.filter['designer_ids[]'],
    }
  });

  const { data: looks, execute } = await useDataFetch<PaginateResponse<LookListItem[]>>('looks', {
    query,
    watch: false,
  });

  const meta = computed(() => looks.value?.meta ?? null)

  const pagination = usePagination(meta, page);

  const paginateQuery = usePaginateQuery(pagination, looks, execute);

  watch(() => JSON.stringify(query.value), () => execute());

  return {
    looks,
    meta,
    paginateQuery,
    pagination,
  }
}
