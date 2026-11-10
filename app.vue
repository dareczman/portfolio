<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
import { useHead, useSeoMeta } from '#imports';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
  },
}));

useSeoMeta({
  description: () =>
    locale.value === 'pl'
      ? 'Dariusz Kaczmarek — frontend developer. Poznaj moje doświadczenie, technologie, w których pracuję, i skontaktuj się ze mną.'
      : 'Dariusz Kaczmarek — frontend developer. Explore my experience, the technologies I work with, and get in touch.',
});
</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s;
}
.layout-enter-from,
.layout-leave-to {
  filter: blur(1rem);
}
</style>
