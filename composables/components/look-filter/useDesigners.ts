import type { DesignerListItem } from '@/app-modules/designer-list/types';
import type { Response } from '@/types/shared';

export default async function() {
  const localDesigner = ref<number[]>([]);

  const { data: designerList } = await useDataFetch<Response<DesignerListItem[]>>('/designers');

  const currentItems = computed(() => {
    if(!designerList.value) return [];
    return designerList.value.data.filter(designer => localDesigner.value.includes(designer.id));
  });

  return {
    localDesigner,
    currentItems,
    designerList,
  }
}
