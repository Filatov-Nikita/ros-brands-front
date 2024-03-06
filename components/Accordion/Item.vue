<template>
  <button
    class="accordion-item"
    :class="{ 'accordion-item--active': showed }"
    v-bind="$attrs"
    @click="setValue(showed ? null : name)"
  >
    <span class="accordion-item__label">{{ label }}</span>
    <BaseIcon class="select-control__icon" :class="{ 'select-control__icon--active': showed }" name="arrow-down" color="#929292" />
  </button>
  <SlideUpDown :class="bodyClass ?? ''" :active="showed" :duration="300">
      <slot />
  </SlideUpDown>
</template>

<script setup lang="ts">
  //@ts-ignore;
  import SlideUpDown from 'vue-slide-up-down';

  const props = defineProps<{
    name: string,
    label: string,
    bodyClass?: string,
  }>();

  const value = inject('value') as Ref<string | null>;
  const setValue = inject('setValue') as (value: string | null) => void;

  if(!value) throw new Error('value is not defined');
  if(!setValue) throw new Error('setValue is not defined');

  const showed = computed(() => props.name === value.value);
</script>
