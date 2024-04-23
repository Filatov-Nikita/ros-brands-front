<template>
  <div class="look-catalog" v-if="looks">
    <CategoriesLevel1
      class="look-catalog__cats"
      :look-categories="sortedCategories"
      :active-cat-id="filter.filter.look_category_id"
      @select:category="filter.filter.look_category_id = $event.id"
    />

    <div v-if="isDesktopOrTablet" class="look-params">
      <SelectsBrands
        class="look-params__param"
        v-model="filter.filter['brand_ids[]']"
        @update:current-items="currentItems.brands.value = $event"
      />
      <SelectsLookColors
        class="look-params__param"
        v-model="filter.filter['color_ids[]']"
        @update:current-items="currentItems.colors.value = $event"
      />
      <SelectsLookStyles
        class="look-params__param"
        v-model="filter.filter['style_ids[]']"
        @update:current-items="currentItems.styles.value = $event"
      />
      <SelectsDesigners
        class="look-params__param"
        v-model="filter.filter['designer_ids[]']"
        @update:current-items="currentItems.designers.value = $event"
      />
    </div>

    <MSelectLookFilter
      v-if="isMobile"
      v-model:brand_ids="filter.filter['brand_ids[]']"
      v-model:color_ids="filter.filter['color_ids[]']"
      v-model:style_ids="filter.filter['style_ids[]']"
      v-model:designer_ids="filter.filter['designer_ids[]']"
    />

    <template v-if="!currentItems.isEmptyAll.value">
      <FilterSelected
        class="look-catalog__selected"
        :current-items="currentItems"
        @remove:brand="paramActions.removeBrand"
        @remove:color="paramActions.removeColor"
        @remove:designer="paramActions.removeDesigner"
        @remove:style="paramActions.removeStyle"
      />
      <FilterBtnClear @click="filter.clear" />
    </template>

    <div class="look-catalog__space"></div>

    <LookList :looks="looks.data" :hidePhrases="womanCat?.id !== filter.filter.look_category_id" />

    <div class="tw-mt-14 tw-flex tw-flex-col tw-items-center">
      <BaseButtonOutline
        class="tw-mb-8 tw-max-w-[250px] tw-w-full"
        v-if="!pagination.isLast.value && meta" @click="paginateQuery.loadMore">
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
  import useCatsLevel1 from './composables/useCatsLevel1';
  import useFilter from './composables/useFilter';
  import useLooks from './composables/useLooks';
  import useFilterParamActions from './composables/useFilterParamActions';
  import useCurrentFilterItems from './composables/useCurrentFilterItems';
  import LookList from './components/Look/List.vue';
  import CategoriesLevel1 from './components/CategoriesLevel1.vue';
  import FilterSelected from './components/FilterSelected.vue';

  const { isDesktopOrTablet, isMobile } = useDevice();

  const { sortedCategories } = await useCatsLevel1();

  const filter = useFilter({ look_category_id: sortedCategories.value[0]?.id });

  const womanCat = computed(() => sortedCategories.value.find(cat => cat.name.toLowerCase() === 'женщины'));

  const currentItems = useCurrentFilterItems();

  const paramActions = useFilterParamActions(filter.filter);

  const { looks, paginateQuery, pagination, meta } = await useLooks(filter);

  onMounted(() => {
    filter.syncQuery();
  });
</script>

<style lang="scss">
  .look-catalog {
    .look-list__item {
      .look-card__img {
        object-fit: cover;
        height: 430px;

        @include sm {
          height: 290px;
        }
      }
    }
  }
</style>

<style scoped lang="scss">
  .look-catalog {
    &__cats {
      margin-bottom: 30px;

      @include sm {
        margin-bottom: 25px;
      }
    }

    &__selected {
      margin-top: 20px;
      margin-bottom: 15px;
    }

    &__space {
      padding-top: 30px;

      @include sm {
        padding-top: 20px;
      }
    }
  }

  .look-params {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;

    &__param {
      width: 220px;
    }
  }
</style>
