export interface ProductOne {
  id:                  number;
  name:                string;
  consist:             string;
  description:         string;
  price:               number;
  priority:            number;
  visible:             number;
  product_category_id: number;
  brand_id:            number;
  created_at:          string;
  updated_at:          string;
  brand:               Brand;
}

export interface Brand {
  id:              number;
  name:            string;
  planeta_mall_id: number;
  visible:         number;
  created_at:      Date;
  updated_at:      Date;
}
