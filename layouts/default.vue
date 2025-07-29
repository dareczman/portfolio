<template>
  <TheLoadingPage v-if="!isAllImagesLoaded" />

  <div v-else>
    <TheOverlay />
    <TheHeader />

    <main>
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';
import TheLoadingPage from '../components/TheLoadingPage.vue';
import { onMounted, ref } from 'vue';
import TheOverlay from '~/components/TheOverlay.vue';

const isAllImagesLoaded = ref(false);

onMounted(() => {
  const images = Array.from(document.querySelectorAll('img'));

  Promise.all(
    images.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.addEventListener('load', resolve);
        img.addEventListener('error', resolve); // resolve even on error
      });
    })
  ).then(() => {
    isAllImagesLoaded.value = true;
  });
});
</script>
