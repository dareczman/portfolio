<template>
  <div class="experience-step pb-10">
    <div class="flex gap-2 items-center">
      <NuxtImg src="/img/office-building.png" alt="office" width="24" />
      <strong class="text-lg">{{ companyName }}</strong>
    </div>

    <div class="flex gap-2 items-center">
      <NuxtImg src="/img/worker.png" alt="worker" width="24" />
      <p class="text-lg">{{ position }}</p>
    </div>

    <div class="flex gap-2 items-center">
      <NuxtImg src="/img/calendar.png" alt="worker" width="24" />
      <p class="text-lg">{{ timeline }}</p>
    </div>

    <p class="mt-5 text-base md:text-xl" v-html="description" />

    <div class="stack-section mt-10 flex gap-5 flex-wrap justify-center">
      <template v-for="stack in stacks" :key="stack">
        <TechnologyIcon class="w-20" :alt="stack" :img-src="`/img/${stack}.png`" :name="stack" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import TechnologyIcon from './TechnologyIcon.vue';

interface Props {
  companyName: string;
  position: string;
  timeline: string;
  description: string;
  stacks: Array<string>;
}

defineProps<Props>();
</script>

<style scoped></style>
