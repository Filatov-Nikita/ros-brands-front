<template>
  <div
    class="select-mobile m-product-cats"
    :class="{
      'select-mobile--active': showed,
      'select-mobile--has-items': level2 || level3,
    }"
    v-click-outside="hide"
  >
    <button
      class="select-control tw-w-full"
      :class="{ 'select-mobile-control--active': showed }"
      @click="toggle"
    >
      <span class="select-control__label">Категории</span>
      <BaseIcon class="select-control__icon" :class="{ 'select-control__icon--active': showed }" name="arrow-down" color="#929292" />
    </button>
    <Transition
      enter-active-class="animate__animated select-dropdown__anim animate__fadeIn"
      leave-active-class="animate__animated select-dropdown__anim animate__fadeOut"
    >
      <div v-show="showed" class="select-dropdown select-mobile__body pretty-scroll">
        <Accordion v-model="showedAccord">
          <AccordionItem
            :class="{ 'm-product-cats__accord--active': cat.id === level2 }"
            v-for="cat in category.children"
            :key="cat.id"
            :name="'cat' + cat.id"
            :label="cat.name"
            @click="changeCategory(cat.id)"
          >
            <button
              v-for="child in cat.children"
              :key="child.id"
              class="level3-list-item"
              :class="{ 'level3-list-item--active': child.id === level3 }"
              @click="changeCategory(cat.id, child.id)"
            >
              {{ child.name }}
            </button>
          </AccordionItem>
        </Accordion>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import useSelect from '@/composables/components/useSelect';
  import type { ProductCategory } from '@/types/product-categories';

  const props = defineProps<{
    category: ProductCategory,
    level2?: number,
    level3?: number,
  }>();

  const emits = defineEmits<{
    (event: 'change:category', level2: number, level3?: number): void,
  }>();

  function changeCategory(level2: number, level3?: number) {
    emits('change:category', level2, level3);
  }

  const showedAccord = ref<string | null>(props.level2 ? 'cat' + props.level2 : null);

  const { showed, toggle, hide } = useSelect();
</script>

<style lang="scss">
.m-product-cats {
  .select-control {
    border: 1px solid transparent;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);

    &__label {
      font-size: 18px;
    }
  }

  .m-product-cats__accord--active {
    .accordion-item__label {
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>

<style scoped lang="scss">
  .level3-list-item {
    display: block;
    text-align: left;
    width: 100%;
    padding: 10px 0px;
    border-bottom: 1px solid #e8e8e8;
    color: #282828;

    &--active {
      font-weight: 700;
    }
  }
</style>
