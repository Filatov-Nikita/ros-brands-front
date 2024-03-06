<template>
  <div class="tw-relative tw-inline-block" v-click-outside="hide">
    <button class="select-control tw-w-full" @click="toggle">
      <span class="select-control__label">Стиль</span>
      <span class="select-control__count">{{ localStyles.length }}</span>
      <BaseIcon class="select-control__icon" :class="{ 'select-control__icon--active': showed }" name="arrow-down" color="#929292" />
    </button>
    <Transition
      enter-active-class="animate__animated select-dropdown__anim animate__fadeIn"
      leave-active-class="animate__animated select-dropdown__anim animate__fadeOut"
    >
      <div v-if="showed" class="select-dropdown">
        <div class="select-dropdown__body pretty-scroll tw-mb-5">
          <div class="select-dropdown__option" v-for="style in styleList?.data">
            <BaseCheckbox class="tw-w-full" v-model="localStyles" :checked-value="style.id" :label="style.name" />
          </div>
        </div>
        <BaseButton class="tw-w-full" @click="change">Готово</BaseButton>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import useSelect from '@/composables/components/useSelect';
  import useStyles from '@/composables/components/look-filter/useStyles';
  import type { LookStyleListOne } from '@/types/look-styles';

  const props = defineProps<{
    modelValue?: number[],
  }>();

  const emits = defineEmits<{
    (event: 'update:modelValue', brands: number[]): void,
    (event: 'update:currentItems', items: LookStyleListOne[]): void,
  }>();

  const { showed, toggle, hide } = useSelect();

  const { localStyles, currentItems, styleList } = await useStyles();

  function change() {
    emits('update:modelValue', localStyles.value);
    emits('update:currentItems', currentItems.value);
    hide();
  }

  onMounted(() => {
    emits('update:currentItems', currentItems.value);
  });

  watch(() => props.modelValue, () => {
    localStyles.value = [ ...props.modelValue ?? [] ];
    emits('update:currentItems', currentItems.value);
  }, { immediate: true });
</script>
