<template>
  <swiper
    class="look-similar-slider"
    :modules="[ FreeMode ]"
    :slidesPerView="1.4"
    :spaceBetween="20"
    freeMode
  >
    <swiper-slide v-for="look in looks">
      <Item
        class="look-similar-slider__item"
        :look="look"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
  import type { LookListItem } from '@/types/looks';
  import { FreeMode } from 'swiper/modules';
  import Item from '@/app-modules/look-catalog/components/Look/Item.vue';

  defineProps<{
    looks: LookListItem[],
  }>();
</script>
