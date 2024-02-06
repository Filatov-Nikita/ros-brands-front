import type { ProductCategory } from '@/types/product-categories';

export default async function() {
  const { data: categories } = await useDataFetch<ProductCategory[]>('product-categories');

  const catList = computed(() => {
    if(!categories.value) return [];
    return categories.value;
  });

  const topLevelCatId = ref<number | undefined>(catList.value[0]?.id);

  function setTopLevelCatId(id: number) {
    topLevelCatId.value = id;
  }

  const currentCat = computed(() => {
    const cat = catList.value.find(cat => cat.id === topLevelCatId.value);
    return cat;
  });

  return {
    currentCat,
    catList,
    topLevelCatId,
    setTopLevelCatId,
  }
}
