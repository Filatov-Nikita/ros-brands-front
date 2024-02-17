import type { Image } from '@/types/shared';
import type { PromotionListItem } from '@/types/promotions';

export interface ProductDetailed {
  id:                 number;
  name:               string;
  consist:            string;
  price:              number;
  description:        string;
  product_categories: ProductCategory[];
  brand:              Brand;
  images:             Image[];
  updated_at:         string;
}

export interface Brand {
  id:   number;
  name: string;
  planeta_mall_id: number,
  promotions: PromotionListItem[],
}

export interface ProductCategory {
  id:        number;
  name:      string;
  parent_id: number | null;
}
