export interface Image {
  width: number | null,
  height: number | null,
  url: string,
}

export type Response<T> = {
  data: T,
}

export type PaginateResponse<T> = Response<T> & { meta: Meta, links: Links, };

export interface Links {
  first: string;
  last:  string;
  prev:  null;
  next:  string;
}

export interface Meta {
  current_page: number;
  from:         number;
  last_page:    number;
  links:        Link[];
  path:         string;
  per_page:     number;
  to:           number;
  total:        number;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
