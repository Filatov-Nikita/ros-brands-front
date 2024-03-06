<template>
  <DropdownCard>
    <template #top>
      <label class="search-input tw-mb-2">
        <BaseIcon class="search-input__icon" name="search" color="#909090" />
        <input
          class="search-input__input"
          :class="{ 'search-input__input--filled': searchText !== '' }"
          type="text"
          v-model="searchText"
        />
        <span class="search-input__label">Поиск</span>
      </label>
    </template>
    <div class="tw-py-[6px]" v-for="brand in filtredList">
      <BaseCheckbox class="tw-w-full" v-model="localBrands" :checked-value="brand.id" :label="brand.name" />
    </div>
    <template #bottom>
      <BaseButton class="tw-mt-4 tw-w-full" @click="change">
        Готово
      </BaseButton>
    </template>
  </DropdownCard>
</template>

<script setup lang="ts">
  import DropdownCard from './DropdownCard.vue';
  import useBrands from '@/composables/components/look-filter/useBrands';

  const props = defineProps<{
    modelValue?: number[],
  }>();

  const emits = defineEmits<{
    (event: 'ok', brands: number[]): void,
  }>();

  const { localBrands, searchText, filtredList } = await useBrands();

  function change() {
    emits('ok', localBrands.value);
    searchText.value = '';
  }

  watch(() => props.modelValue, () => {
    localBrands.value = [ ...props.modelValue ?? [] ];
  }, { immediate: true });
</script>
