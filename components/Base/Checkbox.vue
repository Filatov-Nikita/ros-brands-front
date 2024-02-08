<template>
  <div class="checkbox-control" :class="{ 'checkbox-control--active': checked }" role="checkbox" @click="onClick">
    <div class="checkbox-control__checkbox">
      <BaseIcon class="checkbox-control__icon-active" name="checked" />
    </div>
    <span class="checkbox-control__label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(defineProps<{
    modelValue?: any,
    checkedValue?: any,
    uncheckedValue?: any,
    label: string,
  }>(), {});

  const emit = defineEmits<{
    (event: 'update:modelValue', val: any): void
  }>();

  const checked = computed(() => {
    if(Array.isArray(props.modelValue)) {
      return props.modelValue.includes(props.checkedValue);
    }
    return props.modelValue === props.checkedValue;
  });

  function onClick() {
    if(Array.isArray(props.modelValue)) {
      if(props.modelValue.includes(props.checkedValue)) {
        const items = props.modelValue.filter(val => props.checkedValue !== val);
        emit('update:modelValue', items);
      } else {
        emit('update:modelValue', [ ...props.modelValue, props.checkedValue ]);
      }
    } else {
      if(props.modelValue === props.checkedValue) {
        emit('update:modelValue', props.uncheckedValue);
      } else {
        emit('update:modelValue', props.checkedValue);
      }
    }
  }
</script>

<style src="@/assets/css/components/checkbox.scss" lang="scss"></style>
