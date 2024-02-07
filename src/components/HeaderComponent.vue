<script setup lang="ts">
  import { faTelegram, faViber, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo-wrapper">
        <div class="header__logo">
          <img src="/img/logo.png" alt="Logo">
        </div>
        <div class="header__info">
          <b>Gleb Mizghulin</b>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div class="header__social-wrapper">
        <a href="viber://chat/?number=0937221016"><font-awesome-icon :icon="faViber" /></a>
        <a href="https://t.me/glebmiz"><font-awesome-icon :icon="faTelegram" /></a>
        <a href="https://www.linkedin.com/in/gleb-miz-830305291"><font-awesome-icon :icon="faLinkedin" /></a>
        <a href="https://www.upwork.com/freelancers/~013f8dfff64cb36be0"><font-awesome-icon :icon="faUpwork" /></a>
      </div>
    </div>
  </header>
  
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/breakpoints.scss';

.header {
  position: fixed;
  width: 100%;
  height: 120px;
  padding: $spacing-md;
  z-index: 999;
}

.header__container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: $spacing-md;
  height: 100%;

  @include breakpoint('xs') {
   flex-direction: row;
  }
}

.header__logo-wrapper{
  display: flex;
  gap: $spacing-md;
  align-items: center;
  flex-direction: space-between;

  @include breakpoint('xs') {
    justify-content: start;
  }
}

.header__logo {
  height: 50px;
  border-radius: 50%;

  img {
    height: 100%;
    margin-top: -2px;
  }
}

.header__info p{
  font-size: $size-xs;
}

.header__social-wrapper {
  display: flex;
  gap: $spacing-xxl;
  align-items: center;
  
  @include breakpoint('xs') {
    margin-left: auto;
    justify-content: start;
    gap: $spacing-xl;
  }
}
</style>
