import type { LookStyleListOne } from '@/types/look-styles';
import type { Response } from '@/types/shared';

export default async function() {
  const localStyles = ref<number[]>([]);

  const { data: styleList } = await useDataFetch<Response<LookStyleListOne[]>>('/look-styles');

  const currentItems = computed(() => {
    if(!styleList.value) return [];
    return styleList.value.data.filter(style => localStyles.value.includes(style.id));
  });

  return {
    currentItems,
    styleList,
    localStyles,
  }
}
