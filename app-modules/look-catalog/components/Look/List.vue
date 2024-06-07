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
    return !props.hidePhrases && index !== 0 && (index + 1) % 8 === 0;
  }

  function getPhrase(index: number) {
    return lookPhrases[ (index + 1 - 8) / 8 % lookPhrases.length ];
  }
</script>

<style>
  .look-text-outlined {
    text-shadow: rgb(26, 26, 26) 1px 0px 0px, rgb(26, 26, 26) 0.540302px 0.841471px 0px, rgb(26, 26, 26) -0.416147px 0.909297px 0px, rgb(26, 26, 26) -0.989992px 0.14112px 0px, rgb(26, 26, 26) -0.653644px -0.756802px 0px, rgb(26, 26, 26) 0.283662px -0.958924px 0px, rgb(26, 26, 26) 0.96017px -0.279415px 0px;
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
