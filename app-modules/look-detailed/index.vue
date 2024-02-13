<template>
  <div class="look-detailed" v-if="lookDetailed">
    <BaseBreadcrumbs class="look-detailed__bread" />
    <h1 class="look-detailed__name">Образ {{ lookDetailed.data.name }}</h1>
    <div class="look-detailed__grid">
      <div class="look-detailed__left">
        <SliderPrimary
          :images="lookDetailed.data.images"
        />
        <ExtraInfo
          class="look-detailed__extra-info"
          :styles="lookDetailed.data.styles"
          :designer="lookDetailed.data.designer"
        />
        <div class="look-detailed__actions">
          <button class="action-btn-outline">
            <span>Поделиться</span>
            <BaseIcon class="action-btn-outline__icon" color="#393939" name="heart" />
          </button>
          <button class="action-btn-outline">
            <span>Поделиться</span>
            <BaseIcon class="action-btn-outline__icon" color="#393939" name="share" />
          </button>
        </div>
      </div>
      <div class="look-detailed__right">
        <LookProducts :products="lookDetailed.data.products" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { LookDetailed } from './types';
  import LookProducts from './components/LookProducts.vue'
  import ExtraInfo from './components/ExtraInfo.vue'

  const props = defineProps<{
    id: number,
  }>();

  const url = computed(() => `looks/${props.id}`);

  const { data: lookDetailed } = await useDataFetch<{ data: LookDetailed }>(url);

  watch(lookDetailed, () => {
    if(lookDetailed.value) {
      useBreadcrumbsStore().set([
        { label: 'Готовые образы', to: '/' },
        { label: lookDetailed.value.data.name, to: `/looks/${props.id}` },
      ]);
    }
  }, { immediate: true });
</script>

<style scoped lang="scss">
  .look-detailed {
    &__grid {
      display: flex;
      flex-wrap: wrap;
      gap: 70px;
    }

    &__left {
      width: 520px;
    }

    &__right {
      width: 620px;
      flex-grow: 1;
    }

    &__bread {
      margin-bottom: 20px;
    }

    &__name {
      margin-bottom: 20px;
      line-height: normal;
      @apply tw-text-20 tw-font-medium;
    }

    &__extra-info {
      margin-top: 30px;
    }

    &__actions {
      margin-top: 40px;
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
</style>
