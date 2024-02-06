<template>
  <div class="list-item">
    <button
      class="root-btn"
      :class="{ 'root-btn--active': showed }" @click="changeParent(category.id)"
    >
      <span>{{ category.name }}</span>
      <BaseIcon class="root-btn__icon" :class="{ 'root-btn__icon--active': showed }" name="arrow-down" color="#929292" />
    </button>
    <Transition
      enter-active-class="animate__animated children-list__anim animate__fadeInDown"
      leave-active-class="animate__animated children-list__anim animate__fadeOutUp"
    >
      <nav class="children-list" v-if="showed">
        <button
          class="children-list__item"
          v-for="child in category.children"
          :key="child.id"
          @click="filter.product_category_id = child.id"
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
  }>(), { initialShowed: false });

  const showed = ref(props.initialShowed);

  function changeParent(parentId: number) {
    showed.value = !showed.value;
    filter!.product_category_id = parentId;
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
