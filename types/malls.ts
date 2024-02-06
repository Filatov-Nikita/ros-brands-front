import type { Image } from './shared';

export interface MallOne {
  id:                number;
  name:              string;
  city:              string;
  planeta_mall_code: string;
  site_href:         string;
  priority:          number;
  logotype:          Image;
}
