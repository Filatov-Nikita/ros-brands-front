<template>
  <DropdownCard>
    <div class="tw-py-[6px]" v-for="style in styleList?.data">
      <BaseCheckbox class="tw-w-full" v-model="localStyles" :checked-value="style.id" :label="style.name" />
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
  import useStyles from '@/composables/components/look-filter/useStyles';

  const props = defineProps<{
    modelValue?: number[],
  }>();

  const emits = defineEmits<{
    (event: 'ok', brands: number[]): void,
  }>();

  const { localStyles, styleList } = await useStyles();

  function change() {
    emits('ok', localStyles.value);
  }

  watch(() => props.modelValue, () => {
    localStyles.value = [ ...props.modelValue ?? [] ];
  }, { immediate: true });
</script>
