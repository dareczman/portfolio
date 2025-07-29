<template>
  <header class="pt-5 pb-5 shadow-md">
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
</script>

<style scoped></style>
