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
  import useBrands from '@/composables/components/look-filter/useBrands';
  import type { BrandListItem } from '@/types/brands';

  const props = defineProps<{
    modelValue?: number[],
  }>();

  const emits = defineEmits<{
    (event: 'update:modelValue', brands: number[]): void,
    (event: 'update:currentItems', items: BrandListItem[]): void,
  }>();

  const { showed, toggle, hide } = useSelect();

  const { localBrands, currentItems, searchText, filtredList } = await useBrands();

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
