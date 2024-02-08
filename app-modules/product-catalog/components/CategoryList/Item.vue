<template>
  <div class="list-item">
    <button
      class="root-btn"
      :class="{ 'root-btn--active': category.id === level2 }" @click="changeLevel2(category.id)"
    >
      <span>{{ category.name }}</span>
      <BaseIcon class="root-btn__icon" :class="{ 'root-btn__icon--active': category.id === level2 }" name="arrow-down" color="#929292" />
    </button>
    <Transition
      enter-active-class="animate__animated children-list__anim animate__fadeInDown"
      leave-active-class="animate__animated children-list__anim animate__fadeOutUp"
    >
      <nav class="children-list" v-if="showed">
        <button
          class="children-list__item"
          :class="{
            'children-list__item--active': child.id === level3,
          }"
          v-for="child in category.children"
          :key="child.id"
          @click="changeCategory(category.id, child.id)"
        >
          {{ child.name }}
        </button>
      </nav>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import type { ProductCategory } from '@/types/product-categories';
  import { filterKey } from '../../symbols';

  const filter = inject(filterKey);

  if(!filter) throw new Error();

  const props = withDefaults(defineProps<{
    initialShowed?: boolean,
    category: ProductCategory,
    level2?: number,
    level3?: number,
  }>(), { initialShowed: false });

  const showed = ref(props.initialShowed);

  const emits = defineEmits<{
    (event: 'change:category', level2: number, level3?: number): void,
  }>();

  function changeCategory(level2: number, level3?: number) {
    emits('change:category', level2, level3);
  }

  function changeLevel2(level2: number) {
    showed.value = !showed.value;
    changeCategory(level2);
  }
</script>

<style scoped lang="scss">
  .root-btn {
    display: block;
    width: 100%;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: 12px 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    @apply tw-bg-white tw-text-20 tw-leading-none;

    &--active {
      @apply tw-font-bold;
    }

    &__icon {
      width: 12px;
      height: 12px;

      &--active {
        transform: rotate(180deg);
      }
    }
  }

  .list-item {
    & + & {
      margin-top: 30px;
    }
  }

  .children-list {
    margin-top: 10px;
    padding-left: 17px;

    &__item {
      display: block;
      text-align: left;
      width: 100%;
      padding: 10px 0;
      color: #282828;
      line-height: normal;
      border-bottom: 1px solid #E8E8E8;

      &--active {
        @apply tw-font-bold;
      }
    }

    &__anim {
      --animate-duration: 400ms;
    }
  }
</style>
