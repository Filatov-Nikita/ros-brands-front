<template>
  <div class="promotion-wrap" v-click-outside="hide">
    <button class="promotion-btn" @click.prevent="showed = !showed">
      <BaseIcon class="tw-w-6 tw-h-6" :name="showed ? 'sale-active' : 'sale'" />
    </button>
    <div v-if="showed" class="promotion-dropdown">
      <p class="promotion-dropdown__title">{{ title }}</p>
      <p class="promotion-dropdown__text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string,
    text: string,
  }>();

  const showed = ref(false);

  function hide() {
    showed.value = false;
  }
</script>

<style scoped lang="scss">
  .promotion-wrap {
    position: relative;
  }

  .promotion-dropdown {
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    width: 254px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);
    @apply tw-bg-white;

    &__title {
      font-weight: 700;
      font-size: 18px;
      line-height: normal;
      margin-bottom: 7px;
    }

    &__text {
      @apply tw-text-base tw-font-normal;
    }
  }

  .promotion-btn {
    padding: 4px;
  }
</style>
