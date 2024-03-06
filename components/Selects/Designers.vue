<template>
  <div class="tw-relative tw-inline-block" v-click-outside="hide">
    <button class="select-control tw-w-full" @click="toggle">
      <span class="select-control__label">Стилист</span>
      <span class="select-control__count">{{ localDesigner.length }}</span>
      <BaseIcon class="select-control__icon" :class="{ 'select-control__icon--active': showed }" name="arrow-down" color="#929292" />
    </button>
    <Transition
      enter-active-class="animate__animated select-dropdown__anim animate__fadeIn"
      leave-active-class="animate__animated select-dropdown__anim animate__fadeOut"
    >
      <div v-if="showed" class="select-dropdown">
        <div class="select-dropdown__body pretty-scroll tw-mb-5">
          <div class="select-dropdown__option" v-for="designer in designerList?.data">
            <BaseCheckbox class="tw-w-full" v-model="localDesigner" :checked-value="designer.id" :label="designer.name" />
          </div>
        </div>
        <BaseButton class="tw-w-full" @click="change">Готово</BaseButton>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import useSelect from '@/composables/components/useSelect';
  import useDesigners from '@/composables/components/look-filter/useDesigners';
  import type { DesignerListItem } from '@/app-modules/designer-list/types';

  const props = defineProps<{
    modelValue?: number[],
  }>();

  const emits = defineEmits<{
    (event: 'update:modelValue', brands: number[]): void,
    (event: 'update:currentItems', items: DesignerListItem[]): void,
  }>();

  const { showed, toggle, hide } = useSelect();

  const { localDesigner, currentItems, designerList } = await useDesigners();

  function change() {
    emits('update:modelValue', localDesigner.value);
    emits('update:currentItems', currentItems.value);
    hide();
  }

  onMounted(() => {
    emits('update:currentItems', currentItems.value);
  });

  watch(() => props.modelValue, () => {
    localDesigner.value = [ ...props.modelValue ?? [] ];
    emits('update:currentItems', currentItems.value);
  }, { immediate: true });
</script>
