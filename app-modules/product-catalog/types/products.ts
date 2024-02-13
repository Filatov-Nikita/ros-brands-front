import type { Image } from '@/types/shared';

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
}
