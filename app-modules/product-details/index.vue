<template>
  <div class="product-detailed" v-if="productDetailed">
    <div class="product-detailed__grid">
      <div class="product-detailed__left">
        <SliderPrimary :images="productDetailed.images" />
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
            <ProductPromotionPreview
              v-if="productDetailed.brand.promotions.length > 0"
              :title="productDetailed.brand.promotions[0].title"
              :text="productDetailed.brand.promotions[0].description"
            />
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
        <div class="product-detailed__actions">
          <ClientOnly>
            <FavoriteOutlineBtn class="product-detailed__action" type="product" :id="productDetailed.id" />
            <ShareOutlineBtn class="product-detailed__action-share" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ProductDetailed } from './types';
  import useBread from './composables/useBread';
  import { FavoriteOutlineBtn } from '@/app-modules/favorite-add';
  import { ShareOutlineBtn } from '@/app-modules/share-page';

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

<style lang="scss">
  .product-detailed {
    &__action {
      @include sm {
        width: 100%;
        justify-content: center;
      }
    }

    &__action-share {
      @include sm {
        width: 100%;
        .action-btn-outline {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
</style>

<style scoped lang="scss">
  .product-detailed {
    &__grid {
      display: flex;
      flex-wrap: wrap;
      gap: 70px;

      @include lg {
        gap: 50px;
      }

      @include sm {
        gap: 20px;
      }
    }

    &__left {
      width: 520px;

      @include lg {
        width: 420px;
      }

      @include sm {
        width: 100%;
      }
    }

    &__right {
      width: 460px;
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

    &__actions {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;

      @include sm {
        margin-top: 30px;
      }
    }
  }

  .price-total {
    display: flex;
    align-items: center;
    gap: 12px;
    @apply tw-text-20 tw-font-bold;
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
