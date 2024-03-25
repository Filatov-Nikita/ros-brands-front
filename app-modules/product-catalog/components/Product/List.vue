<template>
  <div class="section-list">
    <div class="section-list__filter">
      <div class="product-toolbar">
        <SelectsBrands
          class="product-toolbar__item"
          v-model="filter.brand_ids"
          @update:current-items="currentBrandItems = $event"
        />
        <SelectsOrderByPrice class="product-toolbar__item" v-model="filter.order_by_price" />
      </div>
      <FilterControl
        class="section-list__filter-control"
        v-if="showedControl"
        :brand-items="currentBrandItems"
        :price-order="filter.order_by_price"
        @remove:brand="removeBrand"
        @remove:price-order="filter.order_by_price = undefined"
        @clear="clearFilter"
      />
    </div>

    <div class="section-list__filter-mobile">
      <MSelectProductFilter
        v-model:brand_ids="filter.brand_ids"
      />
    </div>

    <div class="product-list-empty" v-if="products && products.data.length === 0">
      <p>Нет подходящих товаров</p>
    </div>
    <div class="product-list" v-else-if="products">
      <Item
        class="product-list__item"
        v-for="product in products.data"
        :key="product.id"
        :product="product"
        target="_blank"
      />
    </div>
    <div class="tw-mt-14 tw-flex tw-flex-col tw-items-center">
      <BaseButtonOutline class="tw-mb-8 tw-max-w-[250px] tw-w-full" v-if="!pagination.isLast.value && meta" @click="loadMore">
        Показать ещё
      </BaseButtonOutline>
      <PagePagination
        v-if="meta"
        :current-page="meta.current_page"
        :last-page="meta.last_page"
        :current-section="pagination.currentSection.value"
        :prev-page="pagination.prevPage.value"
        :next-page="pagination.nextPage.value"
        :show-end-dots="pagination.showEndDots.value"
        :show-start-dots="pagination.showStartDots.value"
        :show-start="pagination.showStart.value"
        :show-end="pagination.showEnd.value"
        @prev="pagination.prev"
        @next="pagination.next"
        @set-page="pagination.setPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import FilterControl from './FilterControl.vue';
  import useProductList from '../../composables/useProductList';
  import type { BrandListItem } from '@/types/brands';
  import { filterKey, clearFilterKey, pageKey } from '../../symbols';

  const { isMobileOrTablet } = useDevice();

  const filter = inject(filterKey);
  const clearFilter = inject(clearFilterKey);
  const pageValue = inject(pageKey);

  if(!filter || !clearFilter || !pageValue) throw new Error();

  const currentBrandItems = ref<BrandListItem[]>([]);

  const showedControl = computed(() => {
    return filter.order_by_price || currentBrandItems.value.length > 0;
  });

  function removeBrand(brandId: number) {
    if(!filter!.brand_ids) return;
    filter!.brand_ids = filter!.brand_ids.filter(id => id !== brandId);
  }

  const {
    products,
    pagination,
    meta,
    prev,
    next,
    setPage,
    loadMore,
  } = await useProductList(filter, pageValue);
</script>

<style scoped lang="scss">

  .section-list {
    &__filter {
      margin-bottom: 30px;

      @include md {
        display: none;
      }
    }

    &__filter-control {
      margin-top: 20px;
    }

    &__filter-mobile {
      margin-bottom: 25px;
      display: none;

      @include md {
        display: block;
      }
    }
  }

  .product-list {
    --span-y: 15px;
    --span-x: 10px;
    --col: 3;
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--span-y) * -1) calc(var(--span-x) * -1);

    @include lg {
      --col: 4;
    }

    @include sm {
      --span-y: 10px;
      --span-x: 3px;
      --col: 6;
    }

    &__item {
      width: calc(100% / 12 * var(--col) - var(--span-x) * 2);
      margin: var(--span-y) var(--span-x);
    }
  }

  .product-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 30px;

    &__item {
      flex-basis: 220px;
    }
  }

  .product-list-empty {
    padding: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
  }
</style>
