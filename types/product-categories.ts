export interface ProductCategory {
  id:         number;
  name:       string;
  parent_id:  null;
  created_at: Date;
  updated_at: Date;
  children:   ProductCategory[];
  products_count: number,
}
