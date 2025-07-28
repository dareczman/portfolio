<template>
  <div
    class="border border-solid border-gray-200 p-1 rounded-lg flex items-center justify-between flex-col gap-1"
  >
    <NuxtImg
      v-slot="{ src, isLoaded, imgAttrs }"
      :src="imgSrc"
      :alt="alt"
      :custom="true"
      width="50"
    >
      <img v-if="isLoaded" v-bind="imgAttrs" :src="src" />

      <p v-else class="font-semibold">{{ name }}</p>
    </NuxtImg>

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
