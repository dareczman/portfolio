import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHeaderStore = defineStore('header', () => {
  const headerHeightCalculate = ref(80);

  return { headerHeightCalculate };
});
