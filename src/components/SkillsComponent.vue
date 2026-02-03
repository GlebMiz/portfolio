<script setup lang="ts">
import { skills } from '@/data/skills';
</script>
<template>
  <div class="skills-page content-block">
    <div class="container skills__container">
      <div class="skills__header">
        <p>
          I have been developing websites for 3 years now and have experience with the various technologies needed to
          develop a fully functioning website. It doesn’t matter if it’s a store, a forum or just a business card, it
          will
          fullfill its job 100%.
        </p>
      </div>
      <div class="skills__lines">
        <div style="width: 80%;"></div>
        <div style="width: 50%;"></div>
      </div>
      <div class="skills__content">
        <h2 class="skills__content__header">My Skills</h2>
        <div class="skills__content__list">
          <div v-for="(row, r_key) in skills" :key="r_key" class="skills__content__row">
            <div v-for="(skill, s_key) in row" :key="s_key" class="skills__content__col">
              <img :src="skill.src" alt="JavaScript">
              {{ skill.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/breakpoints.scss';

.skills-page {
  background: rgb(27, 27, 27);
  background: linear-gradient(90deg, rgba(27, 27, 27, 1) 0%, rgba(18, 46, 79, 1) 50%, rgb(14, 109, 70) 100%);
  padding-top: 130px;

  @include breakpoint('md') {
    padding-top: 200px;
  }
}

.skills__container {
  height: 100%;
  justify-content: space-between;
}

.skills__header {
  width: 700px;
  max-width: 100%;
}

.skills__lines {
  margin-top: 10px;

  >div {
    margin-top: 20px;
    border-bottom: solid 3px $white;

    @include breakpoint('xs', 'max') {
      border-bottom-width: 2px;

      &:not(:first-child) {
        display: none;
      }

      &:first-child {
        width: 100% !important;
      }
    }
  }
}

.skills__content {
  margin-top: 20px;

  @include breakpoint('xs') {
    margin-top: 50px;
  }
}

.skills__content__list {
  margin-top: 20px;
  font-size: $size-xs;

  @include breakpoint('xs') {
    font-size: $size-sm;
    margin-top: 50px;
  }

  @include breakpoint('sm') {
    font-size: $size-lg;
  }
}

.skills__content__row {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 20px;
  padding-bottom: 20px;

  &:not(:last-child) {
    border-bottom: solid 3px rgba(255, 255, 255, 0.15);
  }

  @include breakpoint('xs') {
    margin-top: 30px;
    padding-bottom: 30px;
  }
}

.skills__content__col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-lg;

  img {
    height: 30px;

    @include breakpoint('md') {
      height: 50px;
    }
  }
}
</style>
