<script setup lang="ts">
import { useToast } from '@composables';

const { showConfirmToast } = useToast();

const handleDelete = async (): Promise<void> => {
  const { isConfirmed } = await showConfirmToast(
    'Confirmation',
    'Are you sure you want to delete this staff?',
  );

  if (!isConfirmed) return;
};
</script>

<template>
  <BaseButton variant="link" class="text-danger px-2" @click="handleDelete">
    <i class="bi bi-trash"></i>
  </BaseButton>
</template>
