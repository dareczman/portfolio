<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
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
