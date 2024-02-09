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
    <div class="product-list-empty" v-if="products && products.data.length === 0">
      <p>Нет подходящих товаров</p>
    </div>
    <div class="product-list" v-else-if="products">
      <Item
        class="product-list__item"
        v-for="product in products.data"
        :key="product.id"
        :product="product"
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
        @prev="prev"
        @next="next"
        @set-page="setPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import FilterControl from './FilterControl.vue';
  import useProductList from '../../composables/useProductList';
  import type { BrandListItem } from '@/types/brands';
  import { filterKey, clearFilterKey } from '../../symbols';

  const filter = inject(filterKey);
  const clearFilter = inject(clearFilterKey);

  if(!filter || !clearFilter) throw new Error();

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
  } = await useProductList(filter);
</script>

<style scoped lang="scss">

  .section-list {
    &__filter {
      margin-bottom: 30px;
    }

    &__filter-control {
      margin-top: 20px;
    }
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    margin: -15px -10px;

    &__item {
      width: calc(100% / 12 * 3 - 20px);
      margin: 15px 10px;
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
