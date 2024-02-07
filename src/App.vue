<script setup lang="ts">
import Header from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import { ref, onMounted } from 'vue';

const translateY = ref(0);
const touchStartY = ref(0);

const handleWheel = (event: WheelEvent) => {
  const deltaY = event.deltaY;
  mainTranslate(deltaY);
};

const handleTouchStart = (event: TouchEvent) => {
  touchStartY.value = event.touches[0].clientY;
};

const handleTouchMove = (event: any) => {
  const excludedBlock = document.querySelector('.main__projects') as HTMLBodyElement;
  if (!excludedBlock.contains(event.target)) {
    const deltaY = touchStartY.value - event.touches[0].clientY;
    mainTranslate(deltaY);
    touchStartY.value = event.touches[0].clientY;
  }
};

const mainTranslate = (deltaY: number) => {
  const currentPosition = translateY.value;
  if (deltaY > 0 && currentPosition > -50) {
    translateY.value = currentPosition - 50;
  } else if (deltaY < 0 && currentPosition < 0) {
    translateY.value = currentPosition + 50;
  }
}

onMounted(() => {
  window.addEventListener('wheel', handleWheel);
  window.addEventListener('touchstart', handleTouchStart);
  window.addEventListener('touchmove', handleTouchMove);
});
</script>

<template>
  <Header />
  <main :style="{ transform: `translateY(${translateY}%)` }">
    <MainComponent />
    <SkillsComponent />
  </main>
</template>
