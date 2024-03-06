<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    modelValue: string | null,
  }>();

  const emits = defineEmits<{
    (event: 'update:modelValue', value: string | null): void,
  }>();

  const value = toRef(props, 'modelValue');

  provide('value', value);
  provide('setValue', setValue);

  function setValue(_val: string | null) {
    emits('update:modelValue', _val);
  }
</script>
