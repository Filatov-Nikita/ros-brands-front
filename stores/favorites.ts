export type Types = 'product' | 'look';

export interface Item {
  type: Types,
  id: number,
}

const storeKey = 'favorites';

export const useFavoritesStore = defineStore('favoritesStore', () => {
  const list = ref<Item[]>([]);

  const products = computed(() => {
    return list.value.filter(item => item.type === 'product');
  });

  const looks = computed(() => {
    return list.value.filter(item => item.type === 'look');
  });

  function contains(type: Types, id: number) {
    const index = list.value.findIndex(item => item.id === id && item.type === type);
    return index !== -1;
  }

  function append(type: Types, id: number) {
    list.value.unshift({
      type,
      id,
    });
  }

  function remove(type: Types, id: number) {
    list.value = list.value.filter(item => item.id !== id);
  }

  function store() {
    localStorage.setItem(storeKey, JSON.stringify(list.value));
  }

  function restore() {
    const result = localStorage.getItem(storeKey);

    if(!result) return;

    try {
      const data: Item[] = JSON.parse(result);
      list.value = data;
    } catch(e) {
      localStorage.removeItem(storeKey);
    }
  }

  return {
    products,
    looks,
    restore,
    store,
    contains,
    append,
    remove,
  }
});
