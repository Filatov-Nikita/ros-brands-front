<template>
  <header class="header-public">
    <div class="wrapper">
      <div class="header-public__grid">
        <MallList />
        <Nav v-if="isDesktopOrTablet" class="header-public__nav" />
        <div class="header-public__actions">
          <a class="header-action-btn" :href="hrefMap" target="_blank">
            <BaseIcon class="header-action-btn__icon" name="map" />
          </a>
          <NuxtLink class="header-action-btn" to="/favorites">
            <BaseIcon class="header-action-btn__icon" name="heart" />
          </NuxtLink>
          <button class="header-public__burger" @click="showedBurger = !showedBurger">
            <BaseIcon fit :name="showedBurger ? 'close-burger' : 'burger'" color="#1A1A1A" />
          </button>
        </div>
      </div>
    </div>
  </header>
  <MenuMobile class="header-public__burger-menu" v-model:showed="showedBurger" />
</template>

<script setup lang="ts">
  import Nav from './components/Nav.vue';
  import MallList from './components/MallList/index.vue';
  import MenuMobile from './components/MenuMobile.vue';

  const hrefMap = computed(() => `https://${useMallStore().mallCode}.planeta-mall.ru/scheme`);

  const { isDesktopOrTablet } = useDevice();

  const showedBurger = ref(false);
</script>

<style scoped lang="scss">
  .header-public {
    padding: 17px 0px;
    background-color: #EDEDE9;

    &__grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 30px;
    }

    &__actions {
      display: flex;
      align-items: center;
      gap: 25px;

      @include sm {
        gap: 8px;
      }
    }

    &__nav {
      @include md {
        display: none;
      }
    }

    &__burger {
      display: none;
      width: 40px;
      height: 40px;
      padding: 4px;

      @include md {
        display: block;
      }
    }

    &__burger-menu {
      display: none;

      @include md {
        display: block;
      }
    }
  }

  .header-action-btn {
    min-width: 40px;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    padding: 8px;

    &:hover {
      background-color: #DDDDDA;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
