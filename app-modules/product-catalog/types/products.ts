import type { Image } from '@/types/shared';

export interface ProductOne {
  id:     number;
  name:   string;
  price:  number;
  brand:  Brand;
  images: Image[];
  thumbnail: Image | null;
}

export interface Brand {
  id:              number;
  name:            string;
}
