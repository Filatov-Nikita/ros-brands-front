<template>
  <div class="tw-relative tw-inline-block" v-click-outside="hide">
    <button class="select-control tw-w-full" @click="toggle">
      <span class="select-control__label">Цвет образа</span>
      <span class="select-control__count">{{ localColors.length }}</span>
      <BaseIcon class="select-control__icon" :class="{ 'select-control__icon--active': showed }" name="arrow-down" color="#929292" />
    </button>
    <Transition
      enter-active-class="animate__animated select-dropdown__anim animate__fadeIn"
      leave-active-class="animate__animated select-dropdown__anim animate__fadeOut"
    >
      <div v-if="showed" class="select-dropdown">
        <div class="select-dropdown__body pretty-scroll tw-mb-5">
          <div class="select-dropdown__option" v-for="color in colorList?.data">
            <BaseCheckbox
              class="tw-w-full"
              v-model="localColors"
              :checked-value="color.id"
              :label="color.name"
            >
              <template #label>
                <div class="checkbox-color-label">
                  <span
                    class="checkbox-color-label__color"
                    :class="{ 'checkbox-color-label__color--bordered': color.name.toLowerCase() === 'белый' }"
                    :style="{ '--color': color.color_in_hex }"
                  ></span>
                  <span>{{ color.name }}</span>
                </div>
              </template>
            </BaseCheckbox>
          </div>
        </div>
        <BaseButton class="tw-w-full" @click="change">Готово</BaseButton>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import useSelect from '@/composables/components/useSelect';
  import type { LookColorListOne } from '@/types/look-colors';
  import type { Response } from '@/types/shared';

  const props = defineProps<{
    modelValue?: number[],
  }>();

  const emits = defineEmits<{
    (event: 'update:modelValue', brands: number[]): void,
    (event: 'update:currentItems', items: LookColorListOne[]): void,
  }>();

  const { showed, toggle, hide } = useSelect();

  const localColors = ref<number[]>([]);

  const { data: colorList } = await useDataFetch<Response<LookColorListOne[]>>('/look-colors');

  const currentItems = computed(() => {
    if(!colorList.value) return [];
    return colorList.value.data.filter(brand => localColors.value.includes(brand.id));
  });

  function change() {
    emits('update:modelValue', localColors.value);
    emits('update:currentItems', currentItems.value);
    hide();
  }

  onMounted(() => {
    emits('update:currentItems', currentItems.value);
  });

  watch(() => props.modelValue, () => {
    localColors.value = [ ...props.modelValue ?? [] ];
    emits('update:currentItems', currentItems.value);
  }, { immediate: true });
</script>

<style src="@/assets/css/components/select.scss" lang="scss"></style>


<style scoped lang="scss">
  .checkbox-color-label {
    font-size: 16px;
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 8px;

    &__color {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: var(--color);

      &--bordered {
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
  }
</style>
