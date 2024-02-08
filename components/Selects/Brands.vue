<template>
  <div class="tw-relative tw-inline-block" v-click-outside="hide">
    <button class="select-control tw-w-full" @click="toggle">
      <span class="select-control__label">Бренды</span>
      <span class="select-control__count">{{ localBrands.length }}</span>
      <BaseIcon class="select-control__icon" :class="{ 'select-control__icon--active': showed }" name="arrow-down" color="#929292" />
    </button>
    <Transition
      enter-active-class="animate__animated select-dropdown__anim animate__fadeIn"
      leave-active-class="animate__animated select-dropdown__anim animate__fadeOut"
    >
      <div v-if="showed" class="select-dropdown">
        <label class="search-input tw-mb-4">
          <BaseIcon class="search-input__icon" name="search" color="#909090" />
          <input
            class="search-input__input"
            :class="{ 'search-input__input--filled': searchText !== '' }"
            type="text"
            v-model="searchText"
          />
          <span class="search-input__label">Поиск</span>
        </label>
        <div class="select-dropdown__body pretty-scroll tw-mb-5">
          <div class="select-dropdown__option" v-for="brand in filtredList">
            <BaseCheckbox class="tw-w-full" v-model="localBrands" :checked-value="brand.id" :label="brand.name" />
          </div>
        </div>
        <BaseButton class="tw-w-full" @click="change">Готово</BaseButton>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import useSelect from '@/composables/components/useSelect';
  import type { BrandListItem } from '@/types/brands';

  const props = defineProps<{
    modelValue?: number[],
  }>();

  const emits = defineEmits<{
    (event: 'update:modelValue', brands: number[]): void,
    (event: 'update:currentItems', items: BrandListItem[]): void,
  }>();

  const { showed, toggle, hide } = useSelect();

  const localBrands = ref<number[]>([]);

  const { data: brandList } = await useDataFetch<BrandListItem[]>('/brands');

  const searchText = ref('');

  const filtredList = computed(() => {
    if(!brandList.value) return [];
    if(searchText.value === '') return brandList.value;
    return brandList.value.filter(
      (brand) => brand.name.toLowerCase().indexOf(searchText.value.toLowerCase()) !== -1
    );
  });

  const currentItems = computed(() => {
    if(!brandList.value) return [];
    return brandList.value.filter(brand => localBrands.value.includes(brand.id));
  });

  function change() {
    emits('update:modelValue', localBrands.value);
    emits('update:currentItems', currentItems.value);
    hide();
    clearLocal();
  }

  function clearLocal() {
    searchText.value = '';
  }

  onMounted(() => {
    emits('update:currentItems', currentItems.value);
  });

  watch(() => props.modelValue, () => {
    localBrands.value = [ ...props.modelValue ?? [] ];
    emits('update:currentItems', currentItems.value);
  }, { immediate: true });
</script>

<style src="@/assets/css/components/select.scss" lang="scss"></style>
