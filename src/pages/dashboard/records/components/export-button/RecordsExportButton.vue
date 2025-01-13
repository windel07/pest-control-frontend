<script lang="ts" setup>
import { computed, ref } from 'vue';
import { saveAs } from 'file-saver';
import { PhExport } from '@phosphor-icons/vue';

import { RecordService } from '@services';

import type { RecordsExportButtonProps } from './RecordsExportButton.types';

const props = defineProps<RecordsExportButtonProps>();

const isExporting = ref<boolean>(false);

const parameters = computed<string>(() => {
  return Object.entries({
    city: props.city,
    barangay: props.barangay,
    month: props.month,
    year: props.year,
  })
    .filter(([_, value]) => !!value)
    .map(([key, value]) => `${key}=${value || ''}`)
    .join('&');
});

const handleExport = async () => {
  isExporting.value = true;

  const { data } = await RecordService.export(parameters.value);

  isExporting.value = false;

  saveAs(data.value, 'Records.csv');
};
</script>

<template>
  <BaseButton
    :loading="isExporting"
    @click="handleExport"
    class="text-light d-flex align-items-center"
  >
    <PhExport :size="20" class="me-3" />Export
  </BaseButton>
</template>
