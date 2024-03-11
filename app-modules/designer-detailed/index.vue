<template>
  <div class="designer-detailed" v-if="designerDetailed">
    <BaseBreadcrumbs class="designer-detailed__bread" />
    <div class="designer-detailed__grid">
      <div class="designer-detailed__img-wrap">
        <img
          v-if="image"
          class="designer-detailed__img"
          :width="image.width ?? 0"
          :height="image.height ?? 0"
          :src="image.url"
        >
      </div>
      <div class="designer-detailed__content">
        <h1 class="designer-detailed__name">
          {{ designerDetailed.data.name }}
        </h1>
        <p class="designer-detailed__position">
          {{ designerDetailed.data.position }}
        </p>
        <p class="designer-detailed__body" v-html="designerDetailed.data.description"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Response } from '@/types/shared';
  import type { DesignerDetailed } from './types';

  const props = defineProps<{
    id: number,
  }>();

  const emits = defineEmits<{
    (event: 'loaded:data', data: DesignerDetailed): void,
  }>();

  const url = computed(() => `designers/${props.id}`);

  const { data: designerDetailed } = await useDataFetch<Response<DesignerDetailed>>(url);

  const image = computed(() => designerDetailed.value?.data.image);

  if(designerDetailed.value) {
    useBreadcrumbsStore().set([
      { label: 'Стилисты', to: '/designers' },
      { label: designerDetailed.value.data.name, to: `/designers/${props.id}` },
    ]);
  }

  if(designerDetailed.value) {
    emits('loaded:data', designerDetailed.value.data);
  }
</script>

<style scoped lang="scss">
  .designer-detailed {
    &__bread {
      margin-bottom: 20px;
    }

    &__name {
      font-size: 32px;
      line-height: normal;
      margin-bottom: 10px;
      @apply tw-font-bold;

      @include sm {
        font-size: 26px;
      }
    }

    &__position {
      font-size: 20px;
      line-height: normal;
      margin-bottom: 20px;
    }

    &__body {
      max-width: 582px;
      line-height: 1.5;
      white-space: pre-wrap;
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      gap: 50px;

      @include md {
        gap: 30px;
      }

      @include sm {
        gap: 20px;
      }
    }

    &__img-wrap {
      width: 530px;

      @include lg {
        width: 420px;
      }

      @include md {
        width: 470px;
      }

      @include sm {
        width: 100%;
      }
    }

    &__img {
      width: 100%;
      height: auto;
    }

    &__content {
      flex-grow: 1;
      width: 500px;

      @include lg {
        width: 450px;
      }

      @include sm {
        width: 100%;
      }
    }
  }
</style>
