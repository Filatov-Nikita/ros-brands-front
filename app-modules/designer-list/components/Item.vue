<template>
  <NuxtLink class="designer-item" :to="`/designers/${designer.id}`">
    <div class="designer-item__img-wrap">
      <img
        v-if="image"
        class="designer-item__img"
        :width="image.width ?? 0"
        :height="image.height ?? 0"
        :src="image.url"
      >
    </div>
    <div class="designer-item__name">{{ designer.name }}</div>
    <div class="designer-item__position">{{ designer.position }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { DesignerListItem } from '../types';

  const props = defineProps<{
    designer: DesignerListItem,
  }>();

  const image = computed(() => props.designer.image);
</script>

<style scoped lang="scss">
  .designer-item {
    display: block;

    &__img-wrap {
      height: 430px;
      margin-bottom: 16px;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__name {
      margin-bottom: 8px;
      @apply tw-text-20 tw-font-bold;
    }
  }
</style>
