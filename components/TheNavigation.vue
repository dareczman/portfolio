<template>
  <div>
    <UNavigationMenu :items="items" class="w-full justify-center hidden md:block" />
  </div>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import type { NavigationMenuItem } from '@nuxt/ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const items: ComputedRef<NavigationMenuItem[]> = computed(() => [
  {
    label: t('about_me'),
    icon: 'material-symbols-article-person-outline',
    to: '#about-me',
  },
  {
    label: t('experience'),
    icon: 'material-symbols-home-work-outline',
    to: '#experience',
  },
  {
    label: t('goals'),
    icon: 'fluent-target-arrow-20-regular',
    to: '#goals',
  },
  {
    label: t('contact'),
    icon: 'material-symbols-mail-outline-rounded',
    to: '#contact',
  },
]);
</script>

<style scoped></style>
