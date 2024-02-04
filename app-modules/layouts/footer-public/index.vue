<template>
  <footer class="footer-public">
    <div class="wrapper">
      <div class="footer-public__grid">
        <div class="footer-public__col1">
          <a class="footer-public__logo" href="#">
            <img width="185" height="46" src="/images/logo_trk.svg" alt="Логотип ТРЦ">
          </a>
        </div>
        <div class="footer-public__col2">
          <p class="footer-public__contact-item">{{ data.address }}</p>
          <p class="footer-public__contact-item">{{ data.workTime }}</p>
          <p class="footer-public__contact-item">
            <a :href="`tel:${data.phone}`">{{ data.phone }}</a>
          </p>
        </div>
        <div class="footer-public__col3">
          <p class="footer-public__soc-title">Присоединяйтесь к нам</p>
          <ul class="contact-list">
            <li class="contact-list__item">
              <a class="contact-list__link" href="#">
                <BaseIcon class="contact-list__icon" name="social-vk" />
              </a>
            </li>
            <li class="contact-list__item">
              <a class="contact-list__link" href="#">
                <BaseIcon class="contact-list__icon" name="social-tg" />
              </a>
            </li>
            <li class="contact-list__item">
              <a class="contact-list__link" href="#">
                <BaseIcon class="contact-list__icon" name="social-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { data } from './data';
</script>

<style scoped lang="scss">
  .footer-public {
    padding-top: 50px;
    padding-bottom: 64px;
    background-color: #E3E3E0;

    &__grid {
      display: grid;
      grid-template-columns: 285px 290px 200px;
      gap: 30px;
    }

    &__logo {
      display: block;
      width: 185px;

      img {
        width: 100%;
      }
    }

    &__soc-title {
      margin-bottom: 15px;
      @apply tw-font-semibold;
    }

    &__contact-item {
      & + & {
        margin-top: 15px;
      }
    }
  }

  .contact-list {
    display: flex;
    gap: 16px;

    &__icon {
      width: 32px;
      height: 32px;
    }
  }
</style>
