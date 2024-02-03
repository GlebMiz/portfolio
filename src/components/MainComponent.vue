<script setup lang="ts">
import SwiperComponent from './SwiperComponent.vue';

const projects = [
  { src: '/img/arti.jpg' },
  { src: '/img/blitzmods.jpg' },
  { src: '/img/arti.jpg' },
  { src: '/img/blitzmods.jpg' },
]
</script>

<template>
  <div class="main-page content-block">
    <div class="container main__container">
      <div class="main__welcome">
        <h1>Hello, I am<br> Full Stack Developer</h1>
        <p>I develop various websites, from one-page landing pages to massive b2b platforms.</p>
      </div>
      <div class="main__projects">
        <SwiperComponent :images="projects" />
      </div>
    </div>
    <div class="down-arrow"></div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/breakpoints.scss';

.main-page {
  background: rgb(27, 27, 27);
  background: linear-gradient(90deg, rgba(27, 27, 27, 1) 0%, rgba(18, 46, 79, 1) 50%, rgb(14, 109, 70) 100%);
}

.main__container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  height: 100%;

  @include breakpoint('md') {
    flex-direction: row;
  }
}

.main__welcome {
  width: 400px;
  max-width: 100%;

  @include breakpoint('xs') {
    min-width: 400px;
  }
}

.main__welcome p {
  margin-top: $spacing-md;
}

.main__projects {
  width: 700px;
  max-width: 100%;
}
</style>
