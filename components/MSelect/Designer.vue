<template>
  <DropdownCard>
    <div class="tw-py-[6px]" v-for="designer in designerList?.data">
      <BaseCheckbox class="tw-w-full" v-model="localDesigner" :checked-value="designer.id" :label="designer.name" />
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
  import useDesigners from '@/composables/components/look-filter/useDesigners';

  const props = defineProps<{
    modelValue?: number[],
  }>();

  const emits = defineEmits<{
    (event: 'ok', brands: number[]): void,
  }>();

  const { localDesigner, designerList } = await useDesigners();

  function change() {
    emits('ok', localDesigner.value);
  }

  watch(() => props.modelValue, () => {
    localDesigner.value = [ ...props.modelValue ?? [] ];
  }, { immediate: true });
</script>
