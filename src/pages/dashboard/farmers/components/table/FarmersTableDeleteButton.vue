<script setup lang="ts">
import { ref } from 'vue';

import { useToast } from '@composables';
import { UserService } from '@services';

import type {
  FarmersTableDeleteButtonProps,
  FarmersTableDeleteButtonEmits,
} from './FarmersTableDeleteButton.types';

const { showConfirmToast, showToast } = useToast();

const props = defineProps<FarmersTableDeleteButtonProps>();
const emits = defineEmits<FarmersTableDeleteButtonEmits>();

const isProcessing = ref<boolean>(false);

const handleDelete = async (): Promise<void> => {
  const { isConfirmed } = await showConfirmToast(
    'Confirmation',
    'Are you sure you want to delete this farmer?',
  );

  if (!isConfirmed) return;

  isProcessing.value = true;

  const { data } = await UserService.delete(props.id);
  const { detail } = data.value || {};

  isProcessing.value = false;

  showToast(detail.replace('User', 'Farmer'), 'success');

  emits('success');
};
</script>

<template>
  <BaseButton variant="link" class="text-danger px-2" @click="handleDelete">
    <i class="bi bi-trash"></i>
  </BaseButton>
</template>
