<template>
  <nav class="nav-main">
    <NuxtLink
      class="nav-link nav-main__link"
      active-class="nav-link--active"
      v-for="item in navLinks"
      :to="item.to"
    >
      <span class="nav-main__label">{{ item.label }}</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
  import { navLinks } from '../data';
</script>

<style scoped lang="scss">
  .nav-main {
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 15px;

    &__link {
      line-height: 1;
      @apply tw-text-18;
    }
  }
</style>
