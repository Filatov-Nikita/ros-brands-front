<template>
  <div id="burgerMenu" v-if="showed" class="menu-burger" :style="{ '--height': height + 'px' }">
    <div class="wrapper">
      <nav>
        <div class="menu-burger__item" v-for="item in navLinks">
          <NuxtLink
            class="nav-link"
            :to="item.to"
            active-class="nav-link--active"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { navLinks } from '../data';

  const showed = defineModel<boolean>('showed');
  const route = useRoute();

  const height = ref(0);

  function getHeight() {
    const el = document.querySelector('.header-public') as HTMLElement;
    if(!el) throw new Error('header-public is not defined');
    return el.offsetHeight;
  }

  function toggleHeader() {
    const el = document.querySelector('.header-public') as HTMLElement;
    if(!el) throw new Error('header-public is not defined');
    const classes = ['tw-w-full', 'tw-z-9000', 'tw-fixed'];
    if(showed.value) {
      el.classList.add(...classes);
    } else {
      el.classList.remove(...classes);
    }
  }

  function setHeight() {
    height.value = getHeight();
  }

  onMounted(() => {
    toggleBody();
    toggleHeader();
    setHeight();
  });

  function toggleBody() {
    if(showed.value) {
      document.body.classList.add('tw-overflow-hidden');
    } else {
      document.body.classList.remove('tw-overflow-hidden');
    }
  }

  watch(showed, () => {
    toggleBody();
    setHeight();
    toggleHeader();
  });

  watch(() => route.fullPath, () => {
    showed.value = false;
  });
</script>

<style scoped lang="scss">
  .menu-burger {
    position: fixed;
    width: 100%;
    top: var(--height);
    height: calc(100% - var(--height));
    background-color: #EDEDE9;
    z-index: 8950;
    padding-top: 40px;

    &__item {
      font-size: 18px;

      & + & {
        margin-top: 25px;
      }
    }
  }
</style>
