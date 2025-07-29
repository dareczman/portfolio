<template>
  <div class="menu-mobile-section relative">
    <div ref="toggleBtn">
      <UButton color="neutral" variant="subtle" @click="onToggle">
        <UIcon name="solar-hamburger-menu-linear" class="size-10" />
      </UButton>
    </div>

    <Transition>
      <div
        v-if="isOpen"
        class="mobile-menu shadow-md border border-gray-200 rounded-sm z-50 absolute right-0 bg-white"
        :style="{ top: hamburgerIconHeightCalculate + 'px' }"
      >
        <div class="arrow absolute bottom-full right-2" />
        <Placeholder class="p-5 inline-flex">
          <TheNavigation :is-vertical="true" @on-close="onToggle" />
        </Placeholder>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, computed } from 'vue';
import { useElementSize } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useNavigationStore } from '~/stores/navigation';

const toggleBtnElement = useTemplateRef('toggleBtn');
const { height } = useElementSize(toggleBtnElement);

const hamburgerIconHeightCalculate = computed(() => height.value + 8); // 8 is an arrow height

const navigationStore = useNavigationStore();
const { isOpen } = storeToRefs(navigationStore);
const onToggle = navigationStore.onToggle;
</script>

<style scoped>
.arrow {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid var(--color-gray-200);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
