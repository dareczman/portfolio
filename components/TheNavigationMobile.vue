<template>
  <!--  <UPopover-->
  <!--    v-model:open="isOpen"-->
  <!--    :content="{-->
  <!--      align: 'center',-->
  <!--      side: 'bottom',-->
  <!--      sideOffset: 8,-->
  <!--    }"-->
  <!--    arrow-->
  <!--  >-->
  <!--    <UButton color="neutral" variant="subtle">-->
  <!--      <UIcon name="solar-hamburger-menu-linear" class="size-10" />-->
  <!--    </UButton>-->

  <!--    <template #content>-->
  <!--      <Placeholder class="p-5 inline-flex">-->
  <!--        <TheNavigation :is-vertical="true" @on-close="onClose" />-->
  <!--      </Placeholder>-->
  <!--    </template>-->
  <!--  </UPopover>-->
  <div class="menu-mobile-section relative">
    <div ref="toggleBtn">
      <UButton color="neutral" variant="subtle" @click="onToggle">
        <UIcon name="solar-hamburger-menu-linear" class="size-10" />
      </UButton>
    </div>

    <Transition>
      <div
        v-if="!isOpen"
        class="mobile-menu shadow-md border border-gray-200 rounded-sm"
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
import { ref, useTemplateRef, computed } from 'vue';
import { useElementSize } from '@vueuse/core';

const isOpen = ref(false);

const el = useTemplateRef('toggleBtn');
const { height } = useElementSize(el);

const hamburgerIconHeightCalculate = computed(() => height.value + 8); // 8 is an arrow height

const onToggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.mobile-menu {
  position: absolute;
  background: #fff;
  right: 0;
}

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
