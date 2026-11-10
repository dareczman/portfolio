<template>
  <header ref="headerRef" class="pt-5 pb-5 shadow-md fixed w-full bg-white dark:text-black z-1">
    <UContainer class="flex items-center justify-between gap-1 md:gap-2">
      <strong class="text-primary">Dariusz Kaczmarek</strong>

      <TheNavigation class="hidden md:block" />

      <CountrySelector />

      <TheNavigationMobile class="md:hidden" />
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import { useTemplateRef, watch } from 'vue';
import { useElementSize } from '@vueuse/core';
import TheNavigation from '~/components/TheNavigation.vue';
import CountrySelector from '~/components/CountrySelector.vue';
import TheNavigationMobile from '~/components/TheNavigationMobile.vue';
import { useHeaderStore } from '~/stores/header';

const headerStore = useHeaderStore();
const headerRef = useTemplateRef<HTMLElement>('headerRef');

const { height } = useElementSize(headerRef, { width: 0, height: 80 }, { box: 'border-box' });

watch(
  height,
  (value) => {
    if (value > 0) {
      headerStore.headerHeightCalculate = value;
    }
  },
  { immediate: true }
);
</script>

<style scoped></style>
