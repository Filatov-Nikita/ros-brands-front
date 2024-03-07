<template>
  <NuxtLink class="look-card" :to="`/looks/${look.id}`" target="_blank">
    <div v-if="$slots.actions" class="look-card__actions">
      <slot name="actions" />
    </div>
    <div class="look-card__img-wrap">
      <img
        v-if="look.thumbnail"
        class="look-card__img"
        :src="look.thumbnail.url"
        :width="look.thumbnail.width ?? 0"
        :height="look.thumbnail.height ?? 0"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { LookListItem } from '@/types/looks';

  defineProps<{
    look: LookListItem,
  }>();
</script>

<style scoped lang="scss">
  .look-card {
    position: relative;

    &__img-wrap {
      height: 430px;

      @include sm {
        height: 240px;
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__actions {
      position: absolute;
      top: 14px;
      right: 14px;
      z-index: 10;

      @include sm {
        top: 10px;
        right: 10px;
      }
    }
  }
</style>
