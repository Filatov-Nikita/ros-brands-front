import type { ProductDetailed } from '../types';

export default function useBread(productDetailed: Ref<ProductDetailed | null>) {
  const bread  = useBreadcrumbsStore();

  bread.reset();
  bread.push({ label: 'Каталог товаров', to: '/products' });

  if(productDetailed.value) {
    productDetailed.value.product_categories.forEach((cat, index, list) => {
      let query: any = { level1: list[0].id };

      if(index > 0) query.level2 = list[1].id;
      if(index > 1) query.level3 = list[2].id;

      bread.push({
        label: cat.name,
        to: {
          path: '/products',
          query,
        }
      })
    });

    bread.push({ label: productDetailed.value.name });
  }
}
