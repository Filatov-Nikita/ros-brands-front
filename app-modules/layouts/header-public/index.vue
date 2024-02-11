<template>
  <header class="header-public">
    <div class="wrapper">
      <div class="header-public__grid">
        <MallList />
        <Nav class="header-public__nav" />
        <div class="header-public__actions">
          <a class="header-action-btn" :href="hrefMap" target="_blank">
            <BaseIcon class="header-action-btn__icon" name="map" />
          </a>
          <NuxtLink class="header-action-btn" to="/favorites">
            <BaseIcon class="header-action-btn__icon" name="heart" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import Nav from './components/Nav.vue';
  import MallList from './components/MallList/index.vue';

  const hrefMap = computed(() => `https://${useMallStore().mallCode}.planeta-mall.ru/scheme`);
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
