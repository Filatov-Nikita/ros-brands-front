<template>
  <div class="pagination">
    <button
      class="pagination__prev"
      type="button"
      @click="prev"
      :disabled="prevPage === null"
    >
      <BaseIcon class="pagination__arrow-icon" name="arrow-left" />
    </button>
    <template v-if="showStart">
      <button
        type="button"
        class="pagination__page"
        @click="setPage(1)"
      >
        1
      </button>
      <div v-if="showStartDots">
        ...
      </div>
    </template>
    <button
      type="button"
      class="pagination__page"
      :class="{ 'pagination__page--active': currentPage === page }"
      v-for="page in currentSection"
      @click="setPage(page)"
    >
      {{ page }}
    </button>
    <template v-if="showEnd">
      <div v-if="showEndDots">
        ...
      </div>
      <button
        type="button"
        class="pagination__page"
        @click="setPage(lastPage)"
      >
        {{ lastPage }}
      </button>
    </template>
    <button
      class="pagination__next"
      type="button"
      :disabled="nextPage === null"
      @click="next"
    >
      <BaseIcon class="pagination__arrow-icon" name="arrow-right" />
    </button>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    currentPage: number,
    lastPage: number,
    currentSection: number[],
    prevPage: number | null,
    nextPage: number | null,
    showEndDots: boolean,
    showStartDots: boolean,
    showStart: boolean,
    showEnd: boolean,
  }>();

  const emit = defineEmits<{
    (event: 'prev'): void
    (event: 'next'): void,
    (event: 'setPage', page: number): void,
  }>();

  function setPage(page: number) {
    emit('setPage', page);
  }

  function prev() {
    emit('prev');
  }

  function next() {
    emit('next');
  }
</script>
<style scoped lang="scss">
.pagination {
  display: flex;
  gap: 5px;

  &__prev, &__next, &__page {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    user-select: none;

    &:hover {
      background-color: #f1f0f0;
    }

    &:active {
      background-color: #c8c8c8;
    }
  }

  &__prev, &__next {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1A1A1A;

    &:disabled {
      color: #C9C9C9;
      pointer-events: none;
    }
  }

  &__prev {
    margin-right: 20px;
  }

  &__next {
    margin-left: 20px;
  }

  &__page {
    font-size: 18px;
    font-weight: 500;
    line-height: 35px;
    text-align: center;
    @apply tw-text-black;

    &--active {
      pointer-events: none;
      background-color: #e3e3e3;
    }
  }

  &__arrow-icon {
    width: 12px;
    height: 12px;
  }
}
</style>
