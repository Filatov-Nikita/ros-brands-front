<template>
  <section class="looks-similar" v-if="response && response.data.length > 0">
    <h2 class="h2 looks-similar__h2">Другие образы</h2>
    <div v-if="isDesktopOrTablet" class="looks-similar__items">
      <Item
        class="looks-similar__item"
        v-for="look in response.data"
        :key="look.id"
        :look="look"
      />
    </div>
    <MSlider v-else :looks="response.data" />
  </section>
</template>

<script setup lang="ts">
  import type { LookListItem } from '@/types/looks';
  import type { Response } from '@/types/shared';
  import Item from '@/app-modules/look-catalog/components/Look/Item.vue';
  import MSlider from './MSlider.vue';

  const { isDesktopOrTablet } = useDevice();

  const props = defineProps<{
    lookId: number,
  }>();

  const { data: response } = await useDataFetch<Response<LookListItem[]>>(
    computed(() => `looks/${props.lookId}/similar`),
  );
</script>

<style lang="scss">
  .looks-similar {
    &__item {
      .look-card__img {
        height: 360px;
        object-fit: cover;
      }
    }
  }
</style>

<style scoped lang="scss">
  .looks-similar {
    &__h2 {
      margin-bottom: 20px;
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      margin: calc(var(--span) * -1);
      --count: 5;
      --span: 10px;

      @include lg {
        --count: 4;
      }

      @include md {
        --count: 3;
      }

      @include sm {
        --count: 2;
      }
    }

    &__item {
      margin: var(--span);
      width: calc(100% / var(--count) - var(--span) * 2);

    }
  }
</style>
