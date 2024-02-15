import type { Filter } from './useFilter';

export default function(filter: Filter) {
  function removeBrand(brandId: number): void {
    if(filter['brand_ids[]']) {
      filter['brand_ids[]'] = filter['brand_ids[]'].filter(id => id !== brandId);
    }
  }

  function removeColor(colorId: number): void {
    if(filter['color_ids[]']) {
      filter['color_ids[]'] = filter['color_ids[]'].filter(id => id !== colorId);
    }
  }

  function removeStyle(styleId: number): void {
    if(filter['style_ids[]']) {
      filter['style_ids[]'] = filter['style_ids[]'].filter(id => id !== styleId);
    }
  }

  function removeDesigner(designerId: number): void {
    if(filter['designer_ids[]']) {
      filter['designer_ids[]'] = filter['designer_ids[]'].filter(id => id !== designerId);
    }
  }

  return {
    removeBrand,
    removeColor,
    removeStyle,
    removeDesigner,
  }
}
