<template>
  <div class="mall-list" v-click-outside="outside">
    <NuxtLink class="mall-list__logo-link" to="/">
      <img class="mall-list__logo" src="/images/logo_trk.svg" alt="логотип ТРЦ">
    </NuxtLink>
    <button class="mall-list__current" @click="showed = !showed">
      <span class="mall-list__label">Красноярск</span>
      <BaseIcon class="mall-list__icon" name="arrow-down" color="#AFAF97" />
    </button>
    <Transition
      enter-active-class="animate__animated mall-dropdown__anim animate__fadeInDown"
      leave-active-class="animate__animated mall-dropdown__anim animate__fadeOutUp"
    >
      <div class="mall-dropdown" v-show="showed">
        <button class="mall-dropdown__item">
          Новокузнецк
        </button>
        <button class="mall-dropdown__item">
          Новосибирск
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  const showed = ref(false);

  function outside() {
    showed.value = false;
  }
</script>

<style scoped lang="scss">
  .mall-list {
    position: relative;

    &__logo-link {
      display: block;
      width: 185px;
      margin-bottom: 5px;

      img {
        width: 100%;
      }
    }

    &__current {
      display: flex;
      align-items: center;
      gap: 10px;

      &:hover {
        color: #777777;
      }
    }

    &__label {

    }

    &__icon {
      flex-shrink: 0;
      width: 12px;
      height: 12px;
    }
  }

  .mall-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-width: 196px;
    z-index: 9000;
    border-radius: 10px;
    padding: 15px 20px;
    @apply tw-bg-white;

    &__anim {
      --animate-duration: 200ms;
    }

    &__item {
      display: block;
      color: #777777;

      & + & {
        margin-top: 10px;
      }

      &--active, &:hover {
        @apply tw-text-black;
      }
    }
  }
</style>
