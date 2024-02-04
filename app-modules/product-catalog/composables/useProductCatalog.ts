export interface ProductFilter {
  top_level_cat?: string | number,
  product_category_id?: string | number,
  brand_id?: string | number,
  order_by_price_asc?: string | number,
  order_by_price_desc?: string | number,
}

export default async function() {
  const route = useRoute();
  const router = useRouter();

  const filter: ProductFilter = reactive({});

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
  }
}
