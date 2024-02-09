<template>
  <div class="product-detailed" v-if="productDetailed">
    <div class="product-detailed__grid">
      <div class="product-detailed__left">
        1
      </div>
      <div class="product-detailed__right">
        <div class="product-detailed__brand-wrap">
          <p class="product-detailed__brand">{{ productDetailed.brand.name }}</p>
          <a class="map-link" :href="mapHref" target="_blank">
            <span>на карте</span>
            <BaseIcon class="map-link__icon" name="map-blue" />
          </a>
        </div>
        <div class="product-detailed__block1">
          <h1 class="product-detailed__title">{{ productDetailed.name }}</h1>
          <div class="product-detailed__price price-total">
            <span>{{ $amount(productDetailed.price) }}</span>
            <button class="price-total__sale-btn">
              <BaseIcon class="price-total__sale" color="#393939" name="sale" />
            </button>
          </div>
          <p class="product-detailed__actual-price-date">
            Цена действительна на {{ $formatDate(productDetailed.updated_at) }}
          </p>
        </div>
        <div class="product-detailed__section section-item">
          <p class="section-item__label">Состав</p>
          <p class="section-item__text">{{ productDetailed.consist }}</p>
        </div>
        <div class="product-detailed__section section-item">
          <p class="section-item__label">Описание</p>
          <p class="section-item__text product-detailed__description">{{ productDetailed.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ProductDetailed } from './types';
  import useBread from './composables/useBread';

  const route = useRoute();

  const { data } = await useDataFetch<{ data: ProductDetailed }>(
    computed(() => `products/${route.params.id}`)
  );

  const productDetailed = computed(() => data.value?.data ?? null);

  const mapHref = computed(
    () => `https://${ useMallStore().mallCode }.planeta-mall.ru/stores/${productDetailed.value?.brand.planeta_mall_id ?? 0}`
  );

  useBread(productDetailed);
</script>

<style scoped lang="scss">
  .product-detailed {
    &__grid {
      display: flex;
      flex-wrap: wrap;
      gap: 70px;
    }

    &__left {
      flex-basis: 520px;
    }

    &__right {
      flex-basis: 460px;
      flex-grow: 1;
    }

    &__brand {
      margin-bottom: 5px;
      @apply tw-text-xl tw-font-bold;
    }

    &__brand-wrap {
      margin-bottom: 30px;
    }

    &__title {
      margin-bottom: 8px;
      @apply tw-text-20;
    }

    &__price {
      margin-bottom: 8px;
    }

    &__actual-price-date {
      color: #6f6f6f;
      @apply tw-text-14;
    }

    &__block1 {
      margin-bottom: 30px;
    }

    &__section {
      margin-top: 25px;
    }

    &__description {
      white-space: pre-wrap;
    }
  }

  .price-total {
    display: flex;
    align-items: center;
    gap: 12px;
    @apply tw-text-20 tw-font-bold;

    &__sale-btn {
      width: 32px;
      height: 32px;
      padding: 4px;

      &:hover {
        opacity: 0.6;
      }
    }

    &__sale {
      width: 100%;
      height: 100%;
    }
  }

  .section-item {
    &__label {
      color: #6f6f6f;
      margin-bottom: 10px;
    }

    &__text {
      @apply tw-text-18;
    }
  }
</style>
