<script lang="ts" setup>
import { computed } from 'vue';

import { municipalities } from '@datas';

const options = computed<Record<string, string>>(() =>
  municipalities.map(({ name }) => ({
    text: name,
    value: name,
  })),
);
</script>

<template>
  <BaseSelect :options="options" name="city" label="Municipality">
    <template v-slot:first>
      <option :value="undefined" disabled>Select Municipality</option>
    </template>
  </BaseSelect>
</template>
