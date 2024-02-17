<template>
  <div class="share-wrap" v-click-outside="hide">
    <button class="action-btn-outline" @click="showed = !showed">
      <span>Поделиться</span>
      <BaseIcon class="action-btn-outline__icon" color="#393939" name="share" />
    </button>
    <div v-if="showed" class="share-dropdown">
      <div class="share-dropdown__option">
        <button class="share-dropdown__link" @click="share.copyToClickborad">
          <BaseIcon class="tw-w-6 tw-h-6 tw-shrink-0" name="share-soc-clickboard" />
          <span class="share-dropdown__label">Скопировать ссылку</span>
        </button>
      </div>
      <div class="share-dropdown__option">
        <a class="share-dropdown__link" :href="share.getWaLink()" target="_blank">
          <BaseIcon class="tw-w-6 tw-h-6 tw-shrink-0" name="share-soc-wa" />
          <span class="share-dropdown__label">WhatsApp</span>
        </a>
      </div>
      <div class="share-dropdown__option">
        <a class="share-dropdown__link" :href="share.getTgLink()" target="_blank">
          <BaseIcon class="tw-w-6 tw-h-6 tw-shrink-0" name="share-soc-tg" />
          <span class="share-dropdown__label">Telegram</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import useSharePage from '../composables/useSharePage';

  const share = useSharePage();

  const showed = ref(false);

  function hide() {
    showed.value = false;
  }
</script>

<style scoped lang="scss">
  .share-wrap {
    position: relative;
  }

  .share-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    width: 230px;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
    padding: 12px 15px;
    border-radius: 10px;
    z-index: 50;
    @apply tw-bg-white;

    &__link {
      padding: 8px 0;
      display: flex;
      align-items: center;
      gap: 10px;

      &:hover {
        opacity: 0.6;
      }

      &:active {
        opacity: 0.8;
      }
    }

    &__label {
      flex-grow: 1;
    }
  }
</style>
