<template>
  <DropdownCard>
    <div class="tw-py-[6px]" v-for="color in colorList?.data">
      <BaseCheckbox class="tw-w-full" v-model="localColors" :checked-value="color.id" :label="color.name" />
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
  import useColors from '@/composables/components/look-filter/useColors';

  const props = defineProps<{
    modelValue?: number[],
  }>();

  const emits = defineEmits<{
    (event: 'ok', brands: number[]): void,
  }>();

  const { localColors, colorList } = await useColors();

  function change() {
    emits('ok', localColors.value);
  }

  watch(() => props.modelValue, () => {
    localColors.value = [ ...props.modelValue ?? [] ];
  }, { immediate: true });
</script>
