<script setup lang="ts">
import { projects } from '@/data/projects';
</script>

<template>
    <swiper-container :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
        :coverflowEffect="{
            rotate: 40,
            stretch: 1,
            depth: 10,
            modifier: 1,
        }" class="projects-swiper">
        <swiper-slide v-for="(slide, index) in projects" :key="index" class="swiper__slide">
            <img :src="`img/projects/${slide.src}`" :alt="`img/projects/${slide.src}`">
            <div class="swiper__overlay">
                <a v-if="slide.link" :href="slide.link.url" class="swiper__link">{{ slide.link.text }}</a>
                <div class="swiper__text">{{ slide.text }}</div>
            </div>
        </swiper-slide>

    </swiper-container>
</template>

<style lang="scss">
@import '../assets/scss/breakpoints.scss';

.projects-swiper .swiper {
    padding-bottom: 10px;
}

.swiper__slide {
    width: 70%;

    img {
        width: 100%;
    }
}

.swiper__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    opacity: 0;
    z-index: 999;
    transition: all 0.25s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 1rem;
    flex-direction: column;
    gap: 0.5rem;

}

.swiper__link {
    background-color: transparent;
    padding: 0.25rem 1rem;
    color: white;
    font-weight: bold;
    border-radius: 1rem;
    font-size: 0.85rem;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
}

.swiper__text {
    font-size: 0.85rem;
}

@include breakpoint('md') {
    .swiper__text {
        font-size: 1rem;
    }

    .swiper__overlay {
        gap: 1rem;
    }
}


.swiper__slide:hover {
    img {
        filter: blur(5px);
    }

    .swiper__overlay {
        opacity: 1;
        background: rgba(0, 0, 0, .2);
    }
}
</style>