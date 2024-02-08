import type { ProductCategory } from '@/types/product-categories';

export default async function() {
  const { data: categories } = await useDataFetch<ProductCategory[]>('product-categories');

  const catList = computed(() => {
    if(!categories.value) return [];
    return categories.value;
  });

  const catLevel1 = ref<number | undefined>(catList.value[0]?.id);
  const catLevel2 = ref<number>();
  const catLevel3 = ref<number>();

  function setCatLevel1(id: number) {
    catLevel1.value = id;
    catLevel2.value = undefined;
    catLevel3.value = undefined;
  }

  function setSubCategory(level2: number, level3?: number) {
    catLevel2.value = level2;
    catLevel3.value = level3;
  }

  const currentCat = computed(() => {
    const cat = catList.value.find(cat => cat.id === catLevel1.value);
    return cat;
  });

  return {
    currentCat,
    catList,
    catLevel1,
    catLevel2,
    catLevel3,
    setCatLevel1,
    setSubCategory
  }
}
