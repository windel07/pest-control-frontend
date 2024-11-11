<script lang="ts" setup>
import { computed, toRef } from 'vue';
import { useIsFormDirty, useIsFormValid } from 'vee-validate';

import type { BaseButtonProps, BaseButtonEmits } from './BaseButton.types';

const { block, loading, disabled, outlined, size, type, variant } =
  defineProps<BaseButtonProps>();

const emits = defineEmits<BaseButtonEmits>();

const isFormDirty = 'submit' === type ? useIsFormDirty() : toRef(false);
const isFormValid = 'submit' === type ? useIsFormValid() : toRef(false);

const buttonClasses = computed<Record<string, boolean>>(() => ({
  [`btn-${!!outlined ? 'outline-' : ''}${variant || 'primary'}`]: true,
  [`btn-${size}`]: !!size,
  'btn-block': !!block,
}));

const isDisabled = computed<boolean>(() => {
  if ('submit' !== type) return disabled;

  if (disabled) return true;

  return isFormDirty.value && !isFormValid.value;
});

const onClick = (evt: Event): void => {
  emits('click', evt);
};
</script>

<template>
  <component
    v-loading="loading"
    v-bind="$attrs"
    class="btn"
    :is="tag || 'button'"
    :class="buttonClasses"
    :disabled="isDisabled"
    :type="type || 'button'"
    @click="onClick"
  >
    <slot />
  </component>
</template>
