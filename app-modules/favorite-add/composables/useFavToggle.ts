import type { Types } from '@/stores/favorites';
import { useFavoritesStore } from '@/stores/favorites';

export default function(favStore: ReturnType<typeof useFavoritesStore>, type: Ref<Types>, id: Ref<number>) {
  const isActive = computed(() => favStore.contains(type.value, id.value));

  function toggle() {
    if(isActive.value) {
      favStore.remove(type.value, id.value);
    } else {
      favStore.append(type.value, id.value);
    }

    favStore.store();
  }

  return {
    isActive,
    toggle,
  };
}
