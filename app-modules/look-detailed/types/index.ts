import type { Image } from '@/types/shared';
import type { ProductOne } from '@/app-modules/product-catalog/types/products';
import type { DesignerListItem } from '@/app-modules/designer-list/types';

export interface LookDetailed {
  id:          number;
  name:        string;
  description: string;
  styles:      Style[];
  images:      Image[];
  video_url:   Image | null;
  designer:    DesignerListItem | null;
  products:    ProductOne[];
}

export interface Style {
  id:   number;
  name: string;
}
