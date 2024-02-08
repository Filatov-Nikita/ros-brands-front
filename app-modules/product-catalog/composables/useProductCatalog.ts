import type { ProductFilter } from '../types';
import { filterKey, clearFilterKey } from '../symbols';
import useCategories from './useCategories';

export default async function() {
  const route = useRoute();
  const router = useRouter();

  const filter: ProductFilter = reactive({});

  function clearFilter() {
    filter.brand_ids = undefined;
    filter.order_by_price = undefined;
  }

  provide(filterKey, filter);
  provide(clearFilterKey, clearFilter);

  const {
    catList,
    currentCat,
    catLevel1,
    catLevel2,
    catLevel3,
    setCatLevel1,
    setSubCategory,
  } = await useCategories();

  filter.level1 = catLevel1.value;

  function setBrands(ids: number[]) {
    filter.brand_ids = ids;
  }

  function syncFilter() {
    const query = route.query;
    if(query.level1) {
      filter.level1 = +query.level1;
      catLevel1.value = filter.level1;
    }
    if(query.level2) {
      filter.level2 = +query.level2;
      catLevel2.value = filter.level2;
    }
    if(query.level3) {
      filter.level3 = +query.level3;
      catLevel3.value = filter.level3;
    }
    if(query.brand_ids) {
      filter.brand_ids = [ ...query.brand_ids ].map(Number);
    }
    if(query.order_by_price) {
      filter.order_by_price = +query.order_by_price as -1 | 0 | 1;
    }
  }

  watch([
    catLevel1,
    catLevel2,
    catLevel3,
  ], (values) => {
    filter.level1 = values[0];
    filter.level2 = values[1];
    filter.level3 = values[2];
  });

  watch(() => JSON.stringify(route.query), () => {
    syncFilter();
  }, { immediate: true });

  watch(() => JSON.stringify(filter), () => {
    router.replace({ query: Object.assign({}, route.query, filter) });
  }, { immediate: true });

  return {
    filter,
    catList,
    currentCat,
    catLevel1,
    catLevel2,
    catLevel3,
    setCatLevel1,
    setSubCategory,
    clearFilter
  }
}
