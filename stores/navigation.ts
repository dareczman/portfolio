import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
  const isOpen = ref(false);

  const onToggle = () => {
    isOpen.value = !isOpen.value;
  };

  return { isOpen, onToggle };
});
