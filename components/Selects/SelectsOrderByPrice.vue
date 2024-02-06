<template>
  <div class="tw-relative tw-w-fit" v-click-outside="hide">
    <button class="select-control" @click="toggle">
      <span class="select-control__label">Цена</span>
      <BaseIcon class="select-control__icon" :class="{ 'select-control__icon--active': showed }" name="arrow-down" color="#929292" />
    </button>
    <Transition
      enter-active-class="animate__animated select-dropdown__anim animate__fadeIn"
      leave-active-class="animate__animated select-dropdown__anim animate__fadeOut"
    >
      <div v-if="showed" class="select-dropdown">
        <div class="select-dropdown__body pretty-scroll tw-mb-5">
          <div class="select-simple-option">
            По возрастанию
          </div>
          <div class="select-simple-option">
            По убыванию
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
</script>

<style src="@/assets/css/components/select.scss" lang="scss"></style>
