<template>
  <div class="fav-empty">
    <div class="fav-empty__img-wrap">
      <img class="fav-empty__img" width="260" height="227" src="@/assets/images/fav.svg" alt="пустое избранное">
    </div>
    <p class="fav-empty__text">В избранном пока пусто</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .fav-empty {
    padding: 30px 0px;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include sm {
      min-height: 300px;
    }

    &__text {
      margin-top: 40px;
      font-size: 24px;
      line-height: normal;

      @include sm {
        margin-top: 25px;
        font-size: 16px;
      }
    }

    &__img {
      max-width: 260px;
      width: 100%;

      @include sm {
        max-width: 140px;
      }
    }
  }
</style>
