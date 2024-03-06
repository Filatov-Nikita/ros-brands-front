import type { LookColorListOne } from '@/types/look-colors';
import type { Response } from '@/types/shared';

export default async function() {
  const localColors = ref<number[]>([]);

  const { data: colorList } = await useDataFetch<Response<LookColorListOne[]>>('/look-colors');

  const currentItems = computed(() => {
    if(!colorList.value) return [];
    return colorList.value.data.filter(color => localColors.value.includes(color.id));
  });

  return {
    localColors,
    currentItems,
    colorList,
  }
}
