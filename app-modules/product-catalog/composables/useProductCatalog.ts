import type { ProductFilter } from '../types';
import { filterKey } from '../symbols';
import useCategories from './useCategories';

export default async function() {
  const route = useRoute();
  const router = useRouter();

  const filter: ProductFilter = reactive({});

  provide(filterKey, filter);

  const {
    catList,
    currentCat,
    topLevelCatId,
    setTopLevelCatId,
  } = await useCategories();

  watch(() => route.query, () => {
    assignFilter();
  }, { immediate: true });

  watch(filter, () => {
    router.replace({ query: Object.assign({}, route.query, filter) });
  });

  function assignFilter(): ProductFilter {
    const newFilter: any = {};
    Object.entries(filter).forEach((entry) => {
      if(entry[0] in route.query) newFilter[entry[0]] = route.query[entry[0]];
      else newFilter[entry[0]] = entry[1];
    });
    return Object.assign(filter, newFilter);
  }

  return {
    filter,
    catList,
    currentCat,
    topLevelCatId,
    setTopLevelCatId,
  }
}
