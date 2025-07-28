<template>
  <div class="about-me-section pt-15 pb-15 md:pt-20 md:pb-20">
    <UContainer>
      <p class="text-2xl md:text-3xl font-bold text-primary">
        {{ $t('about_me') }}
      </p>

      <USeparator class="pb-10 pt-10" />

      <p class="text-base md:text-xl font-light pb-5">
        {{ $t('about_me_description') }}
      </p>

      <p class="text-base md:text-xl font-light">
        {{ $t('about_me_description2') }}
      </p>
    </UContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
