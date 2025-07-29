<template>
  <div
    class="border border-solid border-gray-200 p-1 rounded-lg flex items-center justify-between flex-col gap-1"
  >
    <img :src="imgSrc" :alt="name" width="50" />

    <p class="name">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imgSrc: string;
  alt: string;
  name: string;
}

defineProps<Props>();
</script>

<style scoped>
.name {
  font-size: 0.9rem;
  text-transform: capitalize;
}
</style>
