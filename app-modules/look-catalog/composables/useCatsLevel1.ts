import type { LookCategory } from '@/types/look-categories';
import type { Response } from '@/types/shared';

export default async function() {
  const { data: categories } = await useDataFetch<Response<LookCategory[]>>('/look-categories');

  const sortedCategories = computed(() => {
    if(!categories.value) return [];
    return categories.value.data.sort((a, b) => b.priority - a.priority);
  });

  return {
    categories,
    sortedCategories,
  }
}
