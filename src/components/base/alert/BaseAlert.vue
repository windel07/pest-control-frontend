<script lang="ts" setup>
import { computed, ref } from 'vue';

import type { HTMLClasses } from '@types';

import type { BaseAlertProps } from './BaseAlert.types';

const { dismissible, variant } = defineProps<BaseAlertProps>();

const alertClasses = computed<HTMLClasses>(() => ({
  [`alert-${variant}`]: !!variant,
  'alert-dismissible fade show': dismissible,
}));

const isDismissed = ref<boolean>(false);
</script>

<template>
  <div
    v-if="!isDismissed"
    v-bind="$attrs"
    class="alert py-2 px-3 small"
    :class="alertClasses"
    role="alert"
  >
    <slot />

    <button
      v-if="dismissible"
      @click="() => (isDismissed = !isDismissed)"
      type="button"
      class="btn-close alert__toggle"
      aria-label="Close"
    ></button>
  </div>
</template>
