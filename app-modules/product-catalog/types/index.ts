export interface ProductFilter {
  level1?: number,
  level2?: number,
  level3?: number,
  brand_ids?: number[],
  order_by_price?: -1 | 0 | 1,
}
