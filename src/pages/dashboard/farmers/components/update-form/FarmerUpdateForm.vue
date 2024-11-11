<script setup lang="ts">
import { useForm } from 'vee-validate';

import { useToast } from '@composables';
import { UserService } from '@services';

import type {
  FarmerUpdateFormSchema,
  FarmerUpdateFormProps,
  FarmerUpdateFormEmits,
} from './FarmerUpdateForm.types';
import { validationSchema } from './FarmerUpdateForm.schemas';

const { showToast } = useToast();

const props = defineProps<FarmerUpdateFormProps>();
const emits = defineEmits<FarmerUpdateFormEmits>();

// Data fetching
const {
  isFetching,
  data: farmerData,
  onFetchResponse,
} = UserService.read(props.id);

onFetchResponse(() => {
  const { data } = farmerData.value || {};

  setValues(data);
});

// Form handling
const { setValues, handleSubmit } = useForm<FarmerUpdateFormSchema>({
  validationSchema,
  initialValues: {
    role: 'farmer',
  },
});

const onSubmit = handleSubmit(async (formData) => {
  const { data } = await UserService.update(props.id, formData);

  const { detail, data: results } = data.value || {};

  if (!results) return;

  showToast(detail.replace('User', 'Farmer'), 'success');

  emits('success');
});
</script>

<template>
  <BaseForm :loading="isFetching" @submit.prevent="onSubmit">
    <div class="d-grid row-gap-2">
      <BaseInput name="email" label="Email address" />
      <BaseInput name="first_name" label="First name" />
      <BaseInput name="last_name" label="Last name" />
      <BaseInput name="phone" label="Phone" />
    </div>

    <BaseButton type="submit" class="mt-3">Submit</BaseButton>
  </BaseForm>
</template>
