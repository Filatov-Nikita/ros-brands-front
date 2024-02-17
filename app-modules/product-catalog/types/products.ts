import type { Image } from '@/types/shared';
import type { PromotionListItem } from '@/types/promotions';

export interface ProductOne {
  id:     number;
  name:   string;
  price:  number;
  brand:  Brand;
  thumbnail: Image | null;
}

export interface Brand {
  id:              number;
  name:            string;
  planeta_mall_id: number;
  promotions:      PromotionListItem[];
}
