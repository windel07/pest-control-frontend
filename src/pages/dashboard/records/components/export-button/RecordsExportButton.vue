<script lang="ts" setup>
import { ref } from 'vue';
import { saveAs } from 'file-saver';

import { RecordService } from '@services';

const isExporting = ref<boolean>(false);

const handleExport = async () => {
  isExporting.value = true;

  const { data } = await RecordService.export();

  isExporting.value = false;

  saveAs(data.value, 'Records.csv');
};
</script>

<template>
  <BaseButton :loading="isExporting" @click="handleExport">Export</BaseButton>
</template>
