import type { Image } from '@/types/shared';

export interface DesignerDetailed {
  id: number,
  name: string,
  position: string,
  description: string,
  image: Image | null,
}
