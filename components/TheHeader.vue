<template>
  <header ref="headerRef" class="pt-5 pb-5 shadow-md fixed w-full bg-white dark:text-black">
    <UContainer class="flex items-center justify-between gap-1 md:gap-2">
      <strong class="text-primary">Dariusz Kaczmarek</strong>

      <TheNavigation class="hidden md:block" />

      <CountrySelector />

      <TheNavigationMobile class="md:hidden" />
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import TheNavigation from '~/components/TheNavigation.vue';
import CountrySelector from '~/components/CountrySelector.vue';
import TheNavigationMobile from '~/components/TheNavigationMobile.vue';
import { storeToRefs } from 'pinia';
import { useHeaderStore } from '~/stores/header';

const headerStore = useHeaderStore();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { headerElement } = storeToRefs(headerStore);
</script>

<style scoped></style>
