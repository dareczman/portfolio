<template>
  <div class="experience-section pt-15 pb-15 md:pt-20 md:pb-20 bg-gray-50 dark:text-black">
    <UContainer>
      <p class="text-2xl md:text-3xl font-bold">
        {{ $t('experience') }}
      </p>

      <USeparator class="pb-10 pt-10" />

      <ExperienceStep
        company-name="Procodies"
        position="Senior Frontend Developer"
        :timeline="`08.2025 - ${$t('now')}`"
        :description="$t('procodies')"
        :stacks="['vue', 'ts', 'pinia', 'vite', 'gitlab', 'playwright', 'figma']"
      />

      <USeparator class="pb-10 pt-10" />

      <ExperienceStep
        company-name="TrueVision"
        position="Senior Frontend Developer"
        :timeline="`08.2023 - 07.2025`"
        :description="$t('truevision')"
        :stacks="[
          'vue',
          'js',
          'ts',
          'node',
          'nuxt',
          'pinia',
          'webpack',
          'vite',
          'gitlab',
          'docker',
        ]"
      />

      <USeparator class="pb-10 pt-10" />

      <ExperienceStep
        company-name="Komputronik Biznes"
        position="Frontend Developer"
        timeline="09.2022 - 07.2023"
        :description="$t('komputronik')"
        :stacks="['vue', 'react', 'ts', 'js', 'pinia', 'vuex', 'webpack', 'vite', 'gitlab']"
      />

      <USeparator class="pb-10 pt-10" />

      <ExperienceStep
        company-name="FFM Online"
        position="Frontend Developer"
        timeline="07.2017 - 08.2022"
        :description="$t('ffm_online')"
        :stacks="[
          'vue',
          'angular',
          'js',
          'nuxt',
          'pinia',
          'vuex',
          'webpack',
          'vite',
          'cypress',
          'gitlab',
        ]"
      />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import ExperienceStep from '~/components/ExperienceStep.vue';
</script>

<style scoped>
:deep(ul) {
  list-style: disc;
  list-style-position: inside;
}
</style>
