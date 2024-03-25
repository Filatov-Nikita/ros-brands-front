import type { LocationQuery, LocationQueryValue } from 'vue-router';

export interface Filter {
  page?: number,
  look_category_id?: number,
  'brand_ids[]'?: number[],
  'style_ids[]'?: number[],
  'color_ids[]'?: number[],
  'designer_ids[]'?: number[],
}

export default function useFilter() {
  const filter: Filter = reactive({});
  const router = useRouter();
  const route = useRoute();

  function clear() {
    let key: keyof Filter;
    for(key in filter) {
      if(key === 'look_category_id') continue;
      filter[key] = undefined;
    }
  }

  function _int(value: string) {
    const v = Number(value);
    return !isNaN(v) ? v : undefined;
  }

  function toInt(query: LocationQuery, key: string) {
    if(query[key] && typeof query[key] === 'string') {
      const value = query[key] as string;
      return _int(value);
    }
  }

  function toIntArray(query: LocationQuery, key: string) {
    if(query[key] && Array.isArray(query[key])) {
      const value = query[key] as LocationQueryValue[];
      return value.filter(Number).map(v => _int(v as string) as number);
    } else if(query[key] && typeof query[key] === 'string') {
      return [ _int(query[key] as string) as number ];
    }
  }

  function syncFilter() {
    const query = route.query;
    filter.look_category_id = toInt(query, 'look_category_id');
    filter['brand_ids[]'] = toIntArray(query, 'brand_ids[]');
    filter['style_ids[]'] = toIntArray(query, 'style_ids[]');
    filter['color_ids[]'] = toIntArray(query, 'color_ids[]');
    filter['designer_ids[]'] = toIntArray(query, 'designer_ids[]');
    filter['page'] = toInt(query, 'page') ?? 1;
  }

  function syncQuery() {
    router.replace({ query: Object.assign({}, route.query, filter) });
  }

  watch(() => JSON.stringify(route.query), () => {
    syncFilter();
  }, { immediate: true });

  watch(() => JSON.stringify(filter), () => {
    syncQuery();
  });

  return {
    filter,
    clear,
    syncQuery
  }
}
