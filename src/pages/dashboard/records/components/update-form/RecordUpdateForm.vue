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

const onSubmit = handleSubmit(async (submittedData) => {
  const formData = new FormData();

  formData.append('user_id', submittedData.user_id);
  formData.append('photo', submittedData.photo);
  formData.append('pest_type', submittedData.pest_type);
  formData.append('soil_type', submittedData.soil_type);
  formData.append('city', submittedData.city);
  formData.append('barangay', submittedData.barangay);

  const { data, error } = await RecordService.update(props.id, formData);
  const { detail } = data.value || {};

  if (!!error.value) {
    console.log(error.value);

    return;
  }

  showToast(detail, 'success');

  emits('success');
});
</script>

<template>
  <BaseForm :loading="isFetching" @submit.prevent="onSubmit">
    <div class="d-grid row-gap-2">
      <BaseInput name="photo" label="Photo" type="file" />
      <UserDropdown label="Farmer" role="farmer" />
      <div class="row row-cols-2">
        <BaseInput name="pest_type" label="Pest type" />
        <BaseInput name="soil_type" label="Soil type" />
      </div>
      <div class="row row-cols-2">
        <MunicipalityDropdown label="City" />
        <BarangayDropdown :municipality="values?.city" label="Barangay" />
      </div>
    </div>

    <BaseButton type="submit" class="mt-3">Submit</BaseButton>
  </BaseForm>
</template>
