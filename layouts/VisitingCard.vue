<template>
  <div class="visiting-card-section pt-20 bg-primary text-white">
    <UContainer class="flex items-center gap-10 justify-evenly flex-col-reverse md:flex-row">
      <div>
        <img src="/img/avatar.png" alt="Dariusz Kaczmarek" class="photo" />
      </div>

      <div class="text-center md:text-left">
        <p class="text-5xl font-bold">Dariusz Kaczmarek</p>

        <p class="text-2xl font-light">Frontend developer</p>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.photo {
  max-width: 250px;
}
</style>
