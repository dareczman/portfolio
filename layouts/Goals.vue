<template>
  <div class="goals-section pt-15 pb-15 md:pt-20 md:pb-20">
    <UContainer>
      <p class="text-2xl md:text-3xl font-bold text-primary">
        {{ $t('my_goals') }}
      </p>

      <USeparator class="pb-10 pt-10" />

      <p class="text-base md:text-xl font-light pb-5" v-html="$t('goals_description')" />
    </UContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
:deep(ul) {
  list-style: disc;
  list-style-position: inside;
}
</style>
