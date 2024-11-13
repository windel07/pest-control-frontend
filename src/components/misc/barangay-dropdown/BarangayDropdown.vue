<script lang="ts" setup>
import { computed } from 'vue';

import { municipalities } from '@datas';

import type { BarangayDropdownProps } from './BarangayDropdown.types';

const props = defineProps<BarangayDropdownProps>();

const options = computed<Record<string, string>>(() => {
  if (!props.municipality) return [];

  const { barangays } = municipalities.find(
    ({ name }) => name === props.municipality,
  );

  return barangays.map((barangay) => ({
    text: barangay,
    value: barangay,
  }));
});
</script>

<template>
  <BaseSelect :options="options" :disabled="!options.length" name="barangay">
    <template v-slot:first>
      <option :value="undefined">Select Barangay</option>
    </template>
  </BaseSelect>
</template>
