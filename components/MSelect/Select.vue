<template>
  <div
    class="select-mobile"
    :class="{
      'select-mobile--active': showed,
      'select-mobile--has-items': filled,
    }"
    v-click-outside="hide"
  >
    <button
      class="select-control tw-w-full"
      :class="{ 'select-mobile-control--active': showed }"
      @click="toggle"
    >
      <span class="select-control__label">Фильтры</span>
      <BaseIcon class="select-control__icon" :class="{ 'select-control__icon--active': showed }" name="arrow-down" color="#929292" />
    </button>
    <Transition
      enter-active-class="animate__animated select-dropdown__anim animate__fadeIn"
      leave-active-class="animate__animated select-dropdown__anim animate__fadeOut"
    >
      <div v-show="showed" class="select-dropdown select-mobile__body pretty-scroll">
        <slot :change="change" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import useSelect from '@/composables/components/useSelect';

  defineProps<{
    filled: boolean,
  }>();

  const { showed, toggle, hide } = useSelect();

  function change(fn: () => void) {
    fn();
    hide();
  }
</script>
