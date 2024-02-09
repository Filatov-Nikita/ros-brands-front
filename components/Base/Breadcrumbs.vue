<template>
  <div class="base-breadcrumbs">
    <template v-for="(item, i) in items">
      <span v-if="!item.to">{{ item.label }}</span>
      <NuxtLink
        v-else
        :to="item.to"
        :class="{ 'base-breadcrumbs__last': i === items.length - 1 }"
      >
        {{ item.label }}
      </NuxtLink>
      <span v-if="i !== items.length - 1"> / </span>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { useBreadcrumbsStore } from '@/stores/breadcrumbs';

  const breadStore = useBreadcrumbsStore();

  const items = computed(() => breadStore.items);
</script>

<style scoped lang="scss">
  .base-breadcrumbs {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    color: #6F6F6F;
    @apply tw-text-base tw-font-normal;

    &__last {
      @apply tw-pointer-events-none tw-text-black;
    }
  }
</style>
