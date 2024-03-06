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
          <div
            class="select-simple-option"
            :class="{ 'select-simple-option--active': localValue === -1 }"
            @click="localValue = -1"
          >
            По возрастанию
          </div>
          <div
            class="select-simple-option"
            :class="{ 'select-simple-option--active': localValue === 1 }"
            @click="localValue = 1"
          >
            По убыванию
          </div>
        </div>
        <BaseButton class="tw-w-full" @click="change">Готово</BaseButton>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import useSelect from '@/composables/components/useSelect';

  type Value = -1 | 0 | 1

  const props = defineProps<{
    modelValue?: Value,
  }>();

  const { showed, toggle, hide } = useSelect();

  const localValue = ref<Value>();

  const emit = defineEmits<{
    (event: 'update:modelValue', value?: Value): void,
  }>();

  function change() {
    emit('update:modelValue', localValue.value);
    hide();
  }

  watch(() => props.modelValue, () => {
    if(localValue.value !== props.modelValue) {
      localValue.value = props.modelValue;
    }
  }, { immediate: true });
</script>
