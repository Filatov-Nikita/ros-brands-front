export interface Image {
  width: number | null,
  height: number | null,
  url: string,
}

export type Response<T> = {
  data: T,
}
