import type { BrandListItem } from '@/types/brands';

export default async function() {
  const localBrands = ref<number[]>([]);

  const { data: brandList } = await useDataFetch<BrandListItem[]>('/brands');

  const searchText = ref('');

  const filtredList = computed(() => {
    if(!brandList.value) return [];
    if(searchText.value === '') return brandList.value;
    return brandList.value.filter(
      (brand) => brand.name.toLowerCase().indexOf(searchText.value.toLowerCase()) !== -1
    );
  });

  const currentItems = computed(() => {
    if(!brandList.value) return [];
    return brandList.value.filter(brand => localBrands.value.includes(brand.id));
  });

  return {
    searchText,
    localBrands,
    filtredList,
    currentItems,
  }
}
