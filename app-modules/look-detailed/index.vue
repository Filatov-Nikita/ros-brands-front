<template>
  <div class="look-detailed" v-if="lookDetailed">
    <BaseBreadcrumbs class="look-detailed__bread" />
    <h1 class="look-detailed__name">Образ {{ lookDetailed.data.name }}</h1>
    <div class="look-detailed__grid">
      <div class="look-detailed__left">
        <div class="look-detailed__slider">
          <SliderPrimary
            :images="lookDetailed.data.images"
          />
        </div>
        <ExtraInfo
          class="look-detailed__extra-info"
          :styles="lookDetailed.data.styles"
          :designer="lookDetailed.data.designer"
        />
        <div class="look-detailed__actions">
          <ClientOnly>
            <FavoriteOutlineBtn class="look-detailed__action" type="look" :id="lookDetailed.data.id" />
            <ShareOutlineBtn class="look-detailed__action-share" />
          </ClientOnly>
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
  import { FavoriteOutlineBtn } from '@/app-modules/favorite-add';
  import { ShareOutlineBtn } from '@/app-modules/share-page';

  const props = defineProps<{
    id: number,
  }>();

  const mallStore = useMallStore();

  const url = computed(() => `looks/${props.id}`);

  const { data: lookDetailed } = await useDataFetch<{ data: LookDetailed }>(url);

  watch(lookDetailed, () => {
    if(lookDetailed.value) {
      useBreadcrumbsStore().set([
        { label: 'Готовые образы', to: '/' },
        { label: lookDetailed.value.data.name, to: `/looks/${props.id}` },
      ]);

      const mall = mallStore.currentMall ? ` в ${ mallStore.currentMall.name } - ${ mallStore.currentMall.city }` : '';
      if(lookDetailed.value.data.designer) {
        useSeoMeta({
          title: `${lookDetailed.value.data.name} | Образ от ${ lookDetailed.value.data.designer.declinated_name }${ mall }`,
        });
      } else {
        useSeoMeta({
          title: `Образ ${lookDetailed.value.data.name}${ mall }`,
        });
      }
    }
  }, { immediate: true });
</script>

<style lang="scss">
  .look-detailed {
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
  .look-detailed {
    &__slider {
      @include sm {
        max-width: 380px;
      }
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      gap: 70px;

      @include lg {
        gap: 50px;
      }

      @include sm {
        gap: 40px;
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
      width: 620px;
      flex-grow: 1;

      @include lg {
        width: 460px;
      }

      @include sm {
        width: 100%;
      }
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
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;

      @include sm {
        margin-top: 30px;
      }
    }
  }
</style>
