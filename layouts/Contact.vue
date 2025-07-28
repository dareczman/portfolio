<template>
  <div class="contact-section pt-15 pb-15 md:pt-20 md:pb-20 bg-gray-50 dark:text-black">
    <UContainer>
      <p class="text-2xl md:text-3xl font-bold text-primary">
        {{ $t('contact_me') }}
      </p>

      <USeparator class="pb-10 pt-10" />

      <ContactForm />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue';
</script>

<style scoped></style>
