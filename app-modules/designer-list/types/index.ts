import type { Image } from '@/types/shared';

export interface DesignerListItem {
  id: number,
  name: string,
  declinated_name: string,
  position: string,
  image: Image | null,
}
