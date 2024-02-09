import { usePagination } from '@/composables/usePagination';
import type { ProductOne } from '../types/products';
import type { PaginateResponse } from '@/types/shared';
import type { ProductFilter } from '../types';

export default async function useProductList(filter: ProductFilter) {
  const page = ref(1);

  const query = computed(() => {
    const brand_ids = filter.brand_ids?.reduce((acc, value, index) => {
      acc[`brand_ids[${index}]`] = value;
      return acc;
    }, {} as any) ?? {};

    return {
      product_category_id: filter.level3 ?? filter.level2 ?? filter.level1,
      order_price_asc: filter.order_by_price === -1 ? 1 : undefined,
      order_price_desc: filter.order_by_price === 1 ? 1 : undefined,
      mall_id: useMallStore().currentMallId,
      ...brand_ids,
    }
  });

  const { data: products, refresh } = await useDataFetch<PaginateResponse<ProductOne[]>>('products', {
    query: computed(() => ({ ...query.value, page: page.value })),
    watch: false,
  });

  const meta = computed(() => products.value?.meta ?? null)

  const pagination = usePagination(meta, page);

  async function loadMore() {
    if(pagination.isLast.value) return;
    const prevItems = [ ...products.value?.data ?? [] ];
    pagination.next();
    await refresh();
    if(products.value) {
      products.value = {
        ...products.value,
        data: [
          ...prevItems,
          ...products.value.data
        ],
      }
    }
  }

  function setPage(pageNumber: number) {
    pagination.setPage(pageNumber);
    refresh();
  }

  function prev() {
    pagination.prev();
    refresh();
  }

  function next() {
    pagination.next();
    refresh();
  }

  watch(() => JSON.stringify(query.value), () => refresh());

  return {
    products,
    pagination,
    meta,
    prev,
    next,
    setPage,
    loadMore,
  }
}
