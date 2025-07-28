<template>
  <div class="form-container">
    <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
      <p class="text-base md:text-xl mb-10">{{ $t('please_contact_me') }}</p>
      <div class="flex gap-5 flex-col md:flex-row">
        <UFormField :label="$t('username')" name="name" required class="form-field-wrapper">
          <UInput
            v-model="state.name"
            :loading="isLoading"
            :disabled="isLoading"
            icon="line-md-account"
            size="xl"
            maxlength="50"
            class="dark:text-black"
          />
        </UFormField>

        <UFormField :label="$t('email')" name="email" required class="form-field-wrapper">
          <UInput
            v-model="state.email"
            :loading="isLoading"
            :disabled="isLoading"
            icon="line-md-email"
            size="xl"
            maxlength="50"
          />
        </UFormField>
      </div>

      <UFormField :label="$t('title')" name="title" required class="form-field-wrapper">
        <UInput
          v-model="state.title"
          :loading="isLoading"
          :disabled="isLoading"
          icon="material-symbols-subtitles-outline"
          size="xl"
          maxlength="50"
        />
      </UFormField>

      <UFormField :label="$t('message')" name="message" required class="form-field-wrapper">
        <UTextarea
          v-model="state.message"
          :loading="isLoading"
          :disabled="isLoading"
          icon="material-symbols-chat-bubble-outline"
          :rows="8"
          size="xl"
          :maxrows="12"
          :minrows="8"
          autoresize
          maxlength="600"
        />
      </UFormField>

      <div class="button-wrapper">
        <UButton
          type="submit"
          :loading="isLoading"
          :disabled="isLoading"
          size="xl"
          icon="i-lucide-rocket"
          class="submit-btn"
        >
          {{ $t('send_message') }}
        </UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { FormError, FormSubmitEvent } from '@nuxt/ui';
import { validateEmail } from '~/utils/email-validation';
import emailjs from 'emailjs-com';

interface State {
  name: string;
  email: string;
  message: string;
  title: string;
}

const state = reactive<State>({
  name: '',
  email: '',
  message: '',
  title: '',
});

const isLoading = ref<boolean>(false);

const { t } = useI18n();
const toast = useToast();

const validate = (state: State): FormError[] => {
  const errors = [];

  if (state.name.length < 3)
    errors.push({ name: 'name', message: t('required_filed', { min: 3 }) });
  if (!validateEmail(state.email)) errors.push({ name: 'email', message: t('email_invalid') });
  if (state.title.length < 3)
    errors.push({ name: 'title', message: t('required_filed', { min: 5 }) });
  if (state.message.length < 10)
    errors.push({ name: 'message', message: t('required_filed', { min: 10 }) });

  return errors;
};

const onSubmit = async (event: FormSubmitEvent<typeof state>) => {
  isLoading.value = true;
  try {
    await emailjs.send('service_2eidl48', 'template_bfi61yo', event.data, 'lb6JX5eakbEOvN-Ah');

    toast.add({ title: t('success'), description: t('sent_message'), color: 'success' });
    state.name = state.email = state.message = state.title = '';
  } catch (error) {
    toast.add({ title: t('Error'), description: t('error_message'), color: 'error' });
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.form-field-wrapper {
  width: 100%;
}

.form-field-wrapper :deep(div) {
  width: 100%;
}
.button-wrapper {
  display: flex;
  justify-content: end;
}

:deep(.submit-btn) {
  cursor: pointer;
}
</style>
