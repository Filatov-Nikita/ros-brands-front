export interface ProductDetailed {
  id:                 number;
  name:               string;
  consist:            string;
  price:              number;
  description:        string;
  product_categories: ProductCategory[];
  brand:              Brand;
  updated_at:         string;
}

export interface Brand {
  id:   number;
  name: string;
  planeta_mall_id: number,
}

export interface ProductCategory {
  id:        number;
  name:      string;
  parent_id: number | null;
}
