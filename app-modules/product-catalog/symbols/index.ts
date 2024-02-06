import type { ProductFilter } from '../types';

export const topLevelCatKey: InjectionKey<number> = Symbol();
export const filterKey: InjectionKey<ProductFilter> = Symbol();
