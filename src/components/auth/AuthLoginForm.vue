<script setup lang="ts">
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';

import { useToast } from '@composables';
import { useAuthStore } from '@stores';

import type { AuthLoginForm } from './AuthLoginForm.types';

const router = useRouter();

const authStore = useAuthStore();

const { showToast } = useToast();

const { handleSubmit } = useForm<AuthLoginForm>();

const onSubmit = handleSubmit(async ({ email, password }) => {
  const { data, error } = await authStore.login(email, password);
  const { message } = data.value || {};

  console.log({ message });

  if (!!error.value) {
    return;
  }

  showToast(message, 'success');

  router.push('/dashboard/records');
});
</script>

<template>
  <form @submit="onSubmit" class="d-grid row-gap-3">
    <BaseInput name="email" label="Email address" />
    <BaseInput name="password" label="Password" type="password" />
    <BaseButton type="submit">Submit</BaseButton>
  </form>
</template>
