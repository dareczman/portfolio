<template>
  <div class="flex gap-1">
    <div
      v-for="lang in languages"
      :key="lang.value"
      class="cursor-pointer"
      :class="{ 'font-bold': lang.value === locale }"
      @click="changeLanguage(lang.value)"
    >
      {{ lang.value }}
    </div>
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
