<template>
  <div class="tw-relative tw-inline-block" v-click-outside="hide">
    <button class="select-control tw-w-full" @click="toggle">
      <span class="select-control__label">Бренды</span>
      <span class="select-control__count">2</span>
      <BaseIcon class="select-control__icon" :class="{ 'select-control__icon--active': showed }" name="arrow-down" color="#929292" />
    </button>
    <Transition
      enter-active-class="animate__animated select-dropdown__anim animate__fadeIn"
      leave-active-class="animate__animated select-dropdown__anim animate__fadeOut"
    >
      <div v-if="showed" class="select-dropdown">
        <label class="search-input tw-mb-4">
          <BaseIcon class="search-input__icon" name="search" color="#909090" />
          <input class="search-input__input" type="text" />
          <span class="search-input__label">Поиск</span>
        </label>
        <div class="select-dropdown__body pretty-scroll tw-mb-5">
          <div class="select-dropdown__option" v-for="i in 100">
            <BaseCheckbox class="tw-w-fit" v-model="brands" :checked-value="i" />
          </div>
        </div>
        <BaseButton class="tw-w-full">Готово</BaseButton>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import useSelect from '@/composables/components/useSelect';

  const { showed, toggle, hide } = useSelect();

  const brands = ref<string[]>([]);
</script>

<style src="@/assets/css/components/select.scss" lang="scss"></style>
