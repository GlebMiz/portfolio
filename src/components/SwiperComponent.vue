<script setup lang="ts">
import { ref, defineProps } from 'vue';
const props = defineProps(['images']);
const images = ref(props.images || []);
</script>

<template>
    <swiper-container :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
        :coverflowEffect="{
            rotate: 40,
            stretch: 1,
            depth: 10,
            modifier: 1,
            slideShadows: true,
        }" :pagination="true" class="projects-swiper">
        <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image.src" :alt="image.src">
            <div class="swiper__text">{{ image.text }}</div>
        </swiper-slide>

    </swiper-container>
</template>

<style lang="scss">
 .projects-swiper .swiper{
    padding-bottom: 10px;
}
.projects-swiper swiper-slide {
    width: 70%;

    img {
        width: 100%;
    }
}
.swiper__text{
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>