<template>
  <Select :filled="filled" v-slot="{ change }">
    <Accordion v-model="accordCurrent">
      <AccordionItem bodyClass="select-accordion-body" name="brands" label="Бренды">
        <Brands
          :model-value="brand_ids"
          @ok="change(() => $emit('update:brand_ids', $event))"
        />
      </AccordionItem>
      <AccordionItem bodyClass="select-accordion-body" name="styles" label="Стиль">
        <Styles
          :model-value="style_ids"
          @ok="change(() => $emit('update:style_ids', $event))"
        />
      </AccordionItem>
      <AccordionItem bodyClass="select-accordion-body" name="colors" label="Цвет образа">
        <Colors
          :model-value="color_ids"
          @ok="change(() => $emit('update:color_ids', $event))"
        />
      </AccordionItem>
      <AccordionItem bodyClass="select-accordion-body" name="designers" label="Стилист">
        <Designer
          :model-value="designer_ids"
          @ok="change(() => $emit('update:designer_ids', $event))"
        />
      </AccordionItem>
    </Accordion>
  </Select>
</template>

<script setup lang="ts">
  import Select from './Select.vue';
  import Brands from './Brands.vue';
  import Styles from './Styles.vue';
  import Colors from './Colors.vue';
  import Designer from './Designer.vue';

  const props = defineProps<{
    brand_ids?: number[]
    color_ids?: number[]
    style_ids?: number[]
    designer_ids?: number[]
  }>();

  defineEmits<{
    (event: 'update:brand_ids', value: number[]): void,
    (event: 'update:color_ids', value: number[]): void,
    (event: 'update:style_ids', value: number[]): void,
    (event: 'update:designer_ids', value: number[]): void,
  }>();

  const accordCurrent = ref<string | null>(null);

  const filled = computed(() => {
    return [
      props.brand_ids,
      props.color_ids,
      props.style_ids,
      props.designer_ids,
    ].some(val => val && val.length > 0);
  });
</script>
