<template>
  <div class="look-list-empty" v-if="looks.length === 0">
    <p>Нет подходящих образов</p>
  </div>
  <div v-else class="look-list">
    <template
      v-for="(look, index) in looks"
      :key="look.id"
    >
      <Item
        class="look-list__item"
        :look="look"
      />
      <div v-if="canShowPhrase(index)" class="look-list__phrase" v-html="getPhrase(index)"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import type { LookListItem } from '@/types/looks';
  import Item from './Item.vue';

  const props = withDefaults(
    defineProps<{
      looks: LookListItem[],
      hidePhrases?: boolean,
    }>(),
    { hidePhrases: false }
  );

  const lookPhrases = useAppConfig().lookPhrases;

  function canShowPhrase(index: number) {
    return index !== 0 && index % 7 === 0 && !props.hidePhrases
  }

  function getPhrase(index: number) {
    return lookPhrases[ (index - 7) / 7 % lookPhrases.length ];
  }
</script>

<style>
  .look-text-outlined {
    text-shadow:
      1px 0px 0px theme('colors.black'),
      -1px 0px 0px theme('colors.black'),
      0px -1px 0px theme('colors.black'),
      0px 1px 0px theme('colors.black'),
      1px 1px 0px theme('colors.black'),
      -1px -1px 0px theme('colors.black'),
      -1px 1px 0px theme('colors.black'),
      1px -1px 0px theme('colors.black');
    @apply tw-text-white;
  }
</style>

<style scoped lang="scss">
  .look-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @include md {
      grid-template-columns: repeat(2, 1fr);
    }

    @include sm {
      gap: 10px;
    }

    &__phrase {
      text-transform: uppercase;
      grid-column: 1 / 5;
      padding: 20px 0;
      font-size: 64px;
      letter-spacing: 0.02em;
      line-height: 1.3;
      font-weight: 800;
      @apply tw-text-black;

      @include md {
        grid-column: 1 / 3;
      }

      @include sm {
        padding: 13px 0;
        font-size: 32px;
      }
    }
  }

  .look-list-empty {
    padding: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
  }
</style>
