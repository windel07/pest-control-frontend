<script setup lang="ts">
import { useForm } from 'vee-validate';

import { pestTypes, soilTypes } from '@datas';
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
  formData.append(
    'pest_type',
    'Others' === submittedData.pest_type
      ? submittedData.other_pest_type
      : submittedData.pest_type,
  );
  formData.append(
    'soil_type',
    'Others' === submittedData.soil_type
      ? submittedData.other_soil_type
      : submittedData.soil_type,
  );
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
      <img
        :src="values.photo"
        class="img-fluid mb-3"
        width="300"
        height="300"
      />
      <BaseInput name="photo" label="Photo" type="file" />
      <UserDropdown label="Farmer" role="farmer" />
      <div class="row row-cols-2">
        <div>
          <BaseSelect :options="pestTypes" name="pest_type" label="Pest type">
            <template v-slot:first>
              <option :value="undefined">Select Pest Type</option>
            </template>
          </BaseSelect>

          <BaseInput
            v-if="'Others' === values.pest_type"
            name="other_pest_type"
            class="mt-2"
          />
        </div>
        <div>
          <BaseSelect :options="soilTypes" name="soil_type" label="Soil type">
            <template v-slot:first>
              <option :value="undefined">Select Soil Type</option>
            </template>
          </BaseSelect>

          <BaseInput
            v-if="'Others' === values.soil_type"
            name="other_soil_type"
            class="mt-2"
          />
        </div>
      </div>
      <div class="row row-cols-2">
        <MunicipalityDropdown label="City" />
        <BarangayDropdown :municipality="values?.city" label="Barangay" />
      </div>
    </div>

    <BaseButton type="submit" class="mt-3">Submit</BaseButton>
  </BaseForm>
</template>
