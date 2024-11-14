<script setup lang="ts">
import { useForm } from 'vee-validate';

import { useToast } from '@composables';
import { UserService } from '@services';

import type {
  StaffCreateFormSchema,
  StaffCreateFormEmits,
} from './StaffCreateForm.types';
import { validationSchema } from './StaffCreateForm.schemas';

const { showToast } = useToast();

const emits = defineEmits<StaffCreateFormEmits>();

const { handleSubmit } = useForm<StaffCreateFormSchema>({
  validationSchema,
  initialValues: {
    role: 'staff',
  },
});

const onSubmit = handleSubmit(async (formData) => {
  const { data } = await UserService.create(formData);

  const { detail, data: results } = data.value || {};

  if (!results) return;

  showToast(detail.replace('User', 'Staff'), 'success');

  emits('success');
});
</script>

<template>
  <BaseForm @submit.prevent="onSubmit">
    <div class="d-grid row-gap-4">
      <div class="row row-cols-2">
        <BaseInput name="first_name" label="First name" />
        <BaseInput name="last_name" label="Last name" />
      </div>
      <BaseInput name="email_address" label="Email address" />
      <BaseInput name="phone" label="Phone" />
    </div>

    <BaseButton type="submit" class="mt-3">Submit</BaseButton>
  </BaseForm>
</template>
