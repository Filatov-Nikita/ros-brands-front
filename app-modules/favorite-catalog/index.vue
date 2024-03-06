<template>
  <div class="favorite-catalog">
    <FavTabs class="favorite-catalog__tabs" v-model:tab="tab" />
    <component
      :is="
        tab === 'look'
          ? LookList
          : tab === 'product'
            ? ProductList
            : Empty
      "
    />
  </div>
</template>

<script setup lang="ts">
  import type { Types } from '@/stores/favorites';
  import FavTabs from './components/FavTabs.vue';
  import Empty from './components/Empty.vue';
  import LookList from './components/LookList.vue';
  import ProductList from './components/ProductList.vue';

  const router = useRouter();
  const route = useRoute();

  const tab = ref<Types>(route.query.tab as Types ?? 'look');

  function syncQueryTab(tab: Types) {
    router.replace({ query: Object.assign({}, route.query, { tab }) })
  }

  onMounted(() => {
    syncQueryTab(tab.value)
  });

  watch(tab, () => {
    syncQueryTab(tab.value);
  });
</script>

<style scoped lang="scss">
  .favorite-catalog {
    &__tabs {
      margin-bottom: 30px;
    }
  }
</style>

<style lang="scss">
  .favorite-list {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--span) * -1);
    --col: 3;
    --span: 10px;

    @include lg {
      --col: 4;
    }

    @include md {
      --col: 6;
    }

    @include sm {
      --span: 5px;
    }

    &__item {
      margin: var(--span);
      width: calc(100% / 12 * var(--col) - var(--span) * 2);
    }
  }
</style>
