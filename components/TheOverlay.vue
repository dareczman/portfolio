<template>
  <div v-if="isOpen" class="fixed w-full h-full" @click="onToggle" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useNavigationStore } from '~/stores/navigation';

const navigationStore = useNavigationStore();
const { isOpen } = storeToRefs(navigationStore);
const onToggle = navigationStore.onToggle;
</script>

<style scoped></style>
