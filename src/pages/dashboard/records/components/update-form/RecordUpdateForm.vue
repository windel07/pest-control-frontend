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
  RecordUpdateFormSchema,
  RecordUpdateFormProps,
  RecordUpdateFormEmits,
} from './RecordUpdateForm.types';
import { validationSchema } from './RecordUpdateForm.schemas';

const { showToast } = useToast();

const props = defineProps<RecordUpdateFormProps>();
const emits = defineEmits<RecordUpdateFormEmits>();

// Data fetching
const {
  isFetching,
  data: recordData,
  onFetchResponse,
} = RecordService.read(props.id);

onFetchResponse(() => {
  const { data } = recordData.value || {};

  setValues(data);
});

// Form handling
const { values, setValues, handleSubmit } = useForm<RecordUpdateFormSchema>({
  validationSchema,
});

const onSubmit = handleSubmit(async (formData) => {
  const { data } = await RecordService.update(props.id, formData);
  const { detail } = data.value || {};

  showToast(detail, 'success');

  emits('success');
});
</script>

<template>
  <BaseForm :loading="isFetching" @submit.prevent="onSubmit">
    <div class="d-grid row-gap-2">
      <UserDropdown label="Farmer" role="farmer" />
      <BaseInput name="pest_type" label="Pest type" />
      <BaseInput name="soil_type" label="Soil type" />
      <MunicipalityDropdown label="City" />
      <BarangayDropdown :municipality="values?.city" label="Barangay" />
    </div>

    <BaseButton type="submit" class="mt-3">Submit</BaseButton>
  </BaseForm>
</template>
