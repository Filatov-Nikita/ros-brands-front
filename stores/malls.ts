import type { MallOne } from '@/types/malls';

export const useMallStore = defineStore('mallStore', function() {
  const malls = ref<MallOne[]>([]);
  const currentMallId = ref(+(useCookie('mall_id').value ?? useAppConfig().defaultMallId));

  function setMalls(list: MallOne[]) {
    malls.value = list;
  }

  function setMallId(id: number) {
    currentMallId.value = id;
    useCookie('mall_id').value = id.toString();
  }

  const currentMall = computed(() => {
    return malls.value.find(mall => mall.id === currentMallId.value);
  });

  const sortedMalls = computed(() => {
    return [ ...malls.value ].sort((a, b) => b.priority - a.priority);
  });

  const mallCode = computed(() => currentMall.value?.planeta_mall_code ?? 'krs');

  return {
    malls,
    currentMall,
    sortedMalls,
    currentMallId,
    mallCode,
    setMalls,
    setMallId,
  }
});
