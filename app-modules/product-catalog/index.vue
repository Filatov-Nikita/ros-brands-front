<template>
  <main class="product-catalog">
    <aside class="top-level-cats">
      <button
        class="nav-link top-level-cats__link"
        :class="{ 'nav-link--active': cat.id === catLevel1 }"
        v-for="cat in catList"
        :key="cat.id"
        @click="setCatLevel1(cat.id)"
      >
        {{ cat.name }}
      </button>
    </aside>

    <div class="product-catalog__grid">
      <CategoryList
        v-if="currentCat"
        class="product-catalog__cat-list" :category="currentCat"
        :level2="catLevel2"
        :level3="catLevel3"
        @change:category="setSubCategory"
      />
      <ProductList class="product-catalog__product-list" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import CategoryList from './components/CategoryList/index.vue';
  import ProductList from './components/Product/List.vue';
  import useProductCatalog from './composables/useProductCatalog';

  const {
    filter,
    currentCat,
    catList,
    catLevel1,
    catLevel2,
    catLevel3,
    setCatLevel1,
    setSubCategory,
    syncQuery
  } = await useProductCatalog();

  onMounted(() => {
    syncQuery();
  });
</script>

<style scoped lang="scss">
  .top-level-cats {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 40px;

    &__link {
      @apply tw-text-20 tw-leading-none;
    }
  }

  .product-catalog {
    padding-top: 50px;
    padding-bottom: 100px;

    &__grid {
      display: flex;
      align-items: flex-start;
      gap: 38px;
    }

    &__cat-list {
      flex-basis: 200px;
      flex-shrink: 0;
    }

    &__product-list {
      flex-grow: 1;
      flex-basis: 500px;
    }
  }
</style>
~/stores/product-categories
