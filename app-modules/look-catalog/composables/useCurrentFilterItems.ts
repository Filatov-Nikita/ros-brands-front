import type { BrandListItem } from '@/types/brands';
import type { LookStyleListOne } from '@/types/look-styles';
import type { LookColorListOne } from '@/types/look-colors';
import type { DesignerListItem } from '@/app-modules/designer-list/types';

export default function() {
  const brands = ref<BrandListItem[]>([]);
  const designers = ref<DesignerListItem[]>([]);
  const styles = ref<LookStyleListOne[]>([]);
  const colors = ref<LookColorListOne[]>([]);

  const isEmptyAll = computed(() => {
    return [
      brands.value.length,
      designers.value.length,
      styles.value.length,
      colors.value.length,
    ].every(l => l === 0);
  });

  return {
    brands,
    designers,
    styles,
    colors,
    isEmptyAll,
  }
}
