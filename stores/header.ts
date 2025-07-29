import { defineStore } from 'pinia';
import { computed, useTemplateRef } from 'vue';
import { useElementSize } from '@vueuse/core';

export const useHeaderStore = defineStore('header', () => {
  const headerElement = useTemplateRef('headerRef');
  const { height } = useElementSize(headerElement);

  const headerHeightCalculate = computed(() => height.value + 40); //40 is a paddings header

  return { headerElement, headerHeightCalculate };
});
