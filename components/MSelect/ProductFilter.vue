<template>
  <Select :filled="filled" v-slot="{ change }">
    <Accordion v-model="accordCurrent">
      <AccordionItem bodyClass="select-accordion-body" name="brands" label="Бренды">
        <Brands
          :model-value="brand_ids"
          @ok="change(() => $emit('update:brand_ids', $event))"
        />
      </AccordionItem>
      <AccordionItem bodyClass="select-accordion-body" name="sort" label="Цена">
        <Sort
          @ok="change(() => $emit('update:sort', $event))"
        />
      </AccordionItem>
    </Accordion>
  </Select>
</template>

<script setup lang="ts">
  import Select from './Select.vue';
  import Brands from './Brands.vue';
  import Sort from './Sort.vue';

  const props = defineProps<{
    brand_ids?: number[]
  }>();

  defineEmits<{
    (event: 'update:brand_ids', value: number[]): void,
    (event: 'update:sort', value?: 1 | 0 | -1): void,
  }>();

  const accordCurrent = ref<string | null>(null);

  const filled = computed(() => {
    return [
      props.brand_ids,
    ].some(val => val && val.length > 0);
  });
</script>
