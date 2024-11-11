<script setup lang="ts">
import { useToast } from '@composables';
import { RecordService } from '@services';

import type {
  RecordsTableDeleteButtonProps,
  RecordsTableDeleteButtonEmits,
} from './RecordsTableDeleteButton.types';

const { showConfirmToast } = useToast();

const props = defineProps<RecordsTableDeleteButtonProps>();
const emits = defineEmits<RecordsTableDeleteButtonEmits>();

const { isFetching, execute: runDelete } = RecordService.delete(
  props.id,
  false,
);

const handleDelete = async (): Promise<void> => {
  const { isConfirmed } = await showConfirmToast(
    'Confirmation',
    'Are you sure you want to delete this record?',
  );

  if (!isConfirmed) return;

  await runDelete();

  emits('success', props.id);
};
</script>

<template>
  <BaseButton
    :loading="isFetching"
    variant="link"
    class="text-danger px-2"
    @click="handleDelete"
  >
    <i class="bi bi-trash"></i>
  </BaseButton>
</template>
