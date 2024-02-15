import { usePagination } from '@/composables/usePagination';


export default function<T extends { data: any[] }>(
  pagination: ReturnType<typeof usePagination>,
  list: Ref<T | null>,
  execute: ReturnType<typeof useFetch>['execute']
) {
  async function loadMore() {
    if(pagination.isLast.value) return;
    const prevItems = [ ...list.value?.data ?? [] ];
    pagination.next();
    await execute();
    if(list.value) {
      list.value = {
        ...list.value,
        data: [
          ...prevItems,
          ...list.value.data
        ],
      }
    }
  }

  function setPage(pageNumber: number) {
    pagination.setPage(pageNumber);
    execute();
  }

  function prev() {
    pagination.prev();
    execute();
  }

  function next() {
    pagination.next();
    execute();
  }

  return {
    loadMore,
    setPage,
    prev,
    next,
  }
}
