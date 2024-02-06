import type { UseFetchOptions } from 'nuxt/app';
import { defu } from 'defu';

export default function useDataFetch<T>(url: string | Ref<string>, options: UseFetchOptions<T> = {}) {
  const headers: Record<string, string> = {};

  const defaults: UseFetchOptions<T> = {
    baseURL: useAppConfig().apiBaseUrl,
    key: unref(url),
    headers,
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}
