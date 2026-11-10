<template>
  <div class="flex gap-1">
    <button
      v-for="lang in languages"
      :key="lang.value"
      type="button"
      class="cursor-pointer min-w-10 min-h-10 rounded focus-visible:outline-2 focus-visible:outline-offset-2"
      :class="{ 'font-bold': lang.value === locale }"
      :aria-pressed="lang.value === locale"
      :aria-label="lang.value === 'pl' ? 'PL — Polski' : 'EN — English'"
      @click="changeLanguage(lang.value)"
    >
      {{ lang.value.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { LanguageOption } from '~/types/components/countrySelector';

const { locale } = useI18n();

const languages = ref<LanguageOption[]>([{ value: 'pl' }, { value: 'en' }]);

const changeLanguage = (lang: string) => {
  locale.value = lang;
};
</script>

<style scoped></style>
