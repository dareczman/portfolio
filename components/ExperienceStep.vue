<template>
  <div class="experience-step pb-10">
    <div class="flex gap-2 items-center">
      <img
        :src="`${config.app.baseURL}img/office-building.png`"
        alt=""
        width="24"
        height="24"
        loading="lazy"
      />
      <strong class="text-lg">{{ companyName }}</strong>
    </div>

    <div class="flex gap-2 items-center">
      <img
        :src="`${config.app.baseURL}img/worker.png`"
        alt=""
        width="24"
        height="24"
        loading="lazy"
      />
      <p class="text-lg">{{ position }}</p>
    </div>

    <div class="flex gap-2 items-center">
      <img
        :src="`${config.app.baseURL}img/calendar.png`"
        alt=""
        width="24"
        height="24"
        loading="lazy"
      />
      <p class="text-lg">{{ timeline }}</p>
    </div>

    <div class="mt-5 text-base md:text-xl" v-html="sanitizedDescription" />

    <div class="stack-section mt-10 flex gap-5 flex-wrap justify-center">
      <template v-for="stack in stacks" :key="stack">
        <TechnologyIcon
          class="w-20"
          :alt="stack"
          :img-src="`${config.app.baseURL}img/${stack}.png`"
          :name="stack"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DOMPurify from 'isomorphic-dompurify';
import TechnologyIcon from './TechnologyIcon.vue';

interface Props {
  companyName: string;
  position: string;
  timeline: string;
  description: string;
  stacks: string[];
}

const props = defineProps<Props>();

const config = useRuntimeConfig();

const sanitizedDescription = computed(() =>
  DOMPurify.sanitize(props.description, {
    ALLOWED_TAGS: ['br', 'p', 'ul', 'ol', 'li', 'strong', 'b', 'em', 'i'],
    ALLOWED_ATTR: [],
  })
);
</script>
