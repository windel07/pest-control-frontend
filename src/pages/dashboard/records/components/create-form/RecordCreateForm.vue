<script setup lang="ts">
import { useForm } from 'vee-validate';

import { useToast } from '@composables';
import { RecordService } from '@services';
import {
  MunicipalityDropdown,
  BarangayDropdown,
  UserDropdown,
} from '@components/misc';

import type {
  RecordCreateFormSchema,
  RecordCreateFormEmits,
} from './RecordCreateForm.types';
import { validationSchema } from './RecordCreateForm.schemas';

const { showToast } = useToast();

const emits = defineEmits<RecordCreateFormEmits>();

const { values, handleSubmit } = useForm<RecordCreateFormSchema>({
  validationSchema,
});

const onSubmit = handleSubmit(async (formData) => {
  const { data } = await RecordService.create(formData);
  const { detail } = data.value || {};

  showToast(detail, 'success');

  emits('success');
});
</script>

<template>
  <BaseForm @submit.prevent="onSubmit">
    <div class="d-grid row-gap-2">
      <UserDropdown label="Farmer" role="farmer" />
      <BaseInput name="pest_type" label="Pest type" />
      <BaseInput name="soil_type" label="Soil type" />
      <MunicipalityDropdown />
      <BarangayDropdown :municipality="values?.city" />
    </div>

    <BaseButton type="submit" class="mt-3">Submit</BaseButton>
  </BaseForm>
</template>
