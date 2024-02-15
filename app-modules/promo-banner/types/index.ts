import type { Image } from '@/types/shared';

export interface BannerOne {
  id: number,
  title: string,
  href: string | null,
  priority: number,
  image: Image | null,
  image_mobile: Image | null,
}
