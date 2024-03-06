<template>
  <DropdownCard>
    <div class="tw-py-[6px]">
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
    <template #bottom>
      <BaseButton class="tw-mt-4 tw-w-full" @click="change">
        Готово
      </BaseButton>
    </template>
  </DropdownCard>
</template>

<script setup lang="ts">
  import DropdownCard from './DropdownCard.vue';

  type Value = -1 | 0 | 1;

  const props = defineProps<{
    modelValue?: Value,
  }>();

  const emits = defineEmits<{
    (event: 'ok', value?: Value): void,
  }>();

  const localValue = ref<Value>();

  watch(() => props.modelValue, () => {
    if(localValue.value !== props.modelValue) {
      localValue.value = props.modelValue;
    }
  }, { immediate: true });

  function change() {
    emits('ok', localValue.value);
  }
</script>
