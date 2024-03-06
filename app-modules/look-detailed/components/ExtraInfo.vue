<template>
  <div class="look-extra-info">
    <div class="look-extra-info__item">
      <p class="look-extra-info__label">Стиль</p>
      <p>{{ styles.map(s => s.name).join(', ') }}</p>
    </div>
    <div v-if="designer" class="look-extra-info__item">
      <p class="look-extra-info__label">Образ от стилиста</p>
      <NuxtLink class="app-link" :to="`/designers/${designer.id}`" target="_blank">
        {{ designer.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import  type { LookDetailed } from '../types';

  defineProps<{
    styles: LookDetailed['styles'],
    designer: LookDetailed['designer'],
  }>();
</script>

<style scoped lang="scss">
  .look-extra-info {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    @include sm {
      gap: 20px;
    }

    &__label {
      line-height: normal;
      margin-bottom: 8px;
      @apply tw-text-20 tw-font-bold;
    }

    &__item {
      @include sm {
        width: 100%;
      }

      & + & {
        border-left: 1px solid #c7c7c7;
        padding-left: 30px;

        @include sm {
          border-left-width: 0px;
          padding-left: 0px;
        }
      }
    }
  }
</style>
