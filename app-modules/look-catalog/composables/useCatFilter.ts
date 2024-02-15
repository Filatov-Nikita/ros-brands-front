import useFilter from './useFilter';
import type { LookCategory } from '@/types/look-categories';

export default async function useLooks(lookFilter: ReturnType<typeof useFilter>, categories: ComputedRef<LookCategory[]>) {
  if(!lookFilter.filter.look_category_id) {
    lookFilter.filter.look_category_id = categories.value[0]?.id;
  }
}
