<template>
  <div>
    <UNavigationMenu
      :orientation="isVertical ? 'vertical' : 'horizontal'"
      :items="items"
      class="w-full justify-center"
    />
  </div>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import type { NavigationMenuItem } from '@nuxt/ui';
import { useI18n } from 'vue-i18n';

defineProps<{
  isVertical?: boolean;
}>();

const emit = defineEmits(['onClose']);

const { t } = useI18n();

const items: ComputedRef<NavigationMenuItem[]> = computed(() => [
  {
    label: t('about_me'),
    icon: 'material-symbols-article-person-outline',
    onSelect: () => emit('onClose'),
    to: '#about-me',
  },
  {
    label: t('experience'),
    icon: 'material-symbols-home-work-outline',
    to: '#experience',
    onSelect: () => emit('onClose'),
  },
  {
    label: t('goals'),
    icon: 'fluent-target-arrow-20-regular',
    to: '#goals',
    onSelect: () => emit('onClose'),
  },
  {
    label: t('contact'),
    icon: 'material-symbols-mail-outline-rounded',
    to: '#contact',
    onSelect: () => emit('onClose'),
  },
]);
</script>

<style scoped></style>
